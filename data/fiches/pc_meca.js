export const FICHE = {
  chapterId: 'PC_MECA',
  title: 'Énergie mécanique et forces de frottement',
  sections: [
    {
      id: 'frottements',
      title: 'Forces de frottement',
      content: `
        <h3>Frottement fluide</h3>
        <p>Un corps se déplaçant dans un fluide subit une <strong>force de résistance aérodynamique</strong> opposée au mouvement :</p>
        <ul>
          <li>À faible vitesse : \\(f = k \\times v\\)</li>
          <li>À grande vitesse : \\(f = k' \\times v^2\\)</li>
        </ul>
        <p>Dans le domaine automobile : \\(f = \\dfrac{1}{2} \\rho C_x S v^2\\)</p>
        <p>avec \\(\\rho\\) la masse volumique du fluide, \\(C_x\\) le coefficient de traînée et \\(S\\) la surface frontale.</p>
        <h3>Frottement solide</h3>
        <p>Entre deux surfaces solides en contact, la force de frottement est <strong>indépendante de la vitesse</strong> mais dépend de la masse et de la nature des surfaces.</p>
        <p>Les frottements convertissent de l'énergie mécanique en énergie thermique → \\(\\Delta E_m < 0\\).</p>`
    },
    {
      id: 'pfd',
      title: 'Principe fondamental de la dynamique (PFD)',
      content: `
        <p>Dans un référentiel galiléen :</p>
        <p>\\[ \\sum \\vec{F}_{\\text{ext}} = m \\times \\vec{a} \\]</p>
        <p>Si on connaît toutes les autres forces, on peut déduire la force de frottement par soustraction vectorielle.</p>
        <h3>Méthode : résultante des forces</h3>
        <p>Positionner les vecteurs bout à bout : la résultante relie l'origine du premier à l'extrémité du dernier. Si la résultante est nulle, les vecteurs forment une figure fermée.</p>`
    },
    {
      id: 'energie_cinetique',
      title: 'Théorème de l\'énergie cinétique',
      content: `
        <p>La variation d'énergie cinétique entre A et B est égale à la somme des <strong>travaux</strong> de toutes les forces :</p>
        <p>\\[ \\Delta E_c = \\sum W_{AB}(\\vec{F}_i) \\]</p>
        <h3>Travail d'une force</h3>
        <p>\\[ W = \\vec{F} \\cdot \\overrightarrow{AB} = F \\times AB \\times \\cos\\varphi \\quad (\\mathrm{J}) \\]</p>
        <ul>
          <li>Si \\(\\varphi = 0\\) (même sens) → travail <em>moteur</em>, \\(W > 0\\)</li>
          <li>Si \\(\\varphi = \\pi\\) (sens opposé) → travail <em>résistant</em>, \\(W < 0\\)</li>
          <li>Si \\(\\varphi = \\pi/2\\) (perpendiculaire) → force ne travaille pas, \\(W = 0\\)</li>
        </ul>
        <p>Le poids et la réaction normale ne travaillent pas dans un mouvement horizontal.</p>
        <p>Pour trouver la force de frottement : \\(f = F - \\dfrac{\\Delta E_c}{AB}\\) (mouvement horizontal).</p>`
    }
  ]
};
