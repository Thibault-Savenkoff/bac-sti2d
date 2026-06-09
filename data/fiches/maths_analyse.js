export const FICHE = {
  chapterId: 'MA_ANA',
  title: 'Analyse',
  sections: [
    {
      id: 'derivees',
      title: 'Dérivées',
      content: `
        <h3>Définition</h3>
        <div class="formula-block">$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$</div>

        <h3>Dérivées usuelles</h3>
        <table>
          <tr><th>f(x)</th><th>f'(x)</th></tr>
          <tr><td>\\(x^n\\)</td><td>\\(nx^{n-1}\\)</td></tr>
          <tr><td>\\(e^x\\)</td><td>\\(e^x\\)</td></tr>
          <tr><td>\\(e^{ax}\\)</td><td>\\(ae^{ax}\\)</td></tr>
          <tr><td>\\(\\ln x\\)</td><td>\\(1/x\\)</td></tr>
          <tr><td>\\(\\sin x\\)</td><td>\\(\\cos x\\)</td></tr>
          <tr><td>\\(\\cos x\\)</td><td>\\(-\\sin x\\)</td></tr>
          <tr><td>\\(\\tan x\\)</td><td>\\(1/\\cos^2 x\\)</td></tr>
          <tr><td>Constante</td><td>0</td></tr>
        </table>

        <h3>Règles de dérivation</h3>
        <div class="formula-block">$$(u + v)' = u' + v'$$
$$(u \\cdot v)' = u'v + uv'$$
$$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$$
$$(g \\circ f)'(x) = f'(x) \\cdot g'(f(x)) \\quad \\text{(dérivée composée)}$$</div>
      `
    },
    {
      id: 'integrales',
      title: 'Intégrales',
      content: `
        <h3>Primitives usuelles</h3>
        <table>
          <tr><th>f(x)</th><th>Primitive F(x)</th></tr>
          <tr><td>\\(x^n\\) (n≠-1)</td><td>\\(\\dfrac{x^{n+1}}{n+1}\\)</td></tr>
          <tr><td>\\(e^x\\)</td><td>\\(e^x\\)</td></tr>
          <tr><td>\\(e^{ax}\\)</td><td>\\(\\dfrac{e^{ax}}{a}\\)</td></tr>
          <tr><td>\\(1/x\\)</td><td>\\(\\ln|x|\\)</td></tr>
          <tr><td>\\(\\sin x\\)</td><td>\\(-\\cos x\\)</td></tr>
          <tr><td>\\(\\cos x\\)</td><td>\\(\\sin x\\)</td></tr>
        </table>

        <h3>Intégrale définie</h3>
        <div class="formula-block">$$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$$</div>
        <p>Interprétation : aire algébrique sous la courbe.</p>

        <h3>Intégration par parties</h3>
        <div class="formula-block">$$\\int u\\,dv = [uv]_a^b - \\int v\\,du$$</div>
      `
    },
    {
      id: 'eq-diff',
      title: 'Équations différentielles',
      content: `
        <h3>1er ordre : \\(y' + ay = b\\)</h3>
        <p>Solution générale = solution homogène + solution particulière :</p>
        <div class="formula-block">$$y(t) = C \\cdot e^{-at} + \\frac{b}{a}$$</div>
        <p>La constante C est déterminée par la condition initiale \\(y(0)\\).</p>

        <h3>Exemple : circuit RC</h3>
        <div class="formula-block">$$RC \\cdot u' + u = E \\Rightarrow u(t) = E + (u_0 - E)e^{-t/RC}$$</div>

        <h3>2e ordre : \\(y'' + 2\\xi\\omega_0 y' + \\omega_0^2 y = \\omega_0^2 E\\)</h3>
        <p>Le discriminant \\(\\Delta = \\xi^2 - 1\\) détermine la nature des solutions (voir fiche Automatique).</p>
        <div class="tip-box">Au BAC STI2D, les équations du 2e ordre sont souvent données sous forme normalisée — il faut identifier \\(\\omega_0\\) et \\(\\xi\\).</div>
      `
    },
    {
      id: 'suites',
      title: 'Suites',
      content: `
        <h3>Suite arithmétique</h3>
        <div class="formula-block">$$u_n = u_0 + n \\cdot r \\quad ; \\quad S_n = \\frac{(n+1)(u_0 + u_n)}{2}$$</div>

        <h3>Suite géométrique</h3>
        <div class="formula-block">$$u_n = u_0 \\cdot q^n \\quad ; \\quad S_n = u_0 \\cdot \\frac{1 - q^{n+1}}{1 - q} \\quad (q \\neq 1)$$</div>

        <h3>Convergence</h3>
        <ul>
          <li>Suite géométrique : converge si \\(|q| < 1\\) → limite 0</li>
          <li>\\(q = 1\\) → suite constante</li>
          <li>\\(|q| > 1\\) → suite diverge</li>
        </ul>
      `
    }
  ]
};
