import { SUBJECTS, getChapterById } from '../../data/subjects.js';
import { renderSubjectFilter } from '../components/subjectFilter.js';
import { renderMath } from '../utils.js';

const FORMULA_MODULES = {
  EE:    () => import('../../data/formules/formules_ee.js'),
  PC:    () => import('../../data/formules/formules_pc.js'),
  MATHS: () => import('../../data/formules/formules_maths.js'),
};

async function getAllFormulas() {
  const mods = await Promise.all(Object.values(FORMULA_MODULES).map(m => m()));
  return mods.flatMap(m => m.FORMULAS);
}

export async function renderFormules(chapterId) {
  const root = document.getElementById('app-root');

  root.innerHTML = `
    <div class="page-layout">
      <aside class="sidebar" id="filter-sidebar"></aside>
      <main class="page-main">
        <div class="formules-header">
          <h1>Formules & Mémos</h1>
          <input type="search" class="formula-search" id="formula-search" placeholder="Rechercher une formule…">
        </div>
        <div id="formules-content"><div class="loading">Chargement…</div></div>
      </main>
    </div>`;

  renderSubjectFilter('filter-sidebar', chapterId, 'formules');

  const all = await getAllFormulas();
  const filtered = chapterId ? all.filter(f => f.chapterId === chapterId) : all;

  renderFormulaList(filtered, chapterId, root);

  document.getElementById('formula-search')?.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    const results = all.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.symbol.toLowerCase().includes(q) ||
      (f.note && f.note.toLowerCase().includes(q))
    );
    renderFormulaList(results, null, root);
  });
}

function renderFormulaList(formulas, chapterId, root) {
  const content = document.getElementById('formules-content');
  if (!content) return;

  if (!formulas.length) {
    content.innerHTML = '<p class="muted">Aucune formule trouvée.</p>';
    return;
  }

  // Group by chapterId
  const grouped = {};
  for (const f of formulas) {
    if (!grouped[f.chapterId]) grouped[f.chapterId] = [];
    grouped[f.chapterId].push(f);
  }

  const chapterIds = Object.keys(grouped);
  content.innerHTML = chapterIds.map(chId => {
    const info = getChapterById(chId);
    if (!info) return '';
    const { subject, chapter } = info;
    const groups = {};
    for (const f of grouped[chId]) {
      if (!groups[f.group]) groups[f.group] = [];
      groups[f.group].push(f);
    }

    return `
      <div class="formules-chapter">
        <h2 class="formules-chapter-title" style="color:${subject.color}">
          <span class="subject-badge" style="background:${subject.colorBg};color:${subject.color}">${subject.shortLabel}</span>
          ${chapter.label}
        </h2>
        ${Object.entries(groups).map(([grp, fmls]) => `
          <div class="formules-group">
            ${grp !== '__default' ? `<h3 class="formules-group-title">${grp}</h3>` : ''}
            <div class="formulas-grid">
              ${fmls.map(f => `
                <div class="formula-card">
                  <div class="formula-name">${f.name}</div>
                  <div class="formula-symbol">\\(${f.latex}\\)</div>
                  ${f.units ? `<div class="formula-units">Unité : ${f.units}</div>` : ''}
                  ${f.note ? `<div class="formula-note">${f.note}</div>` : ''}
                </div>`).join('')}
            </div>
          </div>`).join('')}
      </div>`;
  }).join('');

  renderMath(content);
}
