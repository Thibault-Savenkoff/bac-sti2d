export const FICHE = {
  chapterId: 'PC_OXREDO',
  title: 'Oxydoréduction et énergie chimique',
  sections: [
    {
      id: 'bases',
      title: 'Oxydant, réducteur et demi-équations',
      content: `
        <p><strong>Oxydant :</strong> espèce qui <em>capte</em> des électrons. <strong>Réducteur :</strong> espèce qui <em>cède</em> des électrons.</p>
        <p>Chaque couple oxydoréducteur s'écrit \\(\\mathrm{Ox/Red}\\) avec la demi-équation :</p>
        <p>\\[ \\mathrm{Ox} + n\\,e^- \\rightarrow \\mathrm{Red} \\]</p>
        <h3>Méthode : équation-bilan d'oxydoréduction</h3>
        <ol>
          <li>Écrire les deux demi-équations.</li>
          <li>Multiplier pour égaliser le nombre d'électrons échangés.</li>
          <li>Additionner membre à membre et simplifier les électrons.</li>
        </ol>
        <p>Les <strong>piles et accumulateurs</strong> sont des convertisseurs électrochimiques : énergie chimique → énergie électrique.</p>`
    },
    {
      id: 'pile',
      title: 'Fonctionnement d\'une pile (Daniell)',
      content: `
        <p>La pile Daniell comporte :</p>
        <ul>
          <li><strong>Anode (pôle −) :</strong> oxydation — \\(\\mathrm{Zn}_{(s)} \\to \\mathrm{Zn^{2+}}_{(aq)} + 2e^-\\)</li>
          <li><strong>Cathode (pôle +) :</strong> réduction — \\(\\mathrm{Cu^{2+}}_{(aq)} + 2e^- \\to \\mathrm{Cu}_{(s)}\\)</li>
          <li><strong>Pont salin :</strong> assure la fermeture du circuit ionique.</li>
        </ul>
        <p>Équation-bilan : \\(\\mathrm{Zn}_{(s)} + \\mathrm{Cu^{2+}}_{(aq)} \\to \\mathrm{Cu}_{(s)} + \\mathrm{Zn^{2+}}_{(aq)}\\)</p>
        <div class="alert-info">Moyen mnémotechnique : <strong>C</strong>athode / <strong>R</strong>éduction (deux consonnes) — <strong>A</strong>node / <strong>O</strong>xydation (deux voyelles).</div>
        <p>Les réactions dans une pile sont <strong>spontanées mais irréversibles</strong> → durée de vie limitée, impossible de recharger.</p>`
    },
    {
      id: 'accumulateur',
      title: 'Accumulateur (rechargeable)',
      content: `
        <p>Un accumulateur met en jeu des réactions <strong>réversibles</strong> (double flèche ⇌).</p>
        <ul>
          <li><strong>Décharge :</strong> réactions spontanées — chimique → électrique.</li>
          <li><strong>Charge :</strong> générateur extérieur force les réactions dans l'autre sens — électrique → chimique.</li>
        </ul>
        <h3>Exemple : batterie au plomb</h3>
        <p>Décharge — cathode : \\(\\mathrm{PbO_2 + SO_4^{2-} + 4H^+ + 2e^- \\rightleftharpoons PbSO_4 + 2H_2O}\\)</p>
        <p>Décharge — anode : \\(\\mathrm{Pb + SO_4^{2-} \\rightleftharpoons PbSO_4 + 2e^-}\\)</p>
        <h3>Pile à combustible (H₂)</h3>
        <p>Cathode : \\(\\mathrm{O_2 + 4H^+ + 4e^- \\to 2H_2O}\\)</p>
        <p>Anode : \\(\\mathrm{H_2 \\to 2H^+ + 2e^-}\\)</p>
        <p>Bilan : \\(\\mathrm{O_2 + 2H_2 \\to 2H_2O}\\)</p>`
    },
    {
      id: 'caracteristiques',
      title: 'Caractéristiques électriques',
      content: `
        <h3>Tension nominale \\(U\\)</h3>
        <p>Tension à vide de la pile (en V).</p>
        <h3>Capacité \\(Q\\)</h3>
        <p>Quantité d'électricité fournie (en A·h) :</p>
        <p>\\[ Q = I \\times \\Delta t \\]</p>
        <h3>Énergie stockée</h3>
        <p>\\[ E = Q \\times U \\quad (\\mathrm{Wh}) \\]</p>
        <h3>Énergie et puissance spécifiques</h3>
        <p>Énergie massique (J·kg⁻¹) et puissance massique (W·kg⁻¹) : caractérisent la portabilité d'un accumulateur.</p>`
    }
  ]
};
