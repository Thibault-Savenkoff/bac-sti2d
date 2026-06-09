export const FICHE = {
  chapterId: 'PC_ROTATION',
  title: 'Mouvements de rotation',
  sections: [
    {
      id: 'cinematique',
      title: 'Vitesse angulaire et vitesse linéaire',
      content: `
        <h3>Variation angulaire</h3>
        <p>\\[ \\Delta\\theta = \\theta_2 - \\theta_1 \\quad (\\mathrm{rad}) \\]</p>
        <h3>Vitesse angulaire</h3>
        <p>\\[ \\omega = \\frac{\\Delta\\theta}{\\Delta t} \\quad (\\mathrm{rad \\cdot s^{-1}}) \\]</p>
        <p>Tous les points d'un solide indéformable ont la <strong>même vitesse angulaire</strong> mais pas la même vitesse linéaire.</p>
        <h3>Relation vitesse linéaire / angulaire</h3>
        <p>\\[ v = R \\times \\omega \\quad (\\mathrm{m \\cdot s^{-1}}) \\]</p>
        <p>avec \\(R\\) la distance au centre de rotation (en m).</p>
        <h3>Fréquence de rotation</h3>
        <p>La fréquence de rotation \\(n\\) est le nombre de tours par minute (tr·min⁻¹). Conversion :</p>
        <p>\\[ \\omega = \\frac{2\\pi \\times n}{60} \\quad (\\mathrm{rad \\cdot s^{-1}}) \\]</p>`
    },
    {
      id: 'moment',
      title: 'Moment d\'une force et couple',
      content: `
        <h3>Moment d'une force</h3>
        <p>Le moment d'une force \\(\\vec{F}\\) par rapport à l'axe de rotation :</p>
        <p>\\[ M(\\vec{F}) = F \\times d \\quad (\\mathrm{N \\cdot m}) \\]</p>
        <p>avec \\(d\\) le <strong>bras de levier</strong> = distance perpendiculaire entre la droite d'action et l'axe.</p>
        <h3>Couple de forces</h3>
        <p>Deux forces de même direction, même intensité, sens contraires. Moment du couple :</p>
        <p>\\[ M_C = F \\times D \\quad (\\mathrm{N \\cdot m}) \\]</p>
        <p>avec \\(D\\) la distance entre les deux points d'application.</p>`
    },
    {
      id: 'moteur',
      title: 'Caractéristique mécanique d\'un moteur',
      content: `
        <p>La <strong>caractéristique mécanique</strong> d'un moteur donne le couple moteur en fonction de la fréquence de rotation \\(\\omega\\).</p>
        <ul>
          <li><strong>Point A :</strong> \\(\\omega = 0\\) → couple au démarrage (maximum)</li>
          <li><strong>Point B :</strong> couple nul → fréquence de rotation à vide (maximum)</li>
          <li><strong>Zone utile :</strong> entre A et B</li>
        </ul>
        <h3>Point de fonctionnement</h3>
        <p>On superpose la courbe du couple moteur et la droite du <strong>couple résistant</strong> de la charge. L'intersection donne le point de fonctionnement \\(P\\).</p>`
    }
  ]
};
