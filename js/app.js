import { initRouter, registerRoute } from './router.js';
import { renderNav, updateNavActive } from './components/nav.js';
import { renderHome } from './pages/home.js';
import { renderFichesList } from './pages/fiches.js';
import { renderFlashcards } from './pages/flashcards.js';
import { renderQuiz } from './pages/quiz.js';
import { renderFormules } from './pages/formules.js';
import { renderAnnales } from './pages/annales.js';
import { renderImprimer } from './pages/imprimer.js';
import { getAllDueCount } from './store.js';

// Load all cards for dashboard due-count badge
async function getAllCards() {
  const mods = await Promise.all([
    import('../data/flashcards/fc_ee.js'),
    import('../data/flashcards/fc_pc.js'),
    import('../data/flashcards/fc_maths.js'),
  ]);
  return mods.flatMap(m => m.CARDS);
}

let allCardsCache = null;

async function getCards() {
  if (!allCardsCache) allCardsCache = await getAllCards();
  return allCardsCache;
}

async function refreshNav() {
  const cards = await getCards();
  const due = getAllDueCount(cards);
  renderNav(due);
  updateNavActive();
}

// Render nav immediately (dueCount=0) so tabs are visible before cards load
renderNav(0);
updateNavActive();

window.addEventListener('hashchange', () => {
  updateNavActive();
  // Sortir du mode preview blanc si on navigue ailleurs
  const hash = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  if (hash !== 'imprimer') document.body.classList.remove('print-preview');
});

registerRoute('', async () => {
  await refreshNav();
  const cards = await getCards();
  await renderHome(cards);
});

registerRoute('fiches', async () => {
  await refreshNav();
  renderFichesList(null);
});

registerRoute('fiches/:chapterId', async ({ chapterId }) => {
  await refreshNav();
  renderFichesList(chapterId);
});

registerRoute('flashcards', async () => {
  await refreshNav();
  await renderFlashcards(null);
});

registerRoute('flashcards/:chapterId', async ({ chapterId }) => {
  await refreshNav();
  await renderFlashcards(chapterId);
});

registerRoute('quiz', async () => {
  await refreshNav();
  await renderQuiz(null);
});

registerRoute('quiz/:chapterId', async ({ chapterId }) => {
  await refreshNav();
  await renderQuiz(chapterId);
});

registerRoute('formules', async () => {
  await refreshNav();
  await renderFormules(null);
});

registerRoute('formules/:chapterId', async ({ chapterId }) => {
  await refreshNav();
  await renderFormules(chapterId);
});

registerRoute('annales', async () => {
  await refreshNav();
  await renderAnnales(null);
});

registerRoute('annales/:chapterId', async ({ chapterId }) => {
  await refreshNav();
  await renderAnnales(chapterId);
});

registerRoute('imprimer', async () => {
  await refreshNav();
  await renderImprimer(null);
});

registerRoute('imprimer/:subjectId', async ({ subjectId }) => {
  await refreshNav();
  await renderImprimer(subjectId);
});

initRouter();
