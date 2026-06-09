export const FICHE = {
  chapterId: 'PC_SONORE',
  title: 'Ondes sonores',
  sections: [
    {
      id: 'composition',
      title: 'Composition fréquentielle d\'une onde sonore',
      content: `
        <p>Une onde sonore est la propagation d'une <strong>perturbation mécanique</strong> (surpression) dans un milieu matériel. C'est une onde <em>longitudinale</em> (perturbation dans la même direction que la propagation).</p>
        <h3>Son pur vs son composé</h3>
        <ul>
          <li><strong>Son pur :</strong> signal sinusoïdal → spectre à <em>un seul pic</em> (une fréquence unique).</li>
          <li><strong>Son composé :</strong> signal périodique non sinusoïdal → spectre à <em>plusieurs pics</em> (fondamental + harmoniques).</li>
        </ul>
        <h3>Hauteur et timbre</h3>
        <ul>
          <li><strong>Hauteur :</strong> fréquence du fondamental \\(f_1 = 1/T\\) → caractère aigu ou grave.</li>
          <li><strong>Timbre :</strong> nombre et amplitudes des harmoniques → complexité du son, permet de distinguer les instruments.</li>
        </ul>`
    },
    {
      id: 'intensite',
      title: 'Intensité sonore et niveau d\'intensité',
      content: `
        <h3>Intensité acoustique \\(I\\)</h3>
        <p>Puissance par unité de surface transportée par les ondes sonores :</p>
        <p>\\[ I = \\frac{P}{S} \\quad (\\mathrm{W \\cdot m^{-2}}) \\]</p>
        <p>Pour une propagation sphérique : \\(S = 4\\pi R^2\\) → \\(I\\) diminue avec la distance.</p>
        <h3>Niveau d'intensité sonore \\(L\\)</h3>
        <p>\\[ L = 10 \\times \\log\\left(\\frac{I}{I_0}\\right) \\quad (\\mathrm{dB}) \\]</p>
        <p>avec \\(I_0 = 10^{-12}\\,\\mathrm{W \\cdot m^{-2}}\\) (seuil d'audibilité).</p>
        <p>⚠️ On ne peut pas <em>sommer</em> les niveaux en dB, mais on peut sommer les intensités !</p>
        <h3>Plage audible</h3>
        <p>L'oreille humaine perçoit les fréquences entre <strong>20 Hz et 20 kHz</strong>. En dehors : infrasons (< 20 Hz) et ultrasons (> 20 kHz).</p>`
    },
    {
      id: 'transmission',
      title: 'Transmission et absorption',
      content: `
        <p>Quand une onde sonore rencontre un matériau, elle est partiellement :</p>
        <ul>
          <li><strong>Transmise</strong> : passe à travers.</li>
          <li><strong>Réfléchie</strong> : rebondit.</li>
          <li><strong>Absorbée</strong> : convertie en chaleur.</li>
        </ul>
        <p>Applications : casques anti-bruit (absorption), studios d'enregistrement (mousse phonique), murs isolants…</p>`
    }
  ]
};
