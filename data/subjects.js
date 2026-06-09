export const SUBJECTS = [
  {
    id: 'EE',
    label: 'Énergie et Environnement',
    shortLabel: 'EE',
    color: '#22C55E',
    colorBg: 'rgba(34,197,94,0.15)',
    chapters: [
      { id: 'EE_CHAIN', label: 'Chaîne d\'énergie' },
      { id: 'EE_SRC',   label: 'Sources d\'énergie' },
      { id: 'EE_ELEC',  label: 'Électrotechnique' },
      { id: 'EE_POW',   label: 'Électronique de puissance' },
      { id: 'EE_STOCK', label: 'Stockage d\'énergie' },
      { id: 'EE_TRANS', label: 'Transport et distribution' },
      { id: 'EE_BILAN', label: 'Bilan énergétique' },
      { id: 'EE_DD',    label: 'Développement durable' },
    ]
  },
  {
    id: 'PC',
    label: 'Physique-Chimie',
    shortLabel: 'PC',
    color: '#A855F7',
    colorBg: 'rgba(168,85,247,0.15)',
    chapters: [
      { id: 'PC_MEC',   label: 'Mécanique' },
      { id: 'PC_THERMO',label: 'Thermodynamique' },
      { id: 'PC_ELEC',  label: 'Électricité' },
      { id: 'PC_OPT',   label: 'Optique et ondes' },
      { id: 'PC_CHIM',  label: 'Chimie' },
    ]
  },
  {
    id: 'MATHS',
    label: 'Mathématiques',
    shortLabel: 'Maths',
    color: '#F97316',
    colorBg: 'rgba(249,115,22,0.15)',
    chapters: [
      { id: 'MA_ANA',   label: 'Analyse' },
      { id: 'MA_ALG',   label: 'Algèbre' },
      { id: 'MA_PROB',  label: 'Probabilités et statistiques' },
      { id: 'MA_TRIG',  label: 'Trigonométrie et complexes' },
    ]
  }
];

export function getSubjectById(id) {
  return SUBJECTS.find(s => s.id === id);
}

export function getChapterById(chapterId) {
  for (const s of SUBJECTS) {
    const ch = s.chapters.find(c => c.id === chapterId);
    if (ch) return { subject: s, chapter: ch };
  }
  return null;
}

export function getAllChapters() {
  return SUBJECTS.flatMap(s => s.chapters.map(c => ({ ...c, subject: s })));
}
