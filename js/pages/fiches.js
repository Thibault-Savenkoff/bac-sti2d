import { SUBJECTS, getChapterById, getAllChapters } from '../../data/subjects.js';
import { renderSubjectFilter } from '../components/subjectFilter.js';
import { markSectionRead, getFichesRead } from '../store.js';
import { renderMath } from '../utils.js';
import { printFiche } from '../print.js';

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

export function renderFichesList(chapterId) {
  const root = document.getElementById('app-root');

  root.innerHTML = `
    <div class="page-layout">
      <aside class="sidebar" id="filter-sidebar"></aside>
      <main class="page-main">
        ${chapterId ? renderFicheReader(chapterId) : renderAllFiches()}
      </main>
    </div>
  `;

  renderSubjectFilter('filter-sidebar', chapterId, 'fiches');

  if (chapterId) {
    loadFiche(chapterId);
  }
}

function renderAllFiches() {
  return `
    <div class="fiches-grid-header">
      <h1>Fiches de révision</h1>
      <p class="muted">Sélectionne une matière dans la barre latérale ou clique sur un chapitre.</p>
    </div>
    <div class="fiches-grid">
      ${SUBJECTS.map(s => s.chapters.map(ch => {
        const read = getFichesRead(ch.id);
        return `
          <a href="#/fiches/${ch.id}" class="fiche-card" style="--subject-color:${s.color}">
            <div class="fiche-card-subject" style="color:${s.color}">${s.shortLabel}</div>
            <div class="fiche-card-title">${ch.label}</div>
            ${read.lastRead ? `<div class="fiche-card-read">Lu ${new Date(read.lastRead).toLocaleDateString('fr-FR')}</div>` : ''}
          </a>`;
      }).join('')).join('')}
    </div>`;
}

function renderFicheReader(chapterId) {
  const info = getChapterById(chapterId);
  if (!info) return '<p class="error">Chapitre introuvable.</p>';
  const { subject, chapter } = info;
  return `
    <div class="fiche-reader" id="fiche-reader">
      <div class="fiche-reader-header" style="--subject-color:${subject.color}">
        <span class="subject-badge" style="background:${subject.colorBg};color:${subject.color}">${subject.shortLabel}</span>
        <h1>${chapter.label}</h1>
        <button id="btn-print-fiche" class="btn btn-outline btn-print" style="margin-left:auto;white-space:nowrap">⎙ Imprimer / PDF</button>
      </div>
      <div class="fiche-loading">Chargement…</div>
    </div>`;
}

async function loadFiche(chapterId) {
  const loader = FICHE_MODULES[chapterId];
  if (!loader) return;

  const mod = await loader();
  const fiche = mod.FICHE;
  const reader = document.getElementById('fiche-reader');
  if (!reader) return;

  const readData = getFichesRead(chapterId);

  const sectionsHtml = fiche.sections.map((sec, i) => {
    const isRead = readData.sections.includes(sec.id);
    return `
      <section class="fiche-section" id="sec-${sec.id}">
        <div class="fiche-section-header">
          <h2>${sec.title}</h2>
          <button class="btn-read ${isRead ? 'read' : ''}" data-section="${sec.id}" data-chapter="${chapterId}">
            ${isRead ? '✓ Lu' : 'Marquer comme lu'}
          </button>
        </div>
        <div class="fiche-section-content">${sec.content}</div>
      </section>`;
  }).join('');

  const tocHtml = `
    <nav class="fiche-toc">
      <h3>Sommaire</h3>
      <ul>
        ${fiche.sections.map(sec => `
          <li><a href="#sec-${sec.id}">${sec.title}</a></li>`).join('')}
      </ul>
    </nav>`;

  reader.querySelector('.fiche-loading').remove();
  reader.insertAdjacentHTML('beforeend', tocHtml + sectionsHtml);

  renderMath(reader);

  reader.querySelectorAll('.btn-read').forEach(btn => {
    btn.addEventListener('click', () => {
      const secId = btn.dataset.section;
      const chId = btn.dataset.chapter;
      markSectionRead(chId, secId);
      btn.classList.add('read');
      btn.textContent = '✓ Lu';
    });
  });

  const info = getChapterById(chapterId);
  document.getElementById('btn-print-fiche')?.addEventListener('click', () => {
    printFiche(chapterId, fiche, info.subject);
  });
}
