export const FORMULAS = [
  // ── MA_ANA ────────────────────────────────────────────────────────────────
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Puissance', symbol: "(x^n)' = n·x^(n-1)", latex: "(x^n)' = n x^{n-1}", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Exponentielle', symbol: "(e^x)' = e^x", latex: "(e^x)' = e^x", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Exponentielle composée', symbol: "(e^{ax})' = a·e^{ax}", latex: "(e^{ax})' = a \\cdot e^{ax}", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Logarithme', symbol: "(ln x)' = 1/x", latex: "(\\ln x)' = \\frac{1}{x}", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Sinus', symbol: "(sin x)' = cos x", latex: "(\\sin x)' = \\cos x", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Cosinus', symbol: "(cos x)' = -sin x", latex: "(\\cos x)' = -\\sin x", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Produit', symbol: "(u·v)' = u'v + uv'", latex: "(u \\cdot v)' = u'v + uv'", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Dérivées', name: 'Quotient', symbol: "(u/v)' = (u'v - uv')/v²", latex: "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}", units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Intégrales', name: 'Puissance (n≠-1)', symbol: '∫xⁿ = xⁿ⁺¹/(n+1)', latex: '\\int x^n dx = \\frac{x^{n+1}}{n+1} + C', units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Intégrales', name: 'Exponentielle', symbol: '∫eˣ = eˣ', latex: '\\int e^x dx = e^x + C', units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Intégrales', name: '1/x', symbol: '∫(1/x) = ln|x|', latex: '\\int \\frac{1}{x} dx = \\ln|x| + C', units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Équations différentielles', name: "1er ordre y' + ay = b", symbol: 'y = Ce^{-at} + b/a', latex: 'y(t) = C e^{-at} + \\frac{b}{a}', units: '', note: 'C déterminé par la condition initiale' },
  { chapterId: 'MA_ANA', group: 'Suites', name: 'Suite géométrique — terme', symbol: 'un = u0·qⁿ', latex: 'u_n = u_0 \\cdot q^n', units: '', note: '' },
  { chapterId: 'MA_ANA', group: 'Suites', name: 'Somme géométrique', symbol: 'Sn = u0·(1-qⁿ⁺¹)/(1-q)', latex: 'S_n = u_0 \\cdot \\frac{1-q^{n+1}}{1-q}', units: '', note: 'q ≠ 1' },

  // ── MA_ALG ────────────────────────────────────────────────────────────────
  { chapterId: 'MA_ALG', group: 'Polynômes', name: 'Équation du 2e degré', symbol: 'x = (-b ± √Δ) / 2a', latex: 'x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}', units: '', note: 'Δ = b²-4ac' },
  { chapterId: 'MA_ALG', group: 'Polynômes', name: 'Identités remarquables', symbol: '(a±b)² et (a+b)(a-b)', latex: '(a+b)^2 = a^2+2ab+b^2 \\quad (a+b)(a-b) = a^2-b^2', units: '', note: '' },
  { chapterId: 'MA_ALG', group: 'Matrices', name: 'Déterminant 2×2', symbol: 'det = ad - bc', latex: '\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad-bc', units: '', note: '' },

  // ── MA_PROB ───────────────────────────────────────────────────────────────
  { chapterId: 'MA_PROB', group: 'Probabilités', name: 'Addition (événements quelconques)', symbol: 'P(A∪B) = P(A)+P(B)-P(A∩B)', latex: 'P(A \\cup B) = P(A)+P(B)-P(A\\cap B)', units: '', note: '' },
  { chapterId: 'MA_PROB', group: 'Probabilités', name: 'Conditionnelle', symbol: 'P(A|B) = P(A∩B)/P(B)', latex: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)}', units: '', note: '' },
  { chapterId: 'MA_PROB', group: 'Loi binomiale', name: 'Probabilité B(n,p)', symbol: 'P(X=k) = C(n,k)·pᵏ·(1-p)ⁿ⁻ᵏ', latex: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}', units: '', note: '' },
  { chapterId: 'MA_PROB', group: 'Loi binomiale', name: 'Espérance et variance', symbol: 'E = np, V = np(1-p)', latex: 'E(X) = np \\quad ; \\quad V(X) = np(1-p)', units: '', note: '' },
  { chapterId: 'MA_PROB', group: 'Statistiques', name: 'Moyenne', symbol: 'x̄ = (1/n)Σxi', latex: '\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i', units: '', note: '' },
  { chapterId: 'MA_PROB', group: 'Statistiques', name: 'Variance', symbol: 'V = (1/n)Σ(xi-x̄)²', latex: 'V = \\frac{1}{n}\\sum(x_i - \\bar{x})^2', units: '', note: '' },

  // ── MA_TRIG ───────────────────────────────────────────────────────────────
  { chapterId: 'MA_TRIG', group: 'Trigonométrie', name: 'Identité fondamentale', symbol: 'cos²θ + sin²θ = 1', latex: '\\cos^2\\theta + \\sin^2\\theta = 1', units: '', note: '' },
  { chapterId: 'MA_TRIG', group: 'Trigonométrie', name: 'Angle double (cosinus)', symbol: 'cos(2a) = 1 - 2sin²a = 2cos²a - 1', latex: '\\cos(2a) = 1-2\\sin^2 a = 2\\cos^2 a - 1', units: '', note: '' },
  { chapterId: 'MA_TRIG', group: 'Trigonométrie', name: 'Angle double (sinus)', symbol: 'sin(2a) = 2 sin a cos a', latex: '\\sin(2a) = 2\\sin a \\cos a', units: '', note: '' },
  { chapterId: 'MA_TRIG', group: 'Complexes', name: "Formule d'Euler", symbol: 'e^{jθ} = cosθ + j·sinθ', latex: 'e^{j\\theta} = \\cos\\theta + j\\sin\\theta', units: '', note: '' },
  { chapterId: 'MA_TRIG', group: 'Complexes', name: 'Module de z = a + jb', symbol: '|z| = √(a²+b²)', latex: '|z| = \\sqrt{a^2+b^2}', units: '', note: '' },
  { chapterId: 'MA_TRIG', group: 'Complexes', name: 'Produit (forme exponentielle)', symbol: 'z1·z2 = r1·r2·e^{j(θ1+θ2)}', latex: 'z_1 z_2 = r_1 r_2 e^{j(\\theta_1+\\theta_2)}', units: '', note: 'Les modules se multiplient, les arguments s\'additionnent' },
];
