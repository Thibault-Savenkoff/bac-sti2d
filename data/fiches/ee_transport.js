export const FICHE = {
  chapterId: 'EE_TRANS',
  title: 'Transport et distribution d\'énergie',
  sections: [
    {
      id: 'reseau',
      title: 'Réseau électrique',
      content: `
        <h3>Structure du réseau français</h3>
        <table>
          <tr><th>Niveau</th><th>Tension</th><th>Rôle</th></tr>
          <tr><td>Transport (RTE)</td><td>400 kV, 225 kV</td><td>Longue distance, interconnexions</td></tr>
          <tr><td>Distribution HTA</td><td>20 kV, 15 kV</td><td>Zones rurales et industrielles</td></tr>
          <tr><td>Distribution BT</td><td>400 V (triphasé), 230 V (monophasé)</td><td>Particuliers, PME</td></tr>
        </table>

        <h3>Pourquoi transporter en haute tension ?</h3>
        <p>Les pertes Joule dans les lignes sont :</p>
        <div class="formula-block">$$P_{pertes} = R_{ligne} \\cdot I^2$$</div>
        <p>À puissance fixée \\(P = U \\cdot I\\), augmenter \\(U\\) → diminue \\(I\\) → réduit les pertes quadratiquement.</p>
        <div class="tip-box">Doubler la tension de transport → pertes divisées par 4.</div>
      `
    },
    {
      id: 'puissances',
      title: 'Puissances en triphasé',
      content: `
        <h3>Triangle des puissances</h3>
        <div class="formula-block">$$P = \\sqrt{3} \\cdot U_L \\cdot I \\cdot \\cos\\varphi \\quad [\\text{W}]$$
$$Q = \\sqrt{3} \\cdot U_L \\cdot I \\cdot \\sin\\varphi \\quad [\\text{VAR}]$$
$$S = \\sqrt{3} \\cdot U_L \\cdot I \\quad [\\text{VA}]$$
$$S^2 = P^2 + Q^2$$</div>
        <p>\\(U_L\\) = tension de ligne, \\(\\cos\\varphi\\) = facteur de puissance</p>

        <h3>Facteur de puissance</h3>
        <p>Un \\(\\cos\\varphi\\) faible signifie que beaucoup de puissance réactive circule dans les câbles sans faire de travail utile.</p>
        <ul>
          <li>\\(\\cos\\varphi = 1\\) → charge purement résistive (idéal)</li>
          <li>\\(\\cos\\varphi = 0\\) → charge purement réactive (moteur à vide)</li>
        </ul>

        <h3>Compensation de puissance réactive</h3>
        <p>On installe des batteries de condensateurs en parallèle sur le réseau :</p>
        <div class="formula-block">$$Q_C = U^2 \\cdot C \\cdot \\omega \\quad (Q_C \\text{ capacitif compense } Q \\text{ inductif})$$</div>
        <div class="definition-box">La distribution demande aux industriels un \\(\\cos\\varphi \\geq 0{,}9\\) sous peine de pénalités. La compensation permet d'améliorer ce facteur.</div>
      `
    },
    {
      id: 'lignes',
      title: 'Lignes électriques',
      content: `
        <h3>Modèle d'une ligne</h3>
        <p>Une ligne longue est modélisée par :</p>
        <ul>
          <li>Résistance \\(R\\) (pertes Joule)</li>
          <li>Inductance \\(L\\) (réactance)</li>
          <li>Capacité \\(C\\) (susceptance)</li>
        </ul>

        <h3>Chute de tension</h3>
        <div class="formula-block">$$\\Delta U = R \\cdot I \\cdot \\cos\\varphi + X \\cdot I \\cdot \\sin\\varphi$$</div>
        <p>\\(X = L\\omega\\) = réactance de la ligne</p>

        <h3>Câbles vs lignes aériennes</h3>
        <table>
          <tr><th></th><th>Câbles souterrains</th><th>Lignes aériennes</th></tr>
          <tr><td>Coût</td><td>Élevé</td><td>Faible</td></tr>
          <tr><td>Fiabilité</td><td>Haute (météo)</td><td>Sensible aux intempéries</td></tr>
          <tr><td>Capacité</td><td>Plus grande (C)</td><td>Plus faible</td></tr>
          <tr><td>Maintenance</td><td>Difficile</td><td>Facile</td></tr>
        </table>
      `
    }
  ]
};
