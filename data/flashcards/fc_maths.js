export const CARDS = [
  // ── MA_ANA ────────────────────────────────────────────────────────────────
  {
    id: 'ma_ana_001', chapterId: 'MA_ANA', difficulty: 'easy',
    front: 'Donner la dérivée de \\(f(x) = e^{ax}\\).',
    back: '\\(f\'(x) = a \\cdot e^{ax}\\)',
    mcq: {
      question: 'Quelle est la dérivée de f(x) = e^{3x} ?',
      choices: [
        { text: '3e^{3x}', correct: true },
        { text: 'e^{3x}', correct: false },
        { text: '3xe^{3x}', correct: false },
        { text: '(1/3)e^{3x}', correct: false },
      ],
      explanation: "Règle : (e^{ax})' = a·e^{ax}. Ici a=3 donc f'(x) = 3e^{3x}."
    }
  },
  {
    id: 'ma_ana_002', chapterId: 'MA_ANA', difficulty: 'medium',
    front: 'Donner la primitive de \\(f(x) = \\cos x\\).',
    back: '\\(F(x) = \\sin x + C\\)',
    mcq: {
      question: 'Quelle est la primitive de f(x) = sin(x) ?',
      choices: [
        { text: '-cos(x) + C', correct: true },
        { text: 'cos(x) + C', correct: false },
        { text: 'sin(x) + C', correct: false },
        { text: '-sin(x) + C', correct: false },
      ],
      explanation: 'La primitive de sin(x) est -cos(x). Vérification : la dérivée de -cos(x) est sin(x). ✓'
    }
  },
  {
    id: 'ma_ana_003', chapterId: 'MA_ANA', difficulty: 'medium',
    front: 'Solution générale de l\'équation différentielle \\(y\' + ay = b\\).',
    back: '\\(y(t) = C e^{-at} + b/a\\) — C est déterminé par la condition initiale.',
    mcq: {
      question: 'Équation RC : τu\' + u = E. Quelle est la solution avec u(0) = 0 ?',
      choices: [
        { text: 'u(t) = E(1 - e^{-t/τ})', correct: true },
        { text: 'u(t) = E·e^{-t/τ}', correct: false },
        { text: 'u(t) = E + e^{-t/τ}', correct: false },
        { text: 'u(t) = (1 - E)e^{-t/τ}', correct: false },
      ],
      explanation: 'Solution générale : u = Ce^{-t/τ} + E. Avec u(0)=0 : 0 = C + E → C = -E. Donc u(t) = E - Ee^{-t/τ} = E(1 - e^{-t/τ}).'
    }
  },
  {
    id: 'ma_ana_004', chapterId: 'MA_ANA', difficulty: 'easy',
    front: 'Quelle est la dérivée du produit \\(u \\cdot v\\) ?',
    back: '\\((u \\cdot v)\' = u\' v + u v\'\\)',
    mcq: {
      question: 'Dérivée de f(x) = x·sin(x) ?',
      choices: [
        { text: 'sin(x) + x·cos(x)', correct: true },
        { text: 'cos(x)', correct: false },
        { text: 'x·cos(x)', correct: false },
        { text: 'sin(x)·cos(x)', correct: false },
      ],
      explanation: 'u = x → u\' = 1 ; v = sin(x) → v\' = cos(x). (u·v)\' = 1·sin(x) + x·cos(x) = sin(x) + x·cos(x).'
    }
  },
  {
    id: 'ma_ana_005', chapterId: 'MA_ANA', difficulty: 'medium',
    front: 'Formule de la somme d\'une suite géométrique de raison q ≠ 1.',
    back: '\\(S_n = u_0 \\cdot \\dfrac{1 - q^{n+1}}{1-q}\\) — somme des (n+1) premiers termes.',
    mcq: {
      question: 'Somme des 5 premiers termes de la suite géom. u_0=2, q=3 :',
      choices: [
        { text: '242', correct: true },
        { text: '120', correct: false },
        { text: '486', correct: false },
        { text: '80', correct: false },
      ],
      explanation: 'S = 2 × (1 - 3⁵)/(1-3) = 2 × (1-243)/(-2) = 2 × (-242)/(-2) = 2 × 121 = 242.'
    }
  },

  // ── MA_ALG ────────────────────────────────────────────────────────────────
  {
    id: 'ma_alg_001', chapterId: 'MA_ALG', difficulty: 'easy',
    front: 'Formule des racines d\'une équation du 2e degré \\(ax^2 + bx + c = 0\\).',
    back: '\\(x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\) avec \\(\\Delta = b^2 - 4ac\\)',
    mcq: {
      question: 'Racines de x² - 5x + 6 = 0 ?',
      choices: [
        { text: 'x = 2 et x = 3', correct: true },
        { text: 'x = 1 et x = 6', correct: false },
        { text: 'x = -2 et x = -3', correct: false },
        { text: 'pas de racines réelles', correct: false },
      ],
      explanation: 'Δ = 25-24 = 1 > 0. x = (5±1)/2 → x₁ = 3, x₂ = 2.'
    }
  },
  {
    id: 'ma_alg_002', chapterId: 'MA_ALG', difficulty: 'medium',
    front: 'Déterminant d\'une matrice 2×2 [[a,b],[c,d]].',
    back: '\\(\\det A = ad - bc\\)',
    mcq: {
      question: 'det([[3,1],[2,4]]) = ?',
      choices: [
        { text: '10', correct: true },
        { text: '2', correct: false },
        { text: '14', correct: false },
        { text: '-2', correct: false },
      ],
      explanation: 'det = 3×4 - 1×2 = 12 - 2 = 10.'
    }
  },

  // ── MA_PROB ───────────────────────────────────────────────────────────────
  {
    id: 'ma_prob_001', chapterId: 'MA_PROB', difficulty: 'easy',
    front: 'Formule de P(A ∪ B) (probabilité de A ou B).',
    back: '\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\). Si A et B sont incompatibles : \\(P(A \\cup B) = P(A) + P(B)\\).',
    mcq: {
      question: 'P(A) = 0,4, P(B) = 0,3, P(A∩B) = 0,1. Quelle est P(A∪B) ?',
      choices: [
        { text: '0,6', correct: true },
        { text: '0,7', correct: false },
        { text: '0,12', correct: false },
        { text: '0,5', correct: false },
      ],
      explanation: 'P(A∪B) = 0,4 + 0,3 - 0,1 = 0,6'
    }
  },
  {
    id: 'ma_prob_002', chapterId: 'MA_PROB', difficulty: 'medium',
    front: 'Espérance et variance de la loi binomiale B(n, p).',
    back: '\\(E(X) = np\\) et \\(V(X) = np(1-p)\\) — n : nombre d\'épreuves, p : probabilité de succès.',
    mcq: {
      question: 'X suit B(20, 0,3). Quelle est l\'espérance ?',
      choices: [
        { text: '6', correct: true },
        { text: '0,3', correct: false },
        { text: '14', correct: false },
        { text: '4,2', correct: false },
      ],
      explanation: 'E(X) = np = 20 × 0,3 = 6.'
    }
  },
  {
    id: 'ma_prob_003', chapterId: 'MA_PROB', difficulty: 'medium',
    front: 'Pour une loi normale N(μ, σ²), environ quel % des valeurs sont dans [μ-2σ, μ+2σ] ?',
    back: '≈ 95,4% (règle empirique). Règle des 1σ/2σ/3σ : 68% / 95% / 99,7%.',
    mcq: {
      question: 'Règle des 3σ pour une loi normale : quelle proportion des valeurs est dans [μ-3σ, μ+3σ] ?',
      choices: [
        { text: '≈ 99,7%', correct: true },
        { text: '≈ 68%', correct: false },
        { text: '≈ 95%', correct: false },
        { text: '100%', correct: false },
      ],
      explanation: '68% dans ±1σ, 95% dans ±2σ, 99,7% dans ±3σ. C\'est la règle empirique de la loi normale.'
    }
  },

  // ── MA_TRIG ───────────────────────────────────────────────────────────────
  {
    id: 'ma_trig_001', chapterId: 'MA_TRIG', difficulty: 'easy',
    front: 'Formule d\'Euler.',
    back: '\\(e^{j\\theta} = \\cos\\theta + j\\sin\\theta\\) — corollaire : \\(e^{j\\pi} = -1\\) (identité d\'Euler)',
    mcq: {
      question: 'Que vaut e^{jπ/2} ?',
      choices: [
        { text: 'j (= i)', correct: true },
        { text: '-1', correct: false },
        { text: '1', correct: false },
        { text: '-j', correct: false },
      ],
      explanation: 'e^{jπ/2} = cos(π/2) + j·sin(π/2) = 0 + j·1 = j'
    }
  },
  {
    id: 'ma_trig_002', chapterId: 'MA_TRIG', difficulty: 'medium',
    front: 'Module d\'un nombre complexe z = a + jb.',
    back: '\\(|z| = \\sqrt{a^2 + b^2}\\) — et \\(\\arg(z) = \\theta = \\arctan(b/a)\\) (attention au quadrant).',
    mcq: {
      question: 'Module de z = 3 + 4j ?',
      choices: [
        { text: '5', correct: true },
        { text: '7', correct: false },
        { text: '√7', correct: false },
        { text: '25', correct: false },
      ],
      explanation: '|z| = √(3² + 4²) = √(9+16) = √25 = 5. Triplet pythagoricien 3-4-5.'
    }
  },
  {
    id: 'ma_trig_003', chapterId: 'MA_TRIG', difficulty: 'easy',
    front: 'Identité trigonométrique fondamentale.',
    back: '\\(\\cos^2\\theta + \\sin^2\\theta = 1\\) — valable pour tout θ.',
    mcq: {
      question: 'Si sin θ = 0,6, quelle est la valeur de cos θ (θ dans [0, π/2]) ?',
      choices: [
        { text: '0,8', correct: true },
        { text: '0,4', correct: false },
        { text: '1,6', correct: false },
        { text: '0,36', correct: false },
      ],
      explanation: 'cos²θ = 1 - sin²θ = 1 - 0,36 = 0,64. cos θ = √0,64 = 0,8 (positif car θ dans [0, π/2]).'
    }
  },
];
