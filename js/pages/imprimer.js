import { SUBJECTS } from '../../data/subjects.js';
import { printSubjectBatch } from '../print.js';

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

export async function renderImprimer(subjectId) {
  const root = document.getElementById('app-root');

  if (subjectId) {
    const subject = SUBJECTS.find(s => s.id === subjectId);
    if (!subject) { renderImprimerList(root); return; }

    const chapters = subject.chapters.filter(ch => FICHE_MODULES[ch.id]);

    root.innerHTML = `
      <div style="max-width:600px;margin:0 auto;padding:2rem 1rem;text-align:center">
        <div class="loading" id="batch-status">Chargement des ${chapters.length} fiches…</div>
      </div>`;

    const mods = await Promise.all(chapters.map(ch => FICHE_MODULES[ch.id]()));
    const fiches = mods.map(m => m.FICHE);

    document.getElementById('batch-status').textContent = 'Ouverture de la fenêtre d\'impression…';
    await printSubjectBatch(subject, fiches);

    // Revenir à la liste après ouverture
    renderImprimerList(root);
  } else {
    renderImprimerList(root);
  }
}

function renderImprimerList(root) {
  const printableSubjects = SUBJECTS.filter(s => s.chapters.some(ch => FICHE_MODULES[ch.id]));

  root.innerHTML = `
    <div style="max-width:720px;margin:0 auto;padding:2rem 1rem">
      <h1 style="margin-bottom:0.3rem">⎙ Imprimer les fiches</h1>
      <p class="muted" style="margin-bottom:2rem">
        Chaque bouton ouvre un <strong>nouvel onglet</strong> avec les fiches prêtes à imprimer ou télécharger en PDF.
      </p>
      ${printableSubjects.map(s => {
        const chapters = s.chapters.filter(ch => FICHE_MODULES[ch.id]);
        return `
          <div style="margin-bottom:2rem">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:0.6rem">
              <h2 style="color:${s.color};font-size:1rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em">${s.label}</h2>
              <a href="#/imprimer/${s.id}" class="btn btn-outline" style="border-color:${s.color};color:${s.color};font-size:0.82rem">
                ⎙ Tout imprimer (${chapters.length} fiches)
              </a>
            </div>
            <div style="display:flex;flex-direction:column;gap:0.3rem">
              ${chapters.map(ch => `
                <div style="display:flex;align-items:center;justify-content:space-between;padding:0.4rem 0.7rem;background:var(--surface);border-radius:var(--radius-sm);border:1px solid var(--border)">
                  <span style="font-size:0.88rem">${ch.label}</span>
                  <a href="#/fiches/${ch.id}" class="btn btn-outline" style="font-size:0.78rem;padding:0.2rem 0.55rem">⎙ Fiche</a>
                </div>`).join('')}
            </div>
          </div>`;
      }).join('')}
    </div>`;
}
