import { SUBJECTS, getChapterById } from '../../data/subjects.js';
import { renderSubjectFilter } from '../components/subjectFilter.js';
import { renderMath } from '../utils.js';

const ANNALES_MODULES = {
  EE:    () => import('../../data/annales/annales_ee.js'),
  PC:    () => import('../../data/annales/annales_pc.js'),
  MATHS: () => import('../../data/annales/annales_maths.js'),
};

async function getAllExercises() {
  const mods = await Promise.all(Object.values(ANNALES_MODULES).map(m => m()));
  return mods.flatMap(m => m.EXERCISES);
}

export async function renderAnnales(chapterId) {
  const root = document.getElementById('app-root');

  root.innerHTML = `
    <div class="page-layout">
      <aside class="sidebar" id="filter-sidebar"></aside>
      <main class="page-main">
        <h1>Annales & Exercices</h1>
        <div id="annales-content"><div class="loading">Chargement…</div></div>
      </main>
    </div>`;

  renderSubjectFilter('filter-sidebar', chapterId, 'annales');

  const all = await getAllExercises();
  const exercises = chapterId ? all.filter(e => e.chapterId === chapterId) : all;

  renderExerciseList(exercises, root);
}

function renderExerciseList(exercises, root) {
  const content = document.getElementById('annales-content');
  if (!content) return;

  if (!exercises.length) {
    content.innerHTML = '<p class="muted">Aucun exercice pour ce chapitre.</p>';
    return;
  }

  const grouped = {};
  for (const ex of exercises) {
    if (!grouped[ex.chapterId]) grouped[ex.chapterId] = [];
    grouped[ex.chapterId].push(ex);
  }

  content.innerHTML = Object.entries(grouped).map(([chId, exs]) => {
    const info = getChapterById(chId);
    if (!info) return '';
    const { subject, chapter } = info;

    return `
      <div class="annales-chapter">
        <h2 class="annales-chapter-title" style="color:${subject.color}">
          <span class="subject-badge" style="background:${subject.colorBg};color:${subject.color}">${subject.shortLabel}</span>
          ${chapter.label}
        </h2>
        ${exs.map(ex => `
          <div class="exercise-card" id="ex-${ex.id}">
            <div class="exercise-header">
              <div class="exercise-meta">
                <span class="exercise-title">${ex.title}</span>
                <div class="exercise-tags">
                  ${ex.source ? `<span class="tag">${ex.source}</span>` : ''}
                  <span class="tag difficulty-${ex.difficulty}">Difficulté ${'★'.repeat(ex.difficulty)}${'☆'.repeat(5-ex.difficulty)}</span>
                </div>
              </div>
            </div>
            <div class="exercise-statement">${ex.statement}</div>
            ${ex.questions.length ? `
              <ol class="exercise-questions">
                ${ex.questions.map(q => `<li>${q.text}${q.points ? ` <span class="q-pts">(${q.points} pt${q.points>1?'s':''})</span>` : ''}</li>`).join('')}
              </ol>` : ''}
            <div class="exercise-correction" id="corr-${ex.id}" style="display:none">
              <h4 class="correction-title">Correction</h4>
              <div class="correction-body">${ex.correction}</div>
            </div>
            <button class="btn btn-outline btn-sm toggle-corr" data-id="${ex.id}">
              Voir la correction
            </button>
          </div>`).join('')}
      </div>`;
  }).join('');

  renderMath(content);

  content.querySelectorAll('.toggle-corr').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const corrDiv = document.getElementById(`corr-${id}`);
      if (!corrDiv) return;
      const shown = corrDiv.style.display !== 'none';
      corrDiv.style.display = shown ? 'none' : 'block';
      btn.textContent = shown ? 'Voir la correction' : 'Masquer la correction';
      if (!shown) renderMath(corrDiv);
    });
  });
}
