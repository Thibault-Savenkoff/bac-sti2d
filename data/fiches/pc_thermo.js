export const FICHE = {
  chapterId: 'PC_THERMO',
  title: 'Énergie interne et transfert thermique',
  sections: [
    {
      id: 'energie_interne',
      title: 'Énergie interne et types de transferts',
      content: `
        <p>L'<strong>énergie interne</strong> \\(U\\) est l'énergie stockée dans un système (énergie cinétique + potentielle microscopiques).</p>
        <p>Variation lors d'un changement de température (sans changement d'état) :</p>
        <p>\\[ Q = m \\times c \\times (T_f - T_i) \\quad (\\mathrm{J}) \\]</p>
        <p>avec \\(c\\) la <strong>capacité thermique massique</strong> en J·kg⁻¹·K⁻¹.</p>
        <h3>3 types de transferts thermiques</h3>
        <ul>
          <li><strong>Conduction :</strong> propagation de proche en proche, sans déplacement macroscopique de matière.</li>
          <li><strong>Convection :</strong> transport d'énergie par mouvement macroscopique de la matière (fluide).</li>
          <li><strong>Rayonnement :</strong> tout corps chaud émet des rayonnements (sans besoin d'un milieu matériel).</li>
        </ul>
        <p>Le transfert spontané se fait toujours du corps <strong>chaud</strong> vers le corps <strong>froid</strong>.</p>`
    },
    {
      id: 'flux',
      title: 'Flux thermique',
      content: `
        <p>Le <strong>flux thermique</strong> \\(\\phi\\) est la quantité d'énergie traversant une paroi par seconde :</p>
        <p>\\[ \\phi = \\frac{Q}{\\Delta t} \\quad (\\mathrm{W}) \\]</p>
        <p>Le <strong>flux thermique surfacique</strong> \\(\\varphi\\) (pour 1 m²) :</p>
        <p>\\[ \\varphi = \\frac{\\phi}{S} \\quad (\\mathrm{W \\cdot m^{-2}}) \\]</p>`
    },
    {
      id: 'resistance',
      title: 'Conductivité et résistance thermique',
      content: `
        <p>La <strong>conductivité thermique</strong> \\(\\lambda\\) caractérise la capacité d'un matériau à conduire la chaleur (W·m⁻¹·K⁻¹).</p>
        <p>Exemples : polystyrène 0,036 — laine de verre 0,040 — brique 0,84 — acier 46 — cuivre 386.</p>
        <h3>Résistance thermique d'une paroi</h3>
        <p>\\[ R_{\\mathrm{th}} = \\frac{e}{\\lambda \\times S} \\quad (\\mathrm{K \\cdot W^{-1}}) \\]</p>
        <p>avec \\(e\\) l'épaisseur (m), \\(S\\) la surface (m²).</p>
        <p>Loi de Fourier (analogue à la loi d'Ohm) :</p>
        <p>\\[ \\Delta T = T_{\\text{chaud}} - T_{\\text{froid}} = R_{\\mathrm{th}} \\times \\phi \\]</p>
        <h3>Parois multicouches</h3>
        <ul>
          <li><strong>En série :</strong> \\(R_{\\mathrm{th,tot}} = \\displaystyle\\sum_i R_{\\mathrm{th},i}\\)</li>
          <li><strong>En parallèle :</strong> \\(\\dfrac{1}{R_{\\mathrm{th,tot}}} = \\displaystyle\\sum_i \\dfrac{1}{R_{\\mathrm{th},i}}\\)</li>
        </ul>`
    }
  ]
};
