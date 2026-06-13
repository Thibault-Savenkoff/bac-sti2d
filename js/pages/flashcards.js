import { SUBJECTS, getChapterById } from '../../data/subjects.js';
import { renderSubjectFilter } from '../components/subjectFilter.js';
import { getSRSCard, updateSRSCard, getDueCards, getSRSMastery, getAllDueCount } from '../store.js';
import { shuffle, renderMath, pluralize } from '../utils.js';

const DECK_MODULES = {
  EE: () => import('../../data/flashcards/fc_ee.js'),
  PC: () => import('../../data/flashcards/fc_pc.js'),
  MATHS: () => import('../../data/flashcards/fc_maths.js'),
};

async function getAllCards() {
  const mods = await Promise.all(Object.values(DECK_MODULES).map(m => m()));
  return mods.flatMap(m => m.CARDS);
}

function cardBelongsTo(card, chapterId) {
  if (card.chapterId === chapterId) return true;
  if (Array.isArray(card.tags) && card.tags.includes(chapterId)) return true;
  return false;
}

async function getCardsForChapter(chapterId) {
  const [subjectId] = chapterId.split('_');
  const loader = DECK_MODULES[subjectId] || DECK_MODULES[chapterId];
  if (!loader) {
    const all = await getAllCards();
    return all.filter(c => cardBelongsTo(c, chapterId));
  }
  const mod = await loader();
  return mod.CARDS.filter(c => cardBelongsTo(c, chapterId));
}

export async function renderFlashcards(chapterId) {
  const root = document.getElementById('app-root');

  if (chapterId) {
    await startSession(chapterId, root);
    return;
  }

  root.innerHTML = `
    <div class="page-layout">
      <aside class="sidebar" id="filter-sidebar"></aside>
      <main class="page-main">
        <div class="fc-selector">
          <h1>Flashcards</h1>
          <p class="muted">Choisis un chapitre pour lancer une session de révision.</p>
          <div class="fc-subject-grid" id="fc-grid">
            <div class="loading">Chargement des decks…</div>
          </div>
        </div>
      </main>
    </div>`;

  renderSubjectFilter('filter-sidebar', null, 'flashcards');

  const allCards = await getAllCards();
  const grid = document.getElementById('fc-grid');
  if (!grid) return;

  grid.innerHTML = SUBJECTS.map(s => `
    <div class="fc-subject-block">
      <h3 style="color:${s.color}">${s.label}</h3>
      <div class="fc-chapter-list">
        ${s.chapters.map(ch => {
          const cards = allCards.filter(c => cardBelongsTo(c, ch.id));
          const due = getDueCards(cards).length;
          const mastery = getSRSMastery(cards);
          return `
            <a href="#/flashcards/${ch.id}" class="fc-chapter-card" style="--subject-color:${s.color}">
              <div class="fc-chapter-name">${ch.label}</div>
              <div class="fc-chapter-stats">
                <span class="fc-stat">${cards.length} cartes</span>
                ${due > 0 ? `<span class="fc-stat due">${due} due${due > 1 ? 's' : ''}</span>` : ''}
                <span class="fc-mastery" style="color:${s.color}">${mastery}% maîtrisé</span>
              </div>
            </a>`;
        }).join('')}
      </div>
    </div>`).join('');
}

async function startSession(chapterId, root) {
  const info = getChapterById(chapterId);
  const allCards = await getCardsForChapter(chapterId);
  const dueCards = getDueCards(allCards);
  const sessionCards = shuffle(dueCards.length > 0 ? dueCards : allCards).slice(0, 20);

  if (!sessionCards.length) {
    const { subject } = info || {};
    root.innerHTML = `
      <div class="fc-empty">
        <div class="fc-empty-icon">🎉</div>
        <h2>Aucune carte à réviser !</h2>
        <p>Toutes les cartes de ce chapitre sont à jour.</p>
        <a href="#/flashcards" class="btn">Retour aux decks</a>
      </div>`;
    return;
  }

  let current = 0;
  let flipped = false;
  const results = [];

  function renderCard() {
    const card = sessionCards[current];
    const rec = getSRSCard(card.id);
    const { subject } = info || {};
    root.innerHTML = `
      <div class="fc-session">
        <div class="fc-progress-bar">
          <div class="fc-progress-fill" style="width:${(current / sessionCards.length) * 100}%"></div>
        </div>
        <div class="fc-session-header">
          <span class="fc-counter">${current + 1} / ${sessionCards.length}</span>
          ${info ? `<span class="fc-chapter-name" style="color:${info.subject.color}">${info.chapter.label}</span>` : ''}
          <a href="#/flashcards" class="btn btn-sm btn-ghost">Quitter</a>
        </div>

        <div class="fc-card-wrap">
          <div class="fc-card ${flipped ? 'flipped' : ''}" id="fc-card">
            <div class="fc-card-inner">
              <div class="fc-card-front">
                <div class="fc-card-label">Question</div>
                <div class="fc-card-text">${card.front}</div>
                <button class="btn btn-primary fc-flip-btn" id="flip-btn">Retourner</button>
              </div>
              <div class="fc-card-back">
                <div class="fc-card-label">Réponse</div>
                <div class="fc-card-text">${card.back}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="fc-grade-btns ${flipped ? 'visible' : ''}" id="grade-btns">
          <p class="fc-grade-label">Comment tu t'en es sorti ?</p>
          <div class="fc-grades">
            <button class="grade-btn grade-0" data-grade="0">Encore<br><small>Raté</small></button>
            <button class="grade-btn grade-3" data-grade="3">Difficile<br><small>Avec effort</small></button>
            <button class="grade-btn grade-4" data-grade="4">Bien<br><small>Facilement</small></button>
            <button class="grade-btn grade-5" data-grade="5">Facile<br><small>Parfait</small></button>
          </div>
        </div>
      </div>`;

    renderMath(root);

    document.getElementById('flip-btn')?.addEventListener('click', () => {
      flipped = true;
      document.getElementById('fc-card')?.classList.add('flipped');
      document.getElementById('grade-btns')?.classList.add('visible');
    });

    root.querySelectorAll('.grade-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const grade = parseInt(btn.dataset.grade);
        updateSRSCard(card.id, grade);
        results.push({ card, grade });
        current++;
        flipped = false;
        if (current >= sessionCards.length) {
          showResults();
        } else {
          renderCard();
        }
      });
    });
  }

  function showResults() {
    const correct = results.filter(r => r.grade >= 3).length;
    const pct = Math.round((correct / results.length) * 100);
    root.innerHTML = `
      <div class="fc-results">
        <h2>Session terminée !</h2>
        <div class="fc-results-score" style="color:${pct >= 70 ? '#22C55E' : '#F97316'}">
          ${correct}/${results.length} correctes (${pct}%)
        </div>
        <div class="fc-results-breakdown">
          ${results.map(r => `
            <div class="fc-result-row ${r.grade >= 3 ? 'ok' : 'nok'}">
              <span class="fc-result-icon">${r.grade >= 3 ? '✓' : '✗'}</span>
              <span>${r.card.front}</span>
            </div>`).join('')}
        </div>
        <div class="fc-results-actions">
          <a href="#/flashcards/${chapterId}" class="btn btn-primary">Refaire</a>
          <a href="#/flashcards" class="btn">Tous les decks</a>
        </div>
      </div>`;
  }

  renderCard();
}
