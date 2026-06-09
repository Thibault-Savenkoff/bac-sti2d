export const FICHE = {
  chapterId: 'MA_ALG',
  title: 'Algèbre',
  sections: [
    {
      id: 'matrices',
      title: 'Matrices',
      content: `
        <h3>Opérations de base</h3>
        <p><strong>Addition :</strong> terme à terme (matrices de même taille)</p>
        <p><strong>Multiplication par scalaire :</strong> chaque terme multiplié par k</p>
        <p><strong>Produit matriciel :</strong> \\(C = AB\\) où \\(C_{ij} = \\sum_k A_{ik} B_{kj}\\)</p>
        <div class="warning-box">\\(AB \\neq BA\\) en général (non commutatif) !</div>

        <h3>Déterminant 2×2</h3>
        <div class="formula-block">$$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$$</div>

        <h3>Inverse d'une matrice 2×2</h3>
        <div class="formula-block">$$A^{-1} = \\frac{1}{\\det A} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$</div>
        <p>Existe seulement si \\(\\det A \\neq 0\\).</p>

        <h3>Déterminant 3×3 (développement selon 1re ligne)</h3>
        <div class="formula-block">$$\\det A = a_{11}M_{11} - a_{12}M_{12} + a_{13}M_{13}$$</div>
        <p>où \\(M_{ij}\\) est le mineur (déterminant 2×2 obtenu en supprimant la ligne i et colonne j).</p>
      `
    },
    {
      id: 'systemes',
      title: 'Systèmes d\'équations linéaires',
      content: `
        <h3>Méthode de substitution / élimination</h3>
        <p>Pour un système 2×2 :</p>
        <div class="formula-block">$$\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases}$$</div>
        <p>Multiplier la 1re équation pour éliminer une inconnue.</p>

        <h3>Règle de Cramer (2×2)</h3>
        <div class="formula-block">$$x = \\frac{\\det \\begin{pmatrix} e & b \\\\ f & d \\end{pmatrix}}{\\det A} \\quad ; \\quad y = \\frac{\\det \\begin{pmatrix} a & e \\\\ c & f \\end{pmatrix}}{\\det A}$$</div>

        <h3>Méthode de Gauss (pivot)</h3>
        <p>Réduire le système à une forme triangulaire par opérations élémentaires, puis résoudre par remontée.</p>

        <div class="tip-box">En STI2D, les systèmes sont souvent 2×2. Maîtriser substitution + Cramer suffit.</div>
      `
    },
    {
      id: 'polynomes',
      title: 'Polynômes et équations',
      content: `
        <h3>Identités remarquables</h3>
        <div class="formula-block">$$(a+b)^2 = a^2 + 2ab + b^2$$
$$(a-b)^2 = a^2 - 2ab + b^2$$
$$(a+b)(a-b) = a^2 - b^2$$</div>

        <h3>Équation du 2e degré</h3>
        <div class="formula-block">$$ax^2 + bx + c = 0 \\Rightarrow x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$</div>
        <ul>
          <li>\\(\\Delta > 0\\) : 2 racines réelles</li>
          <li>\\(\\Delta = 0\\) : 1 racine double</li>
          <li>\\(\\Delta < 0\\) : pas de racine réelle (racines complexes)</li>
        </ul>

        <h3>Factorisation</h3>
        <p>Si \\(r_1, r_2\\) sont les racines : \\(ax^2 + bx + c = a(x - r_1)(x - r_2)\\)</p>
      `
    }
  ]
};
