import { SUBJECTS, getChapterById } from '../../data/subjects.js';
import { renderSubjectFilter } from '../components/subjectFilter.js';
import { saveQuizResult, getQuizHistory } from '../store.js';
import { shuffle, renderMath, formatDate } from '../utils.js';

const DECK_MODULES = {
  SI: () => import('../../data/flashcards/fc_si.js'),
  EE: () => import('../../data/flashcards/fc_ee.js'),
  PC: () => import('../../data/flashcards/fc_pc.js'),
  MATHS: () => import('../../data/flashcards/fc_maths.js'),
};

async function getAllCards() {
  const mods = await Promise.all(Object.values(DECK_MODULES).map(m => m()));
  return mods.flatMap(m => m.CARDS);
}

function buildQuestions(cards, allCards, count) {
  const cardsWithMCQ = cards.filter(c => c.mcq);
  const cardsWithoutMCQ = cards.filter(c => !c.mcq);

  const questions = [];

  for (const card of cardsWithMCQ) {
    questions.push({
      cardId: card.id,
      question: card.mcq.question,
      choices: shuffle(card.mcq.choices),
      explanation: card.mcq.explanation,
    });
  }

  // Auto-generate MCQ from cards without explicit mcq field
  const backPool = allCards.map(c => c.back);
  for (const card of cardsWithoutMCQ) {
    const distractors = shuffle(backPool.filter(b => b !== card.back)).slice(0, 3);
    if (distractors.length < 3) continue;
    const choices = shuffle([
      { text: card.back, correct: true },
      ...distractors.map(t => ({ text: t, correct: false })),
    ]);
    questions.push({
      cardId: card.id,
      question: card.front,
      choices,
      explanation: null,
    });
  }

  return shuffle(questions).slice(0, count);
}

export async function renderQuiz(chapterId) {
  const root = document.getElementById('app-root');

  if (chapterId) {
    await startQuiz(chapterId, root);
    return;
  }

  root.innerHTML = `
    <div class="page-layout">
      <aside class="sidebar" id="filter-sidebar"></aside>
      <main class="page-main">
        <div class="quiz-selector">
          <h1>Quiz</h1>
          <p class="muted">Choisis un chapitre pour démarrer un QCM.</p>
          <div class="quiz-subject-grid" id="quiz-grid">
            <div class="loading">Chargement…</div>
          </div>
        </div>
      </main>
    </div>`;

  renderSubjectFilter('filter-sidebar', null, 'quiz');

  const allCards = await getAllCards();
  const grid = document.getElementById('quiz-grid');
  if (!grid) return;

  grid.innerHTML = SUBJECTS.map(s => `
    <div class="quiz-subject-block">
      <h3 style="color:${s.color}">${s.label}</h3>
      <div class="quiz-chapter-list">
        ${s.chapters.map(ch => {
          const cards = allCards.filter(c => c.chapterId === ch.id);
          const hist = getQuizHistory(ch.id);
          const last = hist[0];
          const lastScore = last ? `${Math.round((last.score/last.total)*100)}%` : null;
          return `
            <a href="#/quiz/${ch.id}" class="quiz-chapter-card" style="--subject-color:${s.color}">
              <div class="quiz-chapter-name">${ch.label}</div>
              <div class="quiz-chapter-stats">
                <span>${cards.filter(c => c.mcq || true).length} questions dispo</span>
                ${lastScore ? `<span style="color:${s.color}">Dernier : ${lastScore}</span>` : ''}
              </div>
            </a>`;
        }).join('')}
      </div>
    </div>`).join('');
}

async function startQuiz(chapterId, root) {
  const info = getChapterById(chapterId);
  const allCards = await getAllCards();
  const chCards = allCards.filter(c => c.chapterId === chapterId);

  if (!chCards.length) {
    root.innerHTML = `<div class="quiz-empty">
      <h2>Aucune question disponible pour ce chapitre.</h2>
      <a href="#/quiz" class="btn">Retour</a>
    </div>`;
    return;
  }

  const COUNTS = [10, 20, 30];
  const maxCount = Math.min(30, chCards.length);

  root.innerHTML = `
    <div class="quiz-config">
      <h2>${info?.chapter.label || chapterId}</h2>
      <p>Combien de questions ?</p>
      <div class="quiz-count-btns">
        ${COUNTS.filter(n => n <= maxCount + 5).map(n => `
          <button class="btn btn-outline quiz-count-btn" data-count="${Math.min(n, maxCount)}">${Math.min(n, maxCount)}</button>`).join('')}
      </div>
    </div>`;

  root.querySelectorAll('.quiz-count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const count = parseInt(btn.dataset.count);
      const questions = buildQuestions(chCards, allCards, count);
      runQuiz(questions, chapterId, info, root);
    });
  });
}

function runQuiz(questions, chapterId, info, root) {
  let current = 0;
  let answered = false;
  const results = [];

  function renderQuestion() {
    const q = questions[current];
    const { subject } = info || {};
    root.innerHTML = `
      <div class="quiz-session">
        <div class="fc-progress-bar">
          <div class="fc-progress-fill" style="width:${(current/questions.length)*100}%;background:${subject?.color||'var(--accent)'}"></div>
        </div>
        <div class="quiz-header">
          <span>${current+1} / ${questions.length}</span>
          ${info ? `<span style="color:${subject.color}">${info.chapter.label}</span>` : ''}
          <a href="#/quiz" class="btn btn-sm btn-ghost">Quitter</a>
        </div>
        <div class="quiz-question-box">
          <p class="quiz-question">${q.question}</p>
          <div class="quiz-choices" id="quiz-choices">
            ${q.choices.map((ch, i) => `
              <button class="choice-btn" data-index="${i}" data-correct="${ch.correct}">
                <span class="choice-letter">${'ABCD'[i]}</span>
                <span>${ch.text}</span>
              </button>`).join('')}
          </div>
          <div class="quiz-explanation hidden" id="quiz-explanation">
            ${q.explanation ? `<div class="explanation-box">${q.explanation}</div>` : ''}
            <button class="btn btn-primary" id="next-btn">
              ${current < questions.length - 1 ? 'Question suivante →' : 'Voir les résultats'}
            </button>
          </div>
        </div>
      </div>`;

    renderMath(root);

    root.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const isCorrect = btn.dataset.correct === 'true';
        results.push({ q, chosen: btn.textContent.trim(), correct: isCorrect, cardId: q.cardId });

        root.querySelectorAll('.choice-btn').forEach(b => {
          if (b.dataset.correct === 'true') b.classList.add('correct');
          else if (b === btn) b.classList.add('wrong');
          b.disabled = true;
        });
        document.getElementById('quiz-explanation')?.classList.remove('hidden');
      });
    });

    document.getElementById('next-btn')?.addEventListener('click', () => {
      answered = false;
      current++;
      if (current >= questions.length) showResults();
      else renderQuestion();
    });
  }

  function showResults() {
    const correct = results.filter(r => r.correct).length;
    const pct = Math.round((correct / results.length) * 100);
    const wrongIds = results.filter(r => !r.correct).map(r => r.cardId);
    saveQuizResult({ chapterId, score: correct, total: results.length, wrongCardIds: wrongIds });

    const color = pct >= 70 ? '#22C55E' : pct >= 50 ? '#F97316' : '#F87171';

    root.innerHTML = `
      <div class="quiz-results">
        <h2>Résultat</h2>
        <div class="quiz-score" style="color:${color}">${correct}/${results.length} — ${pct}%</div>
        <div class="quiz-score-bar">
          <div class="quiz-score-fill" style="width:${pct}%;background:${color}"></div>
        </div>
        ${results.filter(r => !r.correct).length ? `
          <h3 class="quiz-wrong-title">Erreurs à revoir :</h3>
          <div class="quiz-wrong-list">
            ${results.filter(r => !r.correct).map(r => `
              <div class="quiz-wrong-item">
                <p class="quiz-wrong-q">${r.q.question}</p>
                <p class="quiz-wrong-a">✓ ${r.q.choices.find(c=>c.correct)?.text || ''}</p>
              </div>`).join('')}
          </div>` : '<p class="quiz-perfect">Parfait ! Aucune erreur 🎉</p>'}
        <div class="quiz-results-actions">
          <a href="#/quiz/${chapterId}" class="btn btn-primary">Refaire</a>
          <a href="#/quiz" class="btn">Autres chapitres</a>
        </div>
      </div>`;
    renderMath(root);
  }

  renderQuestion();
}
