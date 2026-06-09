export const FICHE = {
  chapterId: 'EE_ELEC',
  title: 'Électrotechnique',
  sections: [
    {
      id: 'mcc',
      title: 'Moteur à courant continu (MCC)',
      content: `
        <h3>Équations fondamentales</h3>
        <p><strong>Force contre-électromotrice (FCEM) :</strong></p>
        <div class="formula-block">$$E = k \\cdot \\Phi \\cdot n \\quad [\\text{V}]$$</div>
        <p>\\(k\\) = constante de machine, \\(\\Phi\\) = flux inducteur (Wb), \\(n\\) = vitesse de rotation (tr/s ou rad/s)</p>

        <p><strong>Couple électromagnétique :</strong></p>
        <div class="formula-block">$$C_{em} = k \\cdot \\Phi \\cdot I_a \\quad [\\mathrm{N{\\cdot}m}]$$</div>

        <p><strong>Équation de la maille d'induit :</strong></p>
        <div class="formula-block">$$U = E + R_a \\cdot I_a$$</div>
        <p>\\(U\\) = tension d'alimentation, \\(R_a\\) = résistance d'induit, \\(I_a\\) = courant d'induit</p>

        <h3>Bilan de puissance</h3>
        <div class="formula-block">$$P_{abs} = U \\cdot I_a$$
$$P_{em} = E \\cdot I_a = C_{em} \\cdot \\omega$$
$$P_{mec} = P_{em} - P_{pertes\\ méc}$$
$$\\eta = \\frac{P_{mec}}{P_{abs}}$$</div>

        <h3>Variation de vitesse</h3>
        <p>Deux méthodes :</p>
        <ul>
          <li><strong>Variation de U</strong> (hacheur) : \\(n \\propto U\\)</li>
          <li><strong>Variation de Φ</strong> (rhéostat inducteur) : \\(n \\propto 1/\\Phi\\) — affaiblissement du flux</li>
        </ul>
      `
    },
    {
      id: 'ma',
      title: 'Moteur asynchrone triphasé (MAS)',
      content: `
        <h3>Principe de fonctionnement</h3>
        <p>Le stator crée un champ tournant à la vitesse synchrone \\(n_s\\). Le rotor tourne à une vitesse \\(n < n_s\\) (d'où "asynchrone").</p>

        <h3>Vitesse synchrone</h3>
        <div class="formula-block">$$n_s = \\frac{60 \\cdot f}{p} \\quad [\\text{tr/min}]$$</div>
        <p>\\(f\\) = fréquence du réseau (50 Hz), \\(p\\) = nombre de paires de pôles</p>

        <h3>Glissement</h3>
        <div class="formula-block">$$g = \\frac{n_s - n}{n_s} \\quad (\\text{sans unité, typiquement 2–8\\%})$$</div>

        <h3>Fréquence des courants rotoriques</h3>
        <div class="formula-block">$$f_r = g \\cdot f$$</div>

        <h3>Bilan de puissance</h3>
        <div class="formula-block">$$P_{abs} = \\sqrt{3} \\cdot U \\cdot I \\cdot \\cos\\varphi$$
$$P_{em} = P_{abs} - P_{stator}$$
$$P_{mec} = P_{em} \\cdot (1 - g) = C \\cdot \\omega$$
$$\\eta = \\frac{P_{mec}}{P_{abs}}$$</div>

        <h3>Démarrage et variation de vitesse</h3>
        <ul>
          <li><strong>Démarrage direct</strong> : courant de démarrage 5–8× le courant nominal</li>
          <li><strong>Étoile-triangle</strong> : réduit le courant de démarrage par 3</li>
          <li><strong>Variateur de fréquence (VFD)</strong> : variation de \\(f\\) et \\(U\\) → variation de vitesse sans pertes</li>
        </ul>
      `
    },
    {
      id: 'transformateur',
      title: 'Transformateur',
      content: `
        <h3>Rapport de transformation</h3>
        <div class="formula-block">$$m = \\frac{N_2}{N_1} = \\frac{U_2}{U_1} = \\frac{I_1}{I_2}$$</div>
        <p>\\(N_1, N_2\\) = nombre de spires primaire/secondaire</p>

        <h3>Transformateur idéal</h3>
        <p>Hypothèses : pas de pertes, flux entièrement couplé</p>
        <div class="formula-block">$$U_1 \\cdot I_1 = U_2 \\cdot I_2 \\quad (P_{abs} = P_{fournie})$$</div>

        <h3>Pertes et rendement</h3>
        <ul>
          <li><strong>Pertes fer</strong> \\(P_{fe}\\) : hystérésis et courants de Foucault dans le noyau (constantes)</li>
          <li><strong>Pertes Joule</strong> \\(P_J = R \\cdot I^2\\) : dans les enroulements (variables avec la charge)</li>
        </ul>
        <div class="formula-block">$$\\eta = \\frac{P_{sortie}}{P_{absorbée}} = \\frac{P_{sortie}}{P_{sortie} + P_{fe} + P_J}$$</div>

        <div class="tip-box">Un transformateur élévateur (m > 1) élève la tension et abaisse le courant → réduit les pertes Joule dans les lignes de transport.</div>
      `
    },
    {
      id: 'ms',
      title: 'Moteur synchrone et générateurs',
      content: `
        <h3>Alternateur (générateur synchrone)</h3>
        <p>Tourne à la vitesse synchrone \\(n_s = 60f/p\\) et génère une tension AC de fréquence \\(f\\).</p>

        <h3>Moteur synchrone</h3>
        <p>Tourne exactement à \\(n_s\\) (pas de glissement). Utilisé pour forte puissance et bon \\(\\cos\\varphi\\).</p>

        <h3>Puissance mécanique produite</h3>
        <div class="formula-block">$$P = C \\cdot \\omega_s$$</div>
        <p>Le couple est lié à l'angle de décalage entre rotor et champ tournant (angle de charge \\(\\delta\\)).</p>

        <div class="warning-box">Un moteur synchrone n'est pas auto-démarrant. Il nécessite un convertisseur de fréquence ou un démarrage en asynchrone.</div>
      `
    }
  ]
};
