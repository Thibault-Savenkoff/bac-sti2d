export const EXERCISES = [
  {
    id: 'ma_ex_001',
    chapterId: 'MA_ANA',
    year: 2023,
    source: 'BAC STI2D – 2023 (Maths)',
    title: 'Étude d\'une fonction et application à la charge d\'un condensateur',
    difficulty: 2,
    statement: `
      <p>On considère la fonction \\(f(t) = 10(1 - e^{-t/2})\\) définie sur \\([0; +\\infty[\\).</p>
    `,
    questions: [
      { num: 1, text: 'Calculer f(0) et la limite de f(t) quand t → +∞.', points: 2 },
      { num: 2, text: 'Calculer f\'(t) et étudier le signe de f\'(t).', points: 4 },
      { num: 3, text: 'Quelle est la valeur de f(2) ? Arrondir à 10⁻² près.', points: 2 },
      { num: 4, text: 'Tracer l\'allure de la courbe représentative de f.', points: 3 },
    ],
    correction: `
      <p><strong>1. Valeurs limites :</strong></p>
      <p>f(0) = 10(1 - e⁰) = 10(1-1) = <strong>0</strong></p>
      <p>lim f(t) quand t → +∞ : e<sup>-t/2</sup> → 0 donc f → <strong>10</strong></p>

      <p><strong>2. Dérivée :</strong></p>
      <p>f'(t) = 10 × (1/2) × e<sup>-t/2</sup> = <strong>5e<sup>-t/2</sup></strong></p>
      <p>Or e<sup>-t/2</sup> > 0 pour tout t donc f'(t) > 0 pour tout t : f est <strong>strictement croissante</strong> sur [0; +∞[.</p>

      <p><strong>3. Valeur en t = 2 :</strong></p>
      <p>f(2) = 10(1 - e<sup>-1</sup>) = 10(1 - 0,3679) = 10 × 0,6321 = <strong>6,32</strong></p>

      <p><strong>4. Tracé :</strong></p>
      <p>Courbe exponentielle croissante partant de (0, 0), tendant vers y = 10, concave (f'' < 0), avec tangente à l'origine de pente f'(0) = 5.</p>
    `
  },
  {
    id: 'ma_ex_002',
    chapterId: 'MA_PROB',
    year: 2022,
    source: 'BAC STI2D – 2022 (Maths)',
    title: 'Contrôle qualité en production — loi binomiale',
    difficulty: 3,
    statement: `
      <p>Une chaîne de production fabrique des panneaux solaires. Le taux de défauts est p = 0,05 (5%). On prélève un échantillon de n = 20 panneaux.</p>
      <p>X est la variable aléatoire "nombre de panneaux défectueux dans l\'échantillon". X suit B(20; 0,05).</p>
    `,
    questions: [
      { num: 1, text: 'Calculer E(X) et V(X). Interpréter E(X).', points: 4 },
      { num: 2, text: 'Calculer P(X = 0) : probabilité qu\'aucun panneau ne soit défectueux.', points: 3 },
      { num: 3, text: 'Calculer P(X ≥ 2) en utilisant P(X ≥ 2) = 1 - P(X=0) - P(X=1).', points: 5 },
    ],
    correction: `
      <p><strong>1. Espérance et variance :</strong></p>
      <p>E(X) = np = 20 × 0,05 = <strong>1</strong> panneau défectueux en moyenne</p>
      <p>V(X) = np(1-p) = 20 × 0,05 × 0,95 = <strong>0,95</strong></p>
      <p>Interprétation : sur 20 panneaux, on s'attend en moyenne à 1 défaut.</p>

      <p><strong>2. P(X = 0) :</strong></p>
      <p>P(X=0) = C(20,0) × 0,05⁰ × 0,95²⁰ = 1 × 1 × 0,95²⁰</p>
      <p>0,95²⁰ ≈ 0,358</p>
      <p>P(X=0) = <strong>0,358 = 35,8%</strong></p>

      <p><strong>3. P(X ≥ 2) :</strong></p>
      <p>P(X=1) = C(20,1) × 0,05¹ × 0,95¹⁹ = 20 × 0,05 × 0,95¹⁹</p>
      <p>0,95¹⁹ ≈ 0,377</p>
      <p>P(X=1) = 20 × 0,05 × 0,377 = <strong>0,377 = 37,7%</strong></p>
      <p>P(X ≥ 2) = 1 - 0,358 - 0,377 = <strong>0,265 = 26,5%</strong></p>
    `
  },
  {
    id: 'ma_ex_003',
    chapterId: 'MA_TRIG',
    year: 2023,
    source: 'BAC STI2D – 2023 (Maths)',
    title: 'Nombres complexes et circuit électrique',
    difficulty: 4,
    statement: `
      <p>Un circuit RLC série est alimenté par u(t) = 100√2·cos(100πt) V.</p>
      <p>R = 50 Ω, L = 0,2 H, C = 100 μF.</p>
      <p>On travaille en notation complexe : \\(\\underline{U} = 100\\angle 0°\\) V (valeur efficace).</p>
    `,
    questions: [
      { num: 1, text: 'Calculer ω, X_L = Lω et X_C = 1/(Cω).', points: 4 },
      { num: 2, text: 'Calculer l\'impédance complexe Z = R + j(X_L - X_C).', points: 3 },
      { num: 3, text: 'Calculer le module |Z| et l\'angle φ = arg(Z).', points: 4 },
      { num: 4, text: 'Calculer le courant efficace I = U/|Z| et la puissance active P.', points: 4 },
    ],
    correction: `
      <p><strong>1. Réactances :</strong></p>
      <p>ω = 100π ≈ 314 rad/s</p>
      <p>X<sub>L</sub> = Lω = 0,2 × 314 = <strong>62,8 Ω</strong></p>
      <p>X<sub>C</sub> = 1/(Cω) = 1/(100×10⁻⁶ × 314) = <strong>31,85 Ω</strong></p>

      <p><strong>2. Impédance complexe :</strong></p>
      <p>Z = 50 + j(62,8 - 31,85) = <strong>50 + j30,95 Ω</strong></p>

      <p><strong>3. Module et argument :</strong></p>
      <p>|Z| = √(50² + 30,95²) = √(2500 + 957,9) = √3457,9 ≈ <strong>58,8 Ω</strong></p>
      <p>φ = arctan(30,95/50) = arctan(0,619) ≈ <strong>31,8°</strong></p>

      <p><strong>4. Courant et puissance :</strong></p>
      <p>I = U/|Z| = 100/58,8 = <strong>1,70 A</strong></p>
      <p>cos φ = cos(31,8°) ≈ 0,85</p>
      <p>P = U × I × cos φ = 100 × 1,70 × 0,85 = <strong>144,5 W</strong></p>
    `
  }
];
