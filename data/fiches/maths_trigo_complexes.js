export const FICHE = {
  chapterId: 'MA_TRIG',
  title: 'Trigonométrie et complexes',
  sections: [
    {
      id: 'trigo',
      title: 'Trigonométrie',
      content: `
        <h3>Valeurs remarquables</h3>
        <table>
          <tr><th>θ</th><th>0</th><th>π/6 (30°)</th><th>π/4 (45°)</th><th>π/3 (60°)</th><th>π/2 (90°)</th></tr>
          <tr><td>sin θ</td><td>0</td><td>1/2</td><td>\\(\\sqrt{2}/2\\)</td><td>\\(\\sqrt{3}/2\\)</td><td>1</td></tr>
          <tr><td>cos θ</td><td>1</td><td>\\(\\sqrt{3}/2\\)</td><td>\\(\\sqrt{2}/2\\)</td><td>1/2</td><td>0</td></tr>
          <tr><td>tan θ</td><td>0</td><td>\\(1/\\sqrt{3}\\)</td><td>1</td><td>\\(\\sqrt{3}\\)</td><td>—</td></tr>
        </table>

        <h3>Identités fondamentales</h3>
        <div class="formula-block">$$\\cos^2\\theta + \\sin^2\\theta = 1$$
$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$$</div>

        <h3>Formules d'addition</h3>
        <div class="formula-block">$$\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$$
$$\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b$$
$$\\cos(2a) = \\cos^2 a - \\sin^2 a = 1 - 2\\sin^2 a = 2\\cos^2 a - 1$$
$$\\sin(2a) = 2\\sin a\\cos a$$</div>

        <h3>Formule de la somme → produit</h3>
        <div class="formula-block">$$\\cos p + \\cos q = 2\\cos\\frac{p+q}{2}\\cos\\frac{p-q}{2}$$</div>
      `
    },
    {
      id: 'complexes',
      title: 'Nombres complexes',
      content: `
        <h3>Formes d'un nombre complexe</h3>
        <div class="formula-block">$$z = a + jb \\quad \\text{(algébrique)}$$
$$z = r e^{j\\theta} \\quad \\text{(exponentielle)}$$
$$z = r(\\cos\\theta + j\\sin\\theta) \\quad \\text{(trigonométrique)}$$</div>
        <p>\\(r = |z| = \\sqrt{a^2 + b^2}\\) (module), \\(\\theta = \\arg(z)\\) (argument)</p>
        <p>\\(j^2 = -1\\) (ou \\(i^2 = -1\\) en maths)</p>

        <h3>Formule d'Euler</h3>
        <div class="formula-block">$$e^{j\\theta} = \\cos\\theta + j\\sin\\theta$$
$$\\cos\\theta = \\frac{e^{j\\theta} + e^{-j\\theta}}{2} \\quad ; \\quad \\sin\\theta = \\frac{e^{j\\theta} - e^{-j\\theta}}{2j}$$</div>

        <h3>Opérations</h3>
        <div class="formula-block">$$z_1 \\cdot z_2 = r_1 r_2 e^{j(\\theta_1 + \\theta_2)} \\quad \\text{(module × module, arg + arg)}$$
$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} e^{j(\\theta_1 - \\theta_2)}$$
$$\\bar{z} = a - jb \\quad (\\text{conjugué}) \\quad ; \\quad z \\cdot \\bar{z} = |z|^2$$</div>

        <h3>Application en électricité</h3>
        <p>En régime sinusoïdal, on représente \\(u(t) = U_{max}\\cos(\\omega t + \\varphi)\\) par le phaseur \\(\\underline{U} = U_{max}e^{j\\varphi}\\).</p>
        <div class="tip-box">En STI2D, j est souvent noté <em>j</em> (pas i) pour éviter la confusion avec le courant.</div>
      `
    }
  ]
};
