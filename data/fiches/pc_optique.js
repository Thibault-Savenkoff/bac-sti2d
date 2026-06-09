export const FICHE = {
  chapterId: 'PC_OPT',
  title: 'Optique et ondes',
  sections: [
    {
      id: 'optique-geo',
      title: 'Optique géométrique',
      content: `
        <h3>Loi de Snell-Descartes (réfraction)</h3>
        <div class="formula-block">$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$</div>
        <p>\\(n_i\\) = indice de réfraction du milieu \\(i\\). Dans le vide / air : \\(n = 1\\). Verre : \\(n \\approx 1{,}5\\).</p>

        <h3>Réflexion totale interne</h3>
        <p>Se produit quand l'angle d'incidence dépasse l'angle critique \\(\\theta_c\\) :</p>
        <div class="formula-block">$$\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)$$</div>
        <p>Application : fibre optique.</p>

        <h3>Lentilles minces convergentes (formule de conjugaison)</h3>
        <div class="formula-block">$$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f'} = D$$</div>
        <p>Grandissement : \\(\\gamma = \\dfrac{h'}{h} = \\dfrac{v}{u}\\)</p>
        <div class="tip-box">Conventions algébriques : distances mesurées depuis le centre optique, positives vers la droite.</div>
      `
    },
    {
      id: 'ondes',
      title: 'Ondes mécaniques et électromagnétiques',
      content: `
        <h3>Relations fondamentales</h3>
        <div class="formula-block">$$v = \\lambda \\cdot f = \\frac{\\lambda}{T}$$</div>
        <p>\\(v\\) = célérité (m/s), \\(\\lambda\\) = longueur d'onde (m), \\(f\\) = fréquence (Hz), \\(T\\) = période (s)</p>
        <p>Lumière dans le vide : \\(c = 3 \\times 10^8\\) m/s</p>

        <h3>Spectre électromagnétique</h3>
        <table>
          <tr><th>Radiation</th><th>Longueur d'onde</th></tr>
          <tr><td>Rayons gamma</td><td>< 0,01 nm</td></tr>
          <tr><td>Rayons X</td><td>0,01–10 nm</td></tr>
          <tr><td>UV</td><td>10–400 nm</td></tr>
          <tr><td>Visible</td><td>400–780 nm</td></tr>
          <tr><td>Infrarouge</td><td>780 nm–1 mm</td></tr>
          <tr><td>Micro-ondes</td><td>1 mm–10 cm</td></tr>
          <tr><td>Ondes radio</td><td>> 10 cm</td></tr>
        </table>

        <h3>Effet Doppler</h3>
        <div class="formula-block">$$f_{obs} = f_{source} \\cdot \\frac{v \\pm v_{obs}}{v \\mp v_{source}}$$</div>
        <p>Application : radar de vitesse, échographie.</p>
      `
    }
  ]
};
