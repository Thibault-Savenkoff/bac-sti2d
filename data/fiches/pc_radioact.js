export const FICHE = {
  chapterId: 'PC_RADIOACT',
  title: 'Radioactivité naturelle et artificielle',
  sections: [
    {
      id: 'phenomene',
      title: 'Le phénomène de radioactivité',
      content: `
        <p>Un noyau <strong>radioactif</strong> (instable) se désintègre spontanément et aléatoirement en un autre noyau, en émettant un rayonnement.</p>
        <h3>Types de rayonnements</h3>
        <table>
          <thead><tr><th>Type</th><th>Nature de la particule émise</th></tr></thead>
          <tbody>
            <tr><td>Alpha (\\(\\alpha\\))</td><td>Noyau d'hélium \\(^4_2\\mathrm{He}\\)</td></tr>
            <tr><td>Bêta moins (\\(\\beta^-\\))</td><td>Électron (un neutron devient proton)</td></tr>
            <tr><td>Bêta plus (\\(\\beta^+\\))</td><td>Positon (un proton devient neutron)</td></tr>
            <tr><td>Gamma (\\(\\gamma\\))</td><td>Photon de haute énergie (pas de changement de noyau)</td></tr>
          </tbody>
        </table>
        <p>Exemples :</p>
        <ul>
          <li>\\(\\alpha\\) : \\(^{238}_{92}\\mathrm{U} \\to {}^{234}_{90}\\mathrm{Th} + {}^4_2\\mathrm{He}\\)</li>
          <li>\\(\\beta^-\\) : \\(^{234}_{90}\\mathrm{Th} \\to {}^{234}_{91}\\mathrm{Pa} + {}^0_{-1}e\\)</li>
        </ul>
        <p><strong>Radioactivité naturelle :</strong> radon, carbone-14, uranium... <strong>Radioactivité artificielle :</strong> déchets nucléaires, isotopes médicaux.</p>`
    },
    {
      id: 'decroissance',
      title: 'Loi de décroissance radioactive',
      content: `
        <p>Le nombre de noyaux radioactifs décroît exponentiellement :</p>
        <p>\\[ N(t) = N_0 \\times e^{-\\lambda t} \\]</p>
        <p>avec \\(\\lambda\\) la constante de désintégration (s⁻¹).</p>
        <h3>Demi-vie \\(t_{1/2}\\)</h3>
        <p>Durée au bout de laquelle la moitié des noyaux s'est désintégrée :</p>
        <p>\\[ N(t_{1/2}) = \\frac{N_0}{2} \\]</p>
        <p>Relation avec \\(\\lambda\\) :</p>
        <p>\\[ \\lambda = \\frac{\\ln 2}{t_{1/2}} \\]</p>
        <p>La demi-vie ne dépend que de la nature de l'isotope (pas de \\(N_0\\)).</p>
        <h3>Activité</h3>
        <p>L'activité \\(A\\) est le nombre de désintégrations par seconde :</p>
        <p>\\[ A(t) = -\\frac{\\mathrm{d}N}{\\mathrm{d}t} = \\lambda \\times N(t) \\quad (\\mathrm{Bq}) \\]</p>`
    }
  ]
};
