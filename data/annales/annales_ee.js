export const EXERCISES = [
  {
    id: 'ee_ex_001',
    chapterId: 'EE_ELEC',
    year: 2023,
    source: 'BAC STI2D EE – 2023',
    title: 'Étude d\'un moteur à courant continu',
    difficulty: 3,
    statement: `
      <p>Un moteur à courant continu à excitation séparée a les caractéristiques nominales suivantes :</p>
      <ul>
        <li>Tension d'alimentation : U = 220 V</li>
        <li>Courant d'induit nominal : I<sub>a</sub> = 15 A</li>
        <li>Résistance d'induit : R<sub>a</sub> = 1,2 Ω</li>
        <li>Vitesse nominale : n = 1500 tr/min</li>
      </ul>
    `,
    questions: [
      { num: 1, text: 'Calculer la FCEM E à la vitesse nominale.', points: 3 },
      { num: 2, text: 'Calculer le couple électromagnétique C<sub>em</sub> sachant que k·Φ = 1,35 V·s.', points: 3 },
      { num: 3, text: 'Calculer le rendement du moteur en supposant que les pertes mécaniques valent P<sub>méc</sub> = 120 W.', points: 4 },
      { num: 4, text: 'On veut réduire la vitesse à n\' = 900 tr/min en maintenant le même couple. Quelle tension faut-il appliquer ?', points: 5 },
    ],
    correction: `
      <p><strong>1. FCEM à la vitesse nominale :</strong></p>
      <p>D'après la maille d'induit : U = E + R<sub>a</sub>·I<sub>a</sub></p>
      <p><strong>E = U - R<sub>a</sub>·I<sub>a</sub> = 220 - 1,2 × 15 = 220 - 18 = 202 V</strong></p>

      <p><strong>2. Couple électromagnétique :</strong></p>
      <p>C<sub>em</sub> = k·Φ·I<sub>a</sub> = 1,35 × 15 = <strong>20,25 N·m</strong></p>

      <p><strong>3. Rendement :</strong></p>
      <p>P<sub>absorbée</sub> = U·I<sub>a</sub> = 220 × 15 = 3300 W</p>
      <p>P<sub>em</sub> = E·I<sub>a</sub> = 202 × 15 = 3030 W</p>
      <p>P<sub>utile</sub> = P<sub>em</sub> - P<sub>méc</sub> = 3030 - 120 = 2910 W</p>
      <p><strong>η = P<sub>utile</sub>/P<sub>abs</sub> = 2910/3300 = 0,882 = 88,2%</strong></p>

      <p><strong>4. Tension pour n' = 900 tr/min :</strong></p>
      <p>E = k·Φ·n → E' = E × (n'/n) = 202 × (900/1500) = 121,2 V</p>
      <p>Même couple → même I<sub>a</sub> = 15 A</p>
      <p><strong>U' = E' + R<sub>a</sub>·I<sub>a</sub> = 121,2 + 18 = 139,2 V</strong></p>
    `
  },
  {
    id: 'ee_ex_002',
    chapterId: 'EE_ELEC',
    year: 2022,
    source: 'BAC STI2D EE – 2022',
    title: 'Moteur asynchrone triphasé — bilan de puissance',
    difficulty: 3,
    statement: `
      <p>Un moteur asynchrone triphasé possède les caractéristiques suivantes :</p>
      <ul>
        <li>Tension de ligne : U<sub>L</sub> = 400 V, 50 Hz</li>
        <li>Courant de ligne : I = 12 A</li>
        <li>Facteur de puissance : cos φ = 0,82</li>
        <li>Nombre de paires de pôles : p = 2</li>
        <li>Glissement nominal : g = 4%</li>
        <li>Pertes statoriques : P<sub>s</sub> = 200 W</li>
        <li>Pertes mécaniques : P<sub>méc</sub> = 80 W</li>
      </ul>
    `,
    questions: [
      { num: 1, text: 'Calculer la vitesse synchrone n<sub>s</sub> et la vitesse de rotation n du moteur.', points: 3 },
      { num: 2, text: 'Calculer la puissance absorbée P<sub>abs</sub>.', points: 2 },
      { num: 3, text: 'Calculer la puissance électromagnétique P<sub>em</sub> et les pertes Joule rotoriques.', points: 4 },
      { num: 4, text: 'Calculer la puissance utile et le rendement.', points: 4 },
    ],
    correction: `
      <p><strong>1. Vitesses :</strong></p>
      <p>n<sub>s</sub> = 60·f/p = 60×50/2 = <strong>1500 tr/min</strong></p>
      <p>g = (n<sub>s</sub>-n)/n<sub>s</sub> → n = n<sub>s</sub>·(1-g) = 1500×(1-0,04) = <strong>1440 tr/min</strong></p>

      <p><strong>2. Puissance absorbée :</strong></p>
      <p>P<sub>abs</sub> = √3·U<sub>L</sub>·I·cos φ = 1,732×400×12×0,82 = <strong>6830 W ≈ 6,83 kW</strong></p>

      <p><strong>3. Puissance électromagnétique et pertes rotoriques :</strong></p>
      <p>P<sub>em</sub> = P<sub>abs</sub> - P<sub>s</sub> = 6830 - 200 = <strong>6630 W</strong></p>
      <p>P<sub>J rotor</sub> = g·P<sub>em</sub> = 0,04×6630 = <strong>265,2 W</strong></p>

      <p><strong>4. Puissance utile et rendement :</strong></p>
      <p>P<sub>méc produite</sub> = P<sub>em</sub>·(1-g) = 6630×0,96 = 6364,8 W</p>
      <p>P<sub>utile</sub> = P<sub>méc</sub> - P<sub>méc pertes</sub> = 6364,8 - 80 = <strong>6284,8 W ≈ 6,28 kW</strong></p>
      <p><strong>η = 6284,8/6830 = 0,920 = 92,0%</strong></p>
    `
  },
  {
    id: 'ee_ex_003',
    chapterId: 'EE_POW',
    year: 2023,
    source: 'BAC STI2D EE – 2023',
    title: 'Hacheur buck pour véhicule électrique',
    difficulty: 4,
    statement: `
      <p>Un hacheur série (buck) alimente un moteur DC depuis une batterie de 72 V.
      Le rapport cyclique est α = 0,625. La résistance d'induit du moteur est R<sub>a</sub> = 0,4 Ω et la FCEM vaut E = 40 V.</p>
    `,
    questions: [
      { num: 1, text: 'Calculer la tension de sortie U<sub>s</sub> du hacheur.', points: 2 },
      { num: 2, text: 'Calculer le courant d\'induit I<sub>a</sub>.', points: 3 },
      { num: 3, text: 'Calculer la puissance électromagnétique et la puissance absorbée.', points: 3 },
      { num: 4, text: 'Quel rapport cyclique permettrait de doubler le courant dans le moteur (même FCEM) ?', points: 5 },
    ],
    correction: `
      <p><strong>1. Tension de sortie :</strong></p>
      <p>U<sub>s</sub> = α·U<sub>e</sub> = 0,625 × 72 = <strong>45 V</strong></p>

      <p><strong>2. Courant d'induit :</strong></p>
      <p>U<sub>s</sub> = E + R<sub>a</sub>·I<sub>a</sub> → I<sub>a</sub> = (U<sub>s</sub>-E)/R<sub>a</sub> = (45-40)/0,4 = <strong>12,5 A</strong></p>

      <p><strong>3. Puissances :</strong></p>
      <p>P<sub>em</sub> = E·I<sub>a</sub> = 40 × 12,5 = <strong>500 W</strong></p>
      <p>P<sub>abs</sub> = U<sub>s</sub>·I<sub>a</sub> = 45 × 12,5 = <strong>562,5 W</strong></p>

      <p><strong>4. Pour I<sub>a</sub>' = 25 A :</strong></p>
      <p>U<sub>s</sub>' = E + R<sub>a</sub>·I<sub>a</sub>' = 40 + 0,4×25 = 50 V</p>
      <p>α' = U<sub>s</sub>'/U<sub>e</sub> = 50/72 = <strong>0,694</strong></p>
    `
  },
  {
    id: 'ee_ex_004',
    chapterId: 'EE_BILAN',
    year: 2022,
    source: 'BAC STI2D EE – 2022',
    title: 'Isolation thermique d\'un bâtiment',
    difficulty: 2,
    statement: `
      <p>Un mur de façade d'un bâtiment est composé de :</p>
      <ul>
        <li>Béton : épaisseur e<sub>1</sub> = 20 cm, λ<sub>1</sub> = 1,75 W/(m·K)</li>
        <li>Laine de verre : épaisseur e<sub>2</sub> = 10 cm, λ<sub>2</sub> = 0,035 W/(m·K)</li>
      </ul>
      <p>Surface totale du mur : S = 30 m². Température intérieure T<sub>int</sub> = 20°C, extérieure T<sub>ext</sub> = -5°C.</p>
    `,
    questions: [
      { num: 1, text: 'Calculer la résistance thermique de chaque couche, puis la résistance totale.', points: 4 },
      { num: 2, text: 'Calculer le flux thermique total traversant le mur.', points: 3 },
      { num: 3, text: 'Que se passerait-il si on doublait l\'épaisseur de laine de verre ? Calculer le nouveau flux.', points: 4 },
    ],
    correction: `
      <p><strong>1. Résistances thermiques :</strong></p>
      <p>R<sub>th1</sub> = e<sub>1</sub>/(λ<sub>1</sub>·S) = 0,20/(1,75×30) = 0,20/52,5 = <strong>3,81×10⁻³ K/W</strong></p>
      <p>R<sub>th2</sub> = e<sub>2</sub>/(λ<sub>2</sub>·S) = 0,10/(0,035×30) = 0,10/1,05 = <strong>95,24×10⁻³ K/W</strong></p>
      <p>R<sub>th,total</sub> = R<sub>th1</sub> + R<sub>th2</sub> = 3,81 + 95,24 = <strong>99,05×10⁻³ K/W ≈ 0,099 K/W</strong></p>

      <p><strong>2. Flux thermique :</strong></p>
      <p>ΔT = 20 - (-5) = 25 K</p>
      <p>Φ = ΔT/R<sub>th,total</sub> = 25/0,099 = <strong>252 W</strong></p>

      <p><strong>3. Avec e<sub>2</sub> = 20 cm :</strong></p>
      <p>R<sub>th2</sub>' = 0,20/(0,035×30) = 190,5×10⁻³ K/W</p>
      <p>R<sub>total</sub>' ≈ 194,3×10⁻³ K/W</p>
      <p>Φ' = 25/0,1943 ≈ <strong>129 W</strong> — soit presque deux fois moins de pertes !</p>
    `
  }
];
