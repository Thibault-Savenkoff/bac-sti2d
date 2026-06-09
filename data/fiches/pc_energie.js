export const FICHE = {
  chapterId: 'PC_ENERGIE',
  title: "L'énergie et ses enjeux",
  sections: [
    {
      id: 'formes',
      title: 'Formes d\'énergie et unités',
      content: `
        <p>L'énergie désigne la <strong>capacité à effectuer des transformations</strong>. Elle est conservative : on ne peut ni la créer ni la détruire, seulement la convertir.</p>
        <table>
          <thead><tr><th>Forme</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>Rayonnante</td><td>Transportée par ondes électromagnétiques (visible, IR, radio…)</td></tr>
            <tr><td>Mécanique</td><td>Énergie cinétique + énergie potentielle de pesanteur</td></tr>
            <tr><td>Thermique</td><td>Agitation des atomes ; augmente avec la température et lors des changements d'état</td></tr>
            <tr><td>Chimique</td><td>Stockée dans les liaisons entre atomes (fossiles, batteries…)</td></tr>
            <tr><td>Nucléaire</td><td>Stockée dans les noyaux ; exploitée par fission ou fusion</td></tr>
            <tr><td>Électrique</td><td>Transfert de charges électriques (électrons)</td></tr>
          </tbody>
        </table>
        <h3>Unités de l'énergie</h3>
        <p>Unité SI : le <strong>joule (J)</strong>, homogène à W·s.</p>
        <ul>
          <li>\\(1\\,\\mathrm{kWh} = 3{,}6 \\times 10^6\\,\\mathrm{J}\\)</li>
          <li>\\(1\\,\\mathrm{eV} = 1{,}6 \\times 10^{-19}\\,\\mathrm{J}\\)</li>
          <li>\\(1\\,\\mathrm{cal} = 4{,}18\\,\\mathrm{J}\\)</li>
          <li>\\(1\\,\\mathrm{tep} = 42\\,\\mathrm{GJ}\\)</li>
        </ul>`
    },
    {
      id: 'puissance',
      title: 'Puissance et énergie',
      content: `
        <h3>Puissance instantanée</h3>
        <p>La puissance instantanée est la <strong>dérivée de l'énergie par rapport au temps</strong> :</p>
        <p>\\[ P(t) = \\frac{\\mathrm{d}E}{\\mathrm{d}t} \\quad (\\mathrm{W}) \\]</p>
        <p>La puissance moyenne sur \\(\\Delta t\\) vaut :</p>
        <p>\\[ P_{\\text{moy}} = \\frac{\\Delta E}{\\Delta t} \\]</p>
        <p><strong>Astuce graphique :</strong> sur un graphique \\(P = f(t)\\), l'énergie correspond à l'<em>aire sous la courbe</em>.</p>
        <h3>Autonomie d'un système</h3>
        <p>Durée de fonctionnement d'un système embarquant une énergie \\(\\Delta E\\) :</p>
        <p>\\[ \\Delta t = \\frac{\\Delta E}{P} \\]</p>`
    },
    {
      id: 'rendement',
      title: 'Conversions d\'énergie et rendement',
      content: `
        <h3>Convertisseur</h3>
        <p>Un <strong>convertisseur</strong> transforme une forme d'énergie en une autre. Une partie de l'énergie est perdue (souvent en chaleur par effet Joule ou frottements).</p>
        <p>\\[ E_{\\text{entrante}} = E_{\\text{utile}} + E_{\\text{perdue}} \\]</p>
        <h3>Rendement</h3>
        <p>\\[ \\eta = \\frac{E_{\\text{utile}}}{E_{\\text{entrante}}} = \\frac{P_{\\text{utile}}}{P_{\\text{entrante}}} \\quad (0 \\leq \\eta \\leq 1) \\]</p>
        <div class="alert-info">⚠️ On ne peut pas additionner les rendements d'une chaîne. Il faut calculer étape par étape.</div>
        <h3>Réversibilité</h3>
        <p>Un convertisseur <strong>réversible</strong> peut fonctionner dans les deux sens.</p>
        <p><em>Exemple :</em> un moteur électrique peut aussi jouer le rôle de génératrice (freinage régénératif dans un véhicule électrique).</p>`
    }
  ]
};
