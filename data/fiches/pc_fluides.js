export const FICHE = {
  chapterId: 'PC_FLUIDES',
  title: 'Statique des fluides',
  sections: [
    {
      id: 'pression',
      title: 'Force pressante et pression',
      content: `
        <p>Les entités d'un fluide en mouvement exercent des chocs sur les parois du contenant : c'est la <strong>force pressante</strong>.</p>
        <p>Caractéristiques : perpendiculaire à la paroi, orientée du fluide vers la paroi.</p>
        <p>\\[ F = P \\times S \\quad (\\mathrm{N}) \\]</p>
        <p>avec \\(P\\) la pression en pascal (Pa) et \\(S\\) la surface de contact (m²).</p>
        <h3>Pression absolue vs relative</h3>
        <ul>
          <li><strong>Pression absolue :</strong> mesurée par rapport au vide (toujours positive).</li>
          <li><strong>Pression relative :</strong> mesurée par rapport à la pression atmosphérique (peut être négative en altitude).</li>
        </ul>
        <p>Au niveau de la mer : \\(P_{\\text{atm}} \\approx 10^5\\,\\mathrm{Pa}\\).</p>`
    },
    {
      id: 'hydrostatique',
      title: 'Loi fondamentale de la statique des fluides',
      content: `
        <p>Pour un fluide homogène et incompressible à l'équilibre, la différence de pression entre deux points A et B est :</p>
        <p>\\[ p_B - p_A = \\rho \\times g \\times (z_A - z_B) \\]</p>
        <p>avec :</p>
        <ul>
          <li>\\(\\rho\\) : masse volumique du fluide (kg·m⁻³)</li>
          <li>\\(g \\approx 9{,}81\\,\\mathrm{m \\cdot s^{-2}}\\) : accélération de la pesanteur</li>
          <li>\\(z_A - z_B\\) : différence de profondeur/altitude (m)</li>
        </ul>
        <p><strong>Conséquence :</strong> la pression <em>augmente</em> avec la profondeur et <em>diminue</em> avec l'altitude.</p>
        <div class="alert-info">La pression est identique en tous les points d'une même altitude dans un fluide homogène au repos.</div>`
    }
  ]
};
