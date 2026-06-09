export const FICHE = {
  chapterId: 'PC_SIGNAUX',
  title: 'Signaux et énergie électrique',
  sections: [
    {
      id: 'signal_sinus',
      title: 'Caractéristiques d\'un signal sinusoïdal',
      content: `
        <p>En France, le réseau électrique délivre une tension <strong>alternative sinusoïdale</strong> à 50 Hz et 230 V efficace.</p>
        <p>Modélisation : \\[ a(t) = A_{\\max} \\times \\sin(\\omega t + \\varphi) \\]</p>
        <table>
          <thead><tr><th>Grandeur</th><th>Définition</th><th>Formule</th></tr></thead>
          <tbody>
            <tr><td>Amplitude \\(A_{\\max}\\)</td><td>Valeur maximale</td><td>—</td></tr>
            <tr><td>Valeur efficace \\(A_{\\text{eff}}\\)</td><td>Valeur « utile »</td><td>\\(A_{\\text{eff}} = \\dfrac{A_{\\max}}{\\sqrt{2}}\\)</td></tr>
            <tr><td>Période \\(T\\)</td><td>Durée d'un motif</td><td>—</td></tr>
            <tr><td>Fréquence \\(f\\)</td><td>Nb de périodes/seconde</td><td>\\(f = 1/T\\)</td></tr>
            <tr><td>Pulsation \\(\\omega\\)</td><td>—</td><td>\\(\\omega = 2\\pi f = 2\\pi/T\\)</td></tr>
            <tr><td>Phase à l'origine \\(\\varphi\\)</td><td>Décalage initial</td><td>\\(\\varphi = 2\\pi\\,t_1/T\\)</td></tr>
          </tbody>
        </table>`
    },
    {
      id: 'puissances',
      title: 'Puissances en régime sinusoïdal',
      content: `
        <h3>Puissance instantanée</h3>
        <p>\\[ p(t) = u(t) \\times i(t) \\quad (\\mathrm{W}) \\]</p>
        <p>Dépend du <strong>déphasage</strong> courant-tension : présent si le circuit contient une bobine (inductif) ou un condensateur (capacitif).</p>
        <h3>Puissance active \\(P\\)</h3>
        <p>Valeur <em>moyenne</em> de la puissance instantanée — puissance réellement utilisée pour le travail.</p>
        <p>\\[ P \\text{ en watts (W)} \\]</p>
        <h3>Puissance apparente \\(S\\)</h3>
        <p>\\[ S = U_{\\text{eff}} \\times I_{\\text{eff}} \\quad (\\mathrm{VA}) \\]</p>
        <p>Puissance de référence correspondant au cas où \\(u\\) et \\(i\\) sont en phase. Sert au <strong>dimensionnement</strong> des installations.</p>
        <h3>Facteur de puissance \\(k\\)</h3>
        <p>\\[ k = \\frac{P}{S} = \\frac{P}{U_{\\text{eff}} \\times I_{\\text{eff}}} \\quad (0 \\leq k \\leq 1) \\]</p>
        <p>Plus \\(k\\) est proche de 1, plus le circuit est efficace. Un faible \\(k\\) augmente l'intensité nécessaire et donc les <strong>pertes Joule</strong> dans les lignes.</p>`
    }
  ]
};
