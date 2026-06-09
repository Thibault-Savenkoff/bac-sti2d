export const FICHE = {
  chapterId: 'PC_CHIM',
  title: 'Chimie',
  sections: [
    {
      id: 'redox',
      title: 'Oxydoréduction',
      content: `
        <h3>Définitions</h3>
        <ul>
          <li><strong>Oxydant</strong> : capte des électrons (se réduit)</li>
          <li><strong>Réducteur</strong> : cède des électrons (s'oxyde)</li>
        </ul>
        <div class="definition-box">RÉDOX : le Réducteur cède des électrons à l'Oxydant</div>

        <h3>Demi-équations</h3>
        <p>Couple Fe³⁺/Fe²⁺ : \\(\\text{Fe}^{3+} + e^- \\rightarrow \\text{Fe}^{2+}\\) (réduction)</p>
        <p>Équation bilan : combiner oxydation + réduction en équilibrant les électrons.</p>

        <h3>Nombre d'oxydation (NO)</h3>
        <ul>
          <li>H : +I (sauf hydrures : -I)</li>
          <li>O : -II (sauf peroxydes : -I)</li>
          <li>Éléments simples : 0</li>
          <li>Somme des NO dans un composé = charge totale</li>
        </ul>

        <h3>Pile électrochimique</h3>
        <div class="formula-block">$$U_{pile} = E°_{oxydant} - E°_{réducteur}$$</div>
        <p>Anode : oxydation (électrode négative) | Cathode : réduction (électrode positive)</p>
      `
    },
    {
      id: 'acide-base',
      title: 'Acide-base',
      content: `
        <h3>Définitions de Brønsted</h3>
        <ul>
          <li><strong>Acide</strong> : cède un proton H⁺</li>
          <li><strong>Base</strong> : capte un proton H⁺</li>
        </ul>

        <h3>pH et pKa</h3>
        <div class="formula-block">$$\\text{pH} = -\\log[H_3O^+]$$
$$\\text{pKa} = -\\log K_a$$</div>

        <h3>Couples courants</h3>
        <table>
          <tr><th>Couple acide/base</th><th>pKa</th></tr>
          <tr><td>H₃O⁺/H₂O</td><td>0</td></tr>
          <tr><td>CH₃COOH/CH₃COO⁻</td><td>4,8</td></tr>
          <tr><td>H₂CO₃/HCO₃⁻</td><td>6,4</td></tr>
          <tr><td>NH₄⁺/NH₃</td><td>9,2</td></tr>
          <tr><td>H₂O/HO⁻</td><td>14</td></tr>
        </table>

        <h3>Solution tampon</h3>
        <p>Mélange d'un acide faible et de sa base conjuguée. Résiste aux variations de pH.</p>
        <div class="formula-block">$$\\text{pH} = \\text{pKa} + \\log\\frac{[\\text{base}]}{[\\text{acide}]}$$</div>
      `
    }
  ]
};
