export const FICHE = {
  chapterId: 'PC_TRANSPORT',
  title: 'Transport et distribution de l\'énergie électrique',
  sections: [
    {
      id: 'joule',
      title: 'Effet Joule dans les lignes électriques',
      content: `
        <p>Lors du transport d'électricité, les porteurs de charge interagissent avec les atomes du conducteur : c'est l'<strong>effet Joule</strong>, dissipation d'énergie sous forme thermique.</p>
        <p>\\[ P_{\\text{Joule}} = R \\times I^2 \\quad (\\mathrm{W}) \\]</p>
        <p><em>⚠️ Attention :</em> \\(P_{\\text{Joule}} \\propto I^2\\) — doubler \\(I\\) multiplie les pertes par <strong>4</strong> !</p>
        <h3>Réduire les pertes Joule</h3>
        <ul>
          <li><strong>Diminuer \\(R\\) :</strong> meilleur conducteur (cuivre, alu) ou section plus grande.</li>
          <li><strong>Diminuer \\(I\\) :</strong> élever la tension de transport.</li>
        </ul>
        <p>Rappel : \\(P = U \\times I\\) → pour même puissance transportée, si \\(U\\) double alors \\(I\\) est divisé par deux, et les pertes par 4.</p>`
    },
    {
      id: 'transfo',
      title: 'Le transformateur électrique',
      content: `
        <p>Le transformateur modifie la tension et l'intensité d'un courant alternatif, <strong>à même fréquence et même forme</strong>.</p>
        <h3>Rapport de transformation</h3>
        <p>\\[ m = \\frac{u_2}{u_1} = \\frac{N_2}{N_1} \\]</p>
        <ul>
          <li>\\(m > 1\\) : élévateur de tension</li>
          <li>\\(m < 1\\) : abaisseur de tension</li>
          <li>\\(m = 1\\) : isolation galvanique seulement</li>
        </ul>
        <h3>Facteur de puissance et lignes</h3>
        <p>Pour minimiser \\(I\\) dans les lignes (et donc les pertes Joule), il faut maximiser \\(k\\) :</p>
        <p>\\[ I_{\\text{eff}} = \\frac{P}{U_{\\text{eff}} \\times k} \\]</p>
        <p>→ Plus \\(k \\to 1\\), plus \\(I\\) est faible et les pertes réduites.</p>`
    },
    {
      id: 'risques',
      title: 'Risques électriques et protections',
      content: `
        <h3>Dangers du courant sur le corps humain</h3>
        <table>
          <thead><tr><th>Intensité</th><th>Effets</th></tr></thead>
          <tbody>
            <tr><td>0,5 mA</td><td>Sensation très faible</td></tr>
            <tr><td>10 mA</td><td>Contraction musculaire, seuil de non-lâcher</td></tr>
            <tr><td>30 mA (3 min)</td><td>Paralysie respiratoire</td></tr>
            <tr><td>50 mA (1 s)</td><td>Fibrillation cardiaque irréversible</td></tr>
            <tr><td>1 A</td><td>Arrêt du cœur</td></tr>
          </tbody>
        </table>
        <p>Tensions dangereuses : 25 V (peau humide) à 50 V (peau sèche).</p>
        <h3>Dispositifs de protection</h3>
        <ul>
          <li><strong>Fusible / disjoncteur à maximum de courant :</strong> coupe en cas de surintensité (protection du matériel).</li>
          <li><strong>Disjoncteur différentiel :</strong> coupe en cas de fuite de courant vers la terre (protection des personnes).</li>
        </ul>`
    }
  ]
};
