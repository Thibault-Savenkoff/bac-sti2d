export const FICHE = {
  chapterId: 'PC_ELEC',
  title: 'Électricité (PC)',
  sections: [
    {
      id: 'bases',
      title: 'Bases de l\'électricité',
      content: `
        <h3>Loi d'Ohm</h3>
        <div class="formula-block">$$U = R \\cdot I$$</div>
        <p>Unités : Volt (V), Ohm (Ω), Ampère (A)</p>

        <h3>Effet Joule</h3>
        <div class="formula-block">$$P = U \\cdot I = R \\cdot I^2 = \\frac{U^2}{R} \\quad [\\text{W}]$$</div>
        <div class="formula-block">$$E = P \\cdot t \\quad [\\text{J ou kWh}]$$</div>
        <p>1 kWh = 3 600 000 J = 3,6 MJ</p>

        <h3>Associations de résistances</h3>
        <div class="formula-block">$$R_{série} = R_1 + R_2 + \\ldots$$
$$\\frac{1}{R_{parallèle}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\ldots$$</div>
      `
    },
    {
      id: 'condensateurs',
      title: 'Condensateurs et bobines',
      content: `
        <h3>Condensateur</h3>
        <div class="formula-block">$$Q = C \\cdot U \\quad ; \\quad E = \\frac{1}{2}CU^2$$</div>
        <p>Capacité : Farad (F). Unités pratiques : μF, nF, pF.</p>

        <h3>Bobine (inductance)</h3>
        <div class="formula-block">$$\\Phi = L \\cdot I \\quad ; \\quad E = \\frac{1}{2}LI^2$$</div>
        <p>Inductance : Henry (H).</p>

        <h3>En régime sinusoïdal</h3>
        <div class="formula-block">$$X_C = \\frac{1}{C\\omega} \\quad ; \\quad X_L = L\\omega$$</div>
      `
    },
    {
      id: 'circuits',
      title: 'Circuits électriques',
      content: `
        <h3>Diviseur de tension</h3>
        <div class="formula-block">$$U_R = E \\cdot \\frac{R}{R_1 + R_2}$$</div>

        <h3>Diviseur de courant</h3>
        <div class="formula-block">$$I_1 = I_{total} \\cdot \\frac{R_2}{R_1 + R_2}$$</div>

        <h3>Pont de Wheatstone (équilibré)</h3>
        <div class="formula-block">$$\\frac{R_1}{R_2} = \\frac{R_3}{R_4} \\Rightarrow U_{AB} = 0$$</div>
        <p>Utilisé pour mesurer précisément une résistance inconnue.</p>
      `
    }
  ]
};
