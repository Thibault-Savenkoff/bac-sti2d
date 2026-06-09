import { SUBJECTS, getAllChapters } from '../../data/subjects.js';
import { getSRSMastery, getQuizAvg, getFichesReadRatio, getAllDueCount, getAllQuizHistory } from '../store.js';
import { svgRing, pct, formatDate } from '../utils.js';
import { navigate } from '../router.js';

async function getSubjectScore(subject, allCards) {
  const chapterCards = allCards.filter(c => {
    const [sub] = c.id.split('_');
    return sub.toLowerCase() === subject.id.toLowerCase() ||
      subject.chapters.some(ch => c.chapterId === ch.id);
  });

  let srsTotal = 0, quizTotal = 0, fichesTotal = 0;
  let srsCount = 0, quizCount = 0, fichesCount = 0;

  for (const ch of subject.chapters) {
    const chCards = allCards.filter(c => c.chapterId === ch.id);
    if (chCards.length) {
      srsTotal += getSRSMastery(chCards);
      srsCount++;
    }
    const qa = getQuizAvg(ch.id);
    if (qa !== null) { quizTotal += qa; quizCount++; }
    // fiches: can't know total sections without importing — approximate
  }

  const srs = srsCount ? Math.round(srsTotal / srsCount) : 0;
  const quiz = quizCount ? Math.round(quizTotal / quizCount) : 0;
  const composite = pct(srs * 0.5 + quiz * 0.5);
  return { srs, quiz, composite };
}

export async function renderHome(allCards) {
  const root = document.getElementById('app-root');
  const dueCount = getAllDueCount(allCards);
  const quizAll = getAllQuizHistory();

  const lastQuizzes = Object.entries(quizAll)
    .flatMap(([chId, hist]) => hist.map(h => ({ chId, ...h })))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Compute subject scores
  const scores = {};
  for (const s of SUBJECTS) {
    scores[s.id] = await getSubjectScore(s, allCards);
  }

  // Find suggested subject (lowest composite)
  const suggested = SUBJECTS.reduce((a, b) =>
    scores[a.id].composite <= scores[b.id].composite ? a : b);

  root.innerHTML = `
    <div class="home">
      <header class="home-header">
        <h1>Tableau de bord</h1>
        <p class="home-subtitle">BAC STI2D · Spécialité EE</p>
      </header>

      ${dueCount > 0 ? `
        <div class="alert-card" onclick="window.location.hash='#/flashcards'">
          <span class="alert-icon">🃏</span>
          <div>
            <strong>${dueCount} carte${dueCount > 1 ? 's' : ''} à réviser aujourd'hui</strong>
            <p>Lance une session pour rester à jour</p>
          </div>
          <span class="alert-arrow">→</span>
        </div>` : `
        <div class="alert-card success">
          <span class="alert-icon">✅</span>
          <div><strong>Aucune carte due</strong><p>Tu es à jour sur toutes tes révisions !</p></div>
        </div>`}

      <section class="home-subjects">
        <h2>Progression par matière</h2>
        <div class="subject-grid">
          ${SUBJECTS.map(s => {
            const sc = scores[s.id];
            return `
              <div class="subject-card" style="--subject-color:${s.color}">
                <div class="subject-card-header">
                  <span class="subject-badge" style="background:${s.colorBg};color:${s.color}">${s.shortLabel}</span>
                  <span class="subject-card-name">${s.label}</span>
                </div>
                <div class="subject-card-body">
                  ${svgRing(sc.composite, s.color)}
                  <div class="subject-stats">
                    <div class="stat-row">
                      <span>SRS</span><span>${sc.srs}%</span>
                    </div>
                    <div class="stat-row">
                      <span>Quiz</span><span>${sc.quiz !== null ? sc.quiz + '%' : '—'}</span>
                    </div>
                  </div>
                </div>
                <div class="subject-card-actions">
                  <a href="#/flashcards" class="btn btn-sm">Flashcards</a>
                  <a href="#/quiz" class="btn btn-sm btn-outline">Quiz</a>
                </div>
              </div>`;
          }).join('')}
        </div>
      </section>

      <div class="home-bottom">
        <section class="recent-quizzes">
          <h2>Derniers quiz</h2>
          ${lastQuizzes.length ? `
            <ul class="quiz-list">
              ${lastQuizzes.map(q => {
                const pct = Math.round((q.score / q.total) * 100);
                const color = pct >= 70 ? '#22C55E' : pct >= 50 ? '#F97316' : '#F87171';
                const allCh = getAllChapters();
                const ch = allCh.find(c => c.id === q.chId);
                return `<li class="quiz-item">
                  <span>${ch ? ch.label : q.chId}</span>
                  <span style="color:${color};font-weight:700">${q.score}/${q.total} (${pct}%)</span>
                  <span class="quiz-date">${formatDate(q.date)}</span>
                </li>`;
              }).join('')}
            </ul>` : '<p class="muted">Pas encore de quiz effectué.</p>'}
        </section>

        <section class="suggestion">
          <h2>Suggestion</h2>
          <div class="suggestion-card" style="--subject-color:${suggested.color}">
            <div class="suggestion-icon" style="color:${suggested.color}">💡</div>
            <div>
              <p><strong>${suggested.label}</strong></p>
              <p class="muted">Score actuel : ${scores[suggested.id].composite}%</p>
              <div class="suggestion-actions">
                <a href="#/fiches" class="btn btn-sm">Fiches</a>
                <a href="#/flashcards" class="btn btn-sm btn-outline">Flashcards</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}
