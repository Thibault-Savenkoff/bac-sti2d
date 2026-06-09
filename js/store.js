const KEYS = {
  SRS: 'sti2d_srs',
  QUIZ: 'sti2d_quiz',
  FICHES: 'sti2d_fiches',
};

function load(key) {
  try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch { return {}; }
}
function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ── SRS (SM-2) ────────────────────────────────────────────────────────────────

const DEFAULT_SRS = { interval: 1, repetitions: 0, easeFactor: 2.5, nextReview: null, lastGrade: null };

export function getSRSCard(cardId) {
  const db = load(KEYS.SRS);
  return db[cardId] || { ...DEFAULT_SRS };
}

export function updateSRSCard(cardId, grade) {
  const db = load(KEYS.SRS);
  const card = db[cardId] || { ...DEFAULT_SRS };

  let { interval, repetitions, easeFactor } = card;

  if (grade < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  easeFactor = Math.max(1.3, easeFactor);

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  db[cardId] = { interval, repetitions, easeFactor, nextReview: nextReview.toISOString(), lastGrade: grade };
  save(KEYS.SRS, db);
  return db[cardId];
}

export function getDueCards(cards) {
  const now = new Date();
  return cards.filter(card => {
    const rec = getSRSCard(card.id);
    if (!rec.nextReview) return true; // never seen
    return new Date(rec.nextReview) <= now;
  });
}

export function getAllDueCount(allCards) {
  const now = new Date();
  return allCards.filter(card => {
    const rec = getSRSCard(card.id);
    if (!rec.nextReview) return true;
    return new Date(rec.nextReview) <= now;
  }).length;
}

export function getSRSMastery(cards) {
  if (!cards.length) return 0;
  const mastered = cards.filter(c => {
    const r = getSRSCard(c.id);
    return r.repetitions >= 3 && r.easeFactor >= 2.5;
  }).length;
  return Math.round((mastered / cards.length) * 100);
}

// ── Quiz history ──────────────────────────────────────────────────────────────

export function saveQuizResult({ chapterId, score, total, wrongCardIds }) {
  const db = load(KEYS.QUIZ);
  if (!db[chapterId]) db[chapterId] = [];
  db[chapterId].unshift({ date: new Date().toISOString(), score, total, wrongCardIds });
  db[chapterId] = db[chapterId].slice(0, 10); // keep last 10
  save(KEYS.QUIZ, db);
}

export function getQuizHistory(chapterId) {
  const db = load(KEYS.QUIZ);
  return db[chapterId] || [];
}

export function getQuizAvg(chapterId) {
  const hist = getQuizHistory(chapterId).slice(0, 5);
  if (!hist.length) return null;
  const avg = hist.reduce((s, h) => s + (h.score / h.total), 0) / hist.length;
  return Math.round(avg * 100);
}

export function getAllQuizHistory() {
  return load(KEYS.QUIZ);
}

// ── Fiches lues ───────────────────────────────────────────────────────────────

export function markSectionRead(chapterId, sectionId) {
  const db = load(KEYS.FICHES);
  if (!db[chapterId]) db[chapterId] = { sections: [], lastRead: null };
  if (!db[chapterId].sections.includes(sectionId)) {
    db[chapterId].sections.push(sectionId);
  }
  db[chapterId].lastRead = new Date().toISOString();
  save(KEYS.FICHES, db);
}

export function getFichesRead(chapterId) {
  const db = load(KEYS.FICHES);
  return db[chapterId] || { sections: [], lastRead: null };
}

export function getFichesReadRatio(chapterId, totalSections) {
  if (!totalSections) return 0;
  const { sections } = getFichesRead(chapterId);
  return Math.round((sections.length / totalSections) * 100);
}

export function getAllFichesRead() {
  return load(KEYS.FICHES);
}
