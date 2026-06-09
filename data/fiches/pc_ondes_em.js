export const FICHE = {
  chapterId: 'PC_ONDES',
  title: 'Ondes électromagnétiques et information',
  sections: [
    {
      id: 'caracteristiques',
      title: 'Caractéristiques d\'une onde électromagnétique',
      content: `
        <p>Une onde électromagnétique est la propagation d'une perturbation des champs électrique et magnétique. Elle se propage dans le vide (et dans l'air) à :</p>
        <p>\\[ c = 3{,}0 \\times 10^8\\,\\mathrm{m \\cdot s^{-1}} \\]</p>
        <h3>Relation fréquence / longueur d'onde</h3>
        <p>\\[ c = \\lambda \\times f \\quad \\Leftrightarrow \\quad \\lambda = \\frac{c}{f} \\]</p>
        <h3>Spectre électromagnétique</h3>
        <p>De basse à haute fréquence (de grande à petite longueur d'onde) :</p>
        <p>Ondes radio → Micro-ondes → Infrarouge (IR) → Visible → Ultraviolet (UV) → Rayons X → Rayons gamma</p>
        <p>Dans ce cours on s'intéresse aux <strong>ondes radio</strong> pour la transmission d'informations.</p>`
    },
    {
      id: 'modulation',
      title: 'Modulation d\'amplitude et transmission',
      content: `
        <p>Les signaux informatifs (voix, musique) ont des fréquences basses (20 Hz – 20 kHz), trop basses pour être transmises efficacement en radio. La <strong>modulation</strong> décale l'information vers de hautes fréquences.</p>
        <h3>Modulation d'amplitude (AM)</h3>
        <p>On multiplie le signal modulant (information, fréquence \\(f_m\\)) par un signal porteur (haute fréquence \\(f_p\\)).</p>
        <p>→ Le signal modulé contient les fréquences \\(f_p - f_m\\) et \\(f_p + f_m\\).</p>
        <p>La <strong>bande passante</strong> réservée à chaque émetteur est de largeur \\(2f_m\\) autour de \\(f_p\\).</p>
        <p><em>Exemple TNT :</em> bande de 470–790 MHz, largeur 8 MHz/chaîne → \\(N = (790-470)/8 = 40\\) chaînes.</p>
        <h3>Chaîne de transmission</h3>
        <p>Signal → Modulation → Émetteur → Canal → Récepteur → Démodulation → Signal récupéré.</p>`
    },
    {
      id: 'antenne',
      title: 'Dimensionnement d\'une antenne',
      content: `
        <p>La longueur d'une antenne dépend de la longueur d'onde à capter :</p>
        <h3>Antenne demi-onde (standard)</h3>
        <p>\\[ L = \\frac{\\lambda}{2} \\]</p>
        <h3>Antenne quart d'onde (avec réflecteur parabolique)</h3>
        <p>\\[ L = \\frac{\\lambda}{4} \\]</p>
        <p><em>Exemple TNT (470 MHz) :</em></p>
        <p>\\[ \\lambda = \\frac{3{,}0 \\times 10^8}{470 \\times 10^6} \\approx 0{,}64\\,\\mathrm{m} \\quad \\Rightarrow \\quad L = \\frac{\\lambda}{2} \\approx 32\\,\\mathrm{cm} \\]</p>`
    }
  ]
};
