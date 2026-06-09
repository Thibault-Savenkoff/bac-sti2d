export const FICHE = {
  chapterId: 'PC_LUMIERE',
  title: 'Énergie transportée par la lumière',
  sections: [
    {
      id: 'photon',
      title: 'Le photon et l\'énergie lumineuse',
      content: `
        <p>La lumière peut être décrite comme un ensemble de <strong>photons</strong> transportant chacun une énergie :</p>
        <p>\\[ \\Delta E = h \\times f = h \\times \\frac{c}{\\lambda} \\quad (\\mathrm{J}) \\]</p>
        <ul>
          <li>\\(h = 6{,}63 \\times 10^{-34}\\,\\mathrm{J \\cdot s}\\) : constante de Planck</li>
          <li>\\(f\\) : fréquence de l'onde (Hz)</li>
          <li>\\(c = 3{,}0 \\times 10^8\\,\\mathrm{m \\cdot s^{-1}}\\) : célérité</li>
          <li>\\(\\lambda\\) : longueur d'onde (m)</li>
        </ul>
        <p>Exemple : lumière rouge (\\(\\lambda = 800\\,\\mathrm{nm}\\)) → \\(E = 1{,}6\\,\\mathrm{eV}\\) ; bleu (\\(\\lambda = 400\\,\\mathrm{nm}\\)) → \\(E = 3{,}1\\,\\mathrm{eV}\\).</p>`
    },
    {
      id: 'thermique',
      title: 'Conversion thermique de l\'énergie solaire',
      content: `
        <p>Le <strong>panneau solaire thermique</strong> piège le rayonnement par effet de corps noir et chauffe un fluide caloporteur.</p>
        <p>Bilan énergétique : \\(E_{\\text{reçue}} = Q_{\\text{fournie}} + E_{\\text{perdue}}\\)</p>
        <p>Rendement :</p>
        <p>\\[ \\eta = \\frac{Q_{\\text{fournie}}}{E_{\\text{reçue}}} \\]</p>`
    },
    {
      id: 'pv',
      title: 'Conversion photovoltaïque',
      content: `
        <h3>Effet photoélectrique</h3>
        <p>Un photon d'énergie suffisante peut arracher un électron d'un semi-conducteur → création d'un courant électrique.</p>
        <h3>Puissance crête</h3>
        <p>Puissance maximale délivrée sous un ensoleillement optimal de <strong>1000 W·m⁻²</strong> à 25 °C.</p>
        <h3>Caractéristique \\(I = f(U)\\)</h3>
        <p>La courbe donne l'intensité en fonction de la tension délivrée. Le <strong>point de fonctionnement</strong> dépend de la charge connectée. La puissance maximale se situe dans le « coude » de la caractéristique.</p>
        <ul>
          <li><strong>\\(U_0\\) :</strong> tension à vide (pas de courant)</li>
          <li><strong>\\(I_{cc}\\) :</strong> courant de court-circuit (tension nulle)</li>
          <li><strong>Rendement :</strong> \\(\\eta = P_{\\text{crête}} / P_{\\text{reçue}} \\approx 15\\,\\%\\)</li>
        </ul>
        <p>La tension PV est continue → un <strong>onduleur</strong> est nécessaire pour injecter dans le réseau alternatif.</p>`
    }
  ]
};
