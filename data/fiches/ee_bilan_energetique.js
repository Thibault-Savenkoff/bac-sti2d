export const FICHE = {
  chapterId: 'EE_BILAN',
  title: 'Bilan énergétique',
  sections: [
    {
      id: 'rendement',
      title: 'Rendement et pertes',
      content: `
        <h3>Définition du rendement</h3>
        <div class="formula-block">$$\\eta = \\frac{P_{utile}}{P_{absorbée}} = \\frac{P_{absorbée} - P_{pertes}}{P_{absorbée}}$$</div>
        <p>Le rendement est toujours \\(0 < \\eta \\leq 1\\). En pourcentage : \\(\\eta\\% = \\eta \\times 100\\).</p>

        <h3>Pertes courantes</h3>
        <ul>
          <li><strong>Pertes Joule (effet Joule)</strong> : \\(P_J = R \\cdot I^2\\) — dans les conducteurs et enroulements</li>
          <li><strong>Pertes fer</strong> : \\(P_{fe} = P_{hyst} + P_{Foucault}\\) — dans les noyaux magnétiques</li>
          <li><strong>Pertes mécaniques</strong> : frottements, ventilation — dans les machines tournantes</li>
          <li><strong>Pertes par commutation</strong> : dans les semiconducteurs de puissance</li>
        </ul>

        <h3>Rendement en cascade</h3>
        <div class="formula-block">$$\\eta_{global} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times \\ldots$$</div>
        <div class="warning-box">Même de petites pertes accumulées à chaque étage réduisent fortement le rendement global !</div>
      `
    },
    {
      id: 'thermique',
      title: 'Transferts thermiques',
      content: `
        <h3>Conduction thermique</h3>
        <div class="formula-block">$$\\Phi = \\lambda \\cdot S \\cdot \\frac{\\Delta T}{e} \\quad [\\text{W}]$$</div>
        <p>\\(\\lambda\\) = conductivité thermique (W/m·K), \\(S\\) = surface (m²), \\(e\\) = épaisseur (m), \\(\\Delta T\\) = différence de température</p>

        <h3>Résistance thermique</h3>
        <div class="formula-block">$$R_{th} = \\frac{e}{\\lambda \\cdot S} \\quad [\\text{K/W}]$$</div>
        <p>Analogie électrique : \\(\\Delta T = R_{th} \\cdot \\Phi\\) (comme \\(U = R \\cdot I\\))</p>
        <p>En série : \\(R_{th,total} = R_{th,1} + R_{th,2} + \\ldots\\)</p>

        <h3>Coefficient U d'un mur (bâtiment)</h3>
        <div class="formula-block">$$U = \\frac{1}{R_{th,surf\\ ext} + \\sum_i \\frac{e_i}{\\lambda_i} + R_{th,surf\\ int}} \\quad [\\text{W/m}^2\\text{K}]$$</div>
        <p>Puissance de déperdition : \\(\\Phi = U \\cdot S \\cdot \\Delta T\\)</p>

        <h3>Convection</h3>
        <div class="formula-block">$$\\Phi = h \\cdot S \\cdot \\Delta T$$</div>
        <p>\\(h\\) = coefficient de convection (W/m²·K) : 5–25 (air libre), 100–10000 (liquide en forced convection)</p>

        <h3>Rayonnement (Stefan-Boltzmann)</h3>
        <div class="formula-block">$$\\Phi = \\varepsilon \\cdot \\sigma \\cdot S \\cdot T^4 \\quad (\\sigma = 5{,}67 \\times 10^{-8} \\text{ W/m}^2\\text{K}^4)$$</div>
      `
    },
    {
      id: 'isolation',
      title: 'Isolation thermique des bâtiments',
      content: `
        <h3>DPE (Diagnostic de Performance Énergétique)</h3>
        <p>Classe le bâtiment de A (< 50 kWh/m²/an) à G (> 450 kWh/m²/an) selon sa consommation d'énergie primaire.</p>

        <h3>Ponts thermiques</h3>
        <p>Zones où l'isolation est interrompue (liaisons plancher-mur, fenêtres...) → fuites de chaleur localisées.</p>

        <h3>Valeurs de λ typiques</h3>
        <table>
          <tr><th>Matériau</th><th>λ (W/m·K)</th></tr>
          <tr><td>Laine de verre</td><td>0,032–0,040</td></tr>
          <tr><td>Polystyrène expansé</td><td>0,030–0,040</td></tr>
          <tr><td>Béton</td><td>1,75</td></tr>
          <tr><td>Verre</td><td>1,0</td></tr>
          <tr><td>Acier</td><td>50</td></tr>
          <tr><td>Air calme</td><td>0,026</td></tr>
        </table>

        <div class="tip-box">Un matériau est bon isolant thermique si λ est petit (< 0,05 W/m·K). Un bon isolant électrique n'est pas forcément un bon isolant thermique !</div>
      `
    }
  ]
};
