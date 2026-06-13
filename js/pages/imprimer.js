import { SUBJECTS } from '../../data/subjects.js';
import { renderMath } from '../utils.js';

const FICHE_MODULES = {
  EE_CHAIN: () => import('../../data/fiches/ee_chaine_energie.js'),
  EE_SRC:   () => import('../../data/fiches/ee_sources_energie.js'),
  EE_ELEC:  () => import('../../data/fiches/ee_electrotechnique.js'),
  EE_POW:   () => import('../../data/fiches/ee_elec_puissance.js'),
  EE_STOCK: () => import('../../data/fiches/ee_stockage.js'),
  EE_TRANS: () => import('../../data/fiches/ee_transport.js'),
  EE_BILAN: () => import('../../data/fiches/ee_bilan_energetique.js'),
  EE_DD:    () => import('../../data/fiches/ee_dev_durable.js'),
  PC_ENERGIE:   () => import('../../data/fiches/pc_energie.js'),
  PC_OXREDO:    () => import('../../data/fiches/pc_oxredo.js'),
  PC_SIGNAUX:   () => import('../../data/fiches/pc_signaux.js'),
  PC_TRANSPORT: () => import('../../data/fiches/pc_transport.js'),
  PC_THERMO:    () => import('../../data/fiches/pc_thermo.js'),
  PC_MECA:      () => import('../../data/fiches/pc_meca.js'),
  PC_ROTATION:  () => import('../../data/fiches/pc_rotation.js'),
  PC_LUMIERE:   () => import('../../data/fiches/pc_lumiere.js'),
  PC_FLUIDES:   () => import('../../data/fiches/pc_fluides.js'),
  PC_CHANGE:    () => import('../../data/fiches/pc_changement.js'),
  PC_RADIOACT:  () => import('../../data/fiches/pc_radioact.js'),
  PC_ACIDOBASE: () => import('../../data/fiches/pc_acidobase.js'),
  PC_SONORE:    () => import('../../data/fiches/pc_sonore.js'),
  PC_ONDES:     () => import('../../data/fiches/pc_ondes_em.js'),
  MA_ANA:   () => import('../../data/fiches/maths_analyse.js'),
  MA_ALG:   () => import('../../data/fiches/maths_algebre.js'),
  MA_PROB:  () => import('../../data/fiches/maths_probas.js'),
  MA_TRIG:  () => import('../../data/fiches/maths_trigo_complexes.js'),
};

function enterPreviewMode() {
  document.body.classList.add('print-preview');
}

function exitPreviewMode() {
  document.body.classList.remove('print-preview');
}

function downloadPDF(element, filename) {
  if (!window.html2pdf) {
    alert('La bibliothèque PDF n\'est pas encore chargée. Réessaie dans quelques secondes.');
    return;
  }
  html2pdf()
    .from(element)
    .set({
      margin: [1.5, 1.5, 1.5, 1.5],
      filename,
      image: { type: 'jpeg', quality: 0.97 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'cm', format: 'a5', orientation: 'portrait' }
    })
    .save();
}

export async function renderImprimer(subjectId) {
  if (subjectId) {
    enterPreviewMode();
    await renderBatch(subjectId);
  } else {
    exitPreviewMode();
    renderImprimerList();
  }
}

function renderImprimerList() {
  const root = document.getElementById('app-root');
  const printableSubjects = SUBJECTS.filter(s => s.chapters.some(ch => FICHE_MODULES[ch.id]));

  root.innerHTML = `
    <div style="max-width:760px;margin:0 auto;padding:2rem 1rem">
      <h1 style="margin-bottom:0.4rem">⎙ Imprimer les fiches</h1>
      <p class="muted" style="margin-bottom:2rem">Choisis une matière pour générer le PDF de toutes ses fiches, ou imprime chapitre par chapitre.</p>
      ${printableSubjects.map(s => {
        const chapters = s.chapters.filter(ch => FICHE_MODULES[ch.id]);
        return `
          <div style="margin-bottom:2rem">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:0.75rem">
              <h2 style="color:${s.color};font-size:1rem;text-transform:uppercase;letter-spacing:0.06em;font-weight:700">${s.label}</h2>
              <a href="#/imprimer/${s.id}" class="btn btn-outline" style="border-color:${s.color};color:${s.color};font-size:0.82rem;padding:0.3rem 0.8rem">
                ⎙ Tout imprimer — ${chapters.length} fiches
              </a>
            </div>
            <div style="display:flex;flex-direction:column;gap:0.35rem">
              ${chapters.map(ch => `
                <div style="display:flex;align-items:center;justify-content:space-between;padding:0.45rem 0.75rem;background:var(--surface);border-radius:var(--radius-sm);border:1px solid var(--border)">
                  <span style="font-size:0.88rem">${ch.label}</span>
                  <a href="#/fiches/${ch.id}" class="btn btn-outline" style="font-size:0.78rem;padding:0.2rem 0.55rem" title="Ouvrir la fiche (bouton Imprimer en haut)">⎙ Fiche</a>
                </div>`).join('')}
            </div>
          </div>`;
      }).join('')}
    </div>`;
}

async function renderBatch(subjectId) {
  const root = document.getElementById('app-root');
  const subject = SUBJECTS.find(s => s.id === subjectId);

  if (!subject) {
    exitPreviewMode();
    root.innerHTML = `<div style="padding:2rem"><p>Matière introuvable.</p><a href="#/imprimer" class="btn">Retour</a></div>`;
    return;
  }

  const chapters = subject.chapters.filter(ch => FICHE_MODULES[ch.id]);

  root.innerHTML = `
    <div class="print-toolbar" style="position:sticky;top:0;z-index:100;background:#f3f4f6;border-bottom:1px solid #d1d5db;padding:0.75rem 1.5rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
      <a href="#/imprimer" class="btn btn-outline" style="font-size:0.85rem" onclick="document.body.classList.remove('print-preview')">← Retour</a>
      <span style="color:#6b7280;font-size:0.85rem;flex:1">${subject.label} — ${chapters.length} fiches</span>
      <button id="btn-download-pdf" class="btn" style="background:${subject.color};color:#fff;font-size:0.85rem">
        ⬇ Télécharger PDF
      </button>
      <button onclick="window.print()" class="btn btn-outline" style="font-size:0.85rem">⎙ Imprimer</button>
    </div>
    <div id="pdf-content" style="max-width:14.8cm;margin:0 auto;padding:1.2cm 1.4cm;background:#fff;color:#111;font-family:'Helvetica Neue',Arial,sans-serif;font-size:9pt">
      <div style="text-align:center;margin-bottom:2rem;padding-bottom:1rem;border-bottom:2pt solid #111">
        <div style="font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;color:#555;margin-bottom:0.3rem">BAC STI2D — Fiches de révision</div>
        <h1 style="font-size:18pt;margin:0;color:${subject.color}">${subject.label}</h1>
        <div style="font-size:0.8rem;color:#888;margin-top:0.3rem">${chapters.length} chapitres</div>
      </div>
      <div id="batch-chapters"></div>
    </div>`;

  const chaptersEl = document.getElementById('batch-chapters');

  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    const loader = FICHE_MODULES[ch.id];
    if (!loader) continue;

    const mod = await loader();
    const fiche = mod.FICHE;

    const sectionsHtml = fiche.sections.map(sec => `
      <div style="margin-bottom:1rem">
        <h2 style="font-size:11pt;font-weight:700;color:#111;border-bottom:0.5pt solid #ccc;padding-bottom:3pt;margin-bottom:0.4rem">${sec.title}</h2>
        <div class="fiche-section-content" style="font-size:9.5pt;line-height:1.5">${sec.content}</div>
      </div>`).join('');

    const pageBreak = i > 0 ? 'style="margin-top:2rem;padding-top:1.5rem;border-top:1.5pt solid #111"' : '';
    chaptersEl.insertAdjacentHTML('beforeend', `
      <div class="${i > 0 ? 'print-page-break' : ''}" ${pageBreak}>
        <h1 style="font-size:14pt;font-weight:700;color:#111;margin-bottom:1rem">${ch.label}</h1>
        ${sectionsHtml}
      </div>`);
  }

  renderMath(chaptersEl);

  document.getElementById('btn-download-pdf').addEventListener('click', () => {
    const el = document.getElementById('pdf-content');
    downloadPDF(el, `fiches-${subject.id.toLowerCase()}-sti2d.pdf`);
  });
}
