export const FICHE = {
  chapterId: 'MA_PROB',
  title: 'Probabilités et statistiques',
  sections: [
    {
      id: 'bases-proba',
      title: 'Bases des probabilités',
      content: `
        <h3>Vocabulaire</h3>
        <ul>
          <li><strong>Univers Ω</strong> : ensemble des issues possibles</li>
          <li><strong>Événement</strong> : sous-ensemble de Ω</li>
          <li>\\(0 \\leq P(A) \\leq 1\\) et \\(P(\\Omega) = 1\\)</li>
        </ul>

        <h3>Opérations sur les événements</h3>
        <div class="formula-block">$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
$$P(\\bar{A}) = 1 - P(A)$$</div>

        <h3>Probabilité conditionnelle</h3>
        <div class="formula-block">$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$</div>

        <h3>Événements indépendants</h3>
        <div class="formula-block">$$A \\perp B \\Leftrightarrow P(A \\cap B) = P(A) \\cdot P(B)$$</div>

        <h3>Formule des probabilités totales</h3>
        <p>Si \\(B_1, \\ldots, B_n\\) forment une partition de Ω :</p>
        <div class="formula-block">$$P(A) = \\sum_{i=1}^n P(A|B_i) \\cdot P(B_i)$$</div>
      `
    },
    {
      id: 'variables',
      title: 'Variables aléatoires',
      content: `
        <h3>Espérance et variance</h3>
        <div class="formula-block">$$E(X) = \\sum_i x_i \\cdot P(X = x_i)$$
$$V(X) = E(X^2) - [E(X)]^2 = \\sum_i (x_i - E(X))^2 \\cdot P(X = x_i)$$
$$\\sigma(X) = \\sqrt{V(X)} \\quad \\text{(écart-type)}$$</div>

        <h3>Loi binomiale B(n, p)</h3>
        <p>X = nombre de succès en n épreuves indépendantes de probabilité p.</p>
        <div class="formula-block">$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$
$$E(X) = np \\quad ; \\quad V(X) = np(1-p)$$</div>
        <p>Coefficient binomial : \\(\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}\\)</p>

        <h3>Loi normale N(μ, σ²)</h3>
        <p>Loi continue, courbe en cloche symétrique autour de μ.</p>
        <ul>
          <li>\\(P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 0{,}683\\)</li>
          <li>\\(P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954\\)</li>
          <li>\\(P(\\mu - 3\\sigma \\leq X \\leq \\mu + 3\\sigma) \\approx 0{,}997\\)</li>
        </ul>
        <div class="tip-box">Standardisation : \\(Z = (X - \\mu)/\\sigma\\) suit N(0,1). On lit les probabilités dans la table de la loi normale centrée réduite.</div>
      `
    },
    {
      id: 'statistiques',
      title: 'Statistiques descriptives',
      content: `
        <h3>Indicateurs de tendance centrale</h3>
        <div class="formula-block">$$\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i \\quad \\text{(moyenne)}$$</div>
        <p><strong>Médiane</strong> : valeur qui partage la série en deux moitiés.</p>
        <p><strong>Mode</strong> : valeur la plus fréquente.</p>

        <h3>Indicateurs de dispersion</h3>
        <div class="formula-block">$$V = \\frac{1}{n}\\sum(x_i - \\bar{x})^2 \\quad ; \\quad \\sigma = \\sqrt{V}$$</div>
        <p><strong>Étendue</strong> : max − min</p>
        <p><strong>Quartiles Q1, Q3</strong> : 25e et 75e percentiles</p>

        <h3>Intervalle de confiance (proportion)</h3>
        <div class="formula-block">$$IC_{95\\%} = \\left[\\hat{p} - 1{,}96\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} \\;;\; \\hat{p} + 1{,}96\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}\\right]$$</div>
      `
    }
  ]
};
