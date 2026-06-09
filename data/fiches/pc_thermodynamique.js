export const FICHE = {
  chapterId: 'PC_THERMO',
  title: 'Thermodynamique',
  sections: [
    {
      id: 'gaz',
      title: 'Gaz parfaits',
      content: `
        <h3>Loi des gaz parfaits</h3>
        <div class="formula-block">$$PV = nRT$$</div>
        <p>\\(P\\) = pression (Pa), \\(V\\) = volume (m³), \\(n\\) = quantité de matière (mol), \\(R = 8{,}314\\) J/(mol·K), \\(T\\) = température (K)</p>

        <h3>Conversions clés</h3>
        <ul>
          <li>\\(T(K) = T(°C) + 273{,}15\\)</li>
          <li>1 atm = 101 325 Pa ≈ 1 bar = 10⁵ Pa</li>
        </ul>

        <h3>Transformations</h3>
        <table>
          <tr><th>Transformation</th><th>Condition</th><th>Loi</th></tr>
          <tr><td>Isotherme</td><td>T = cste</td><td>\\(PV = \\text{cste}\\)</td></tr>
          <tr><td>Isobare</td><td>P = cste</td><td>\\(V/T = \\text{cste}\\)</td></tr>
          <tr><td>Isochore</td><td>V = cste</td><td>\\(P/T = \\text{cste}\\)</td></tr>
          <tr><td>Adiabatique</td><td>Q = 0</td><td>\\(PV^\\gamma = \\text{cste}\\)</td></tr>
        </table>
      `
    },
    {
      id: 'echanges',
      title: 'Échanges thermiques',
      content: `
        <h3>Chaleur massique</h3>
        <div class="formula-block">$$Q = m \\cdot c \\cdot \\Delta T$$</div>
        <p>\\(c\\) = capacité thermique massique (J/(kg·K)). Eau : \\(c = 4185\\) J/(kg·K)</p>

        <h3>Chaleur latente (changement d'état)</h3>
        <div class="formula-block">$$Q = m \\cdot L$$</div>
        <p>\\(L\\) = chaleur latente (J/kg). Eau : \\(L_{fusion} = 334\\) kJ/kg, \\(L_{vaporisation} = 2{,}26\\) MJ/kg</p>

        <h3>Bilan thermique</h3>
        <p>Si deux corps échangent de la chaleur (système isolé) :</p>
        <div class="formula-block">$$Q_{perdu} + Q_{reçu} = 0 \\Rightarrow m_1 c_1 \\Delta T_1 + m_2 c_2 \\Delta T_2 = 0$$</div>
        <div class="tip-box">Attention aux signes : \\(\\Delta T = T_{finale} - T_{initiale}\\)</div>
      `
    },
    {
      id: 'thermo-lois',
      title: 'Principes de la thermodynamique',
      content: `
        <h3>1er principe (conservation de l'énergie)</h3>
        <div class="formula-block">$$\\Delta U = W + Q$$</div>
        <p>\\(\\Delta U\\) = variation d'énergie interne, \\(W\\) = travail reçu, \\(Q\\) = chaleur reçue</p>

        <h3>2e principe (entropie)</h3>
        <p>La chaleur ne peut pas spontanément passer d'un corps froid vers un corps chaud.</p>
        <p>Efficacité maximale d'une machine thermique (rendement de Carnot) :</p>
        <div class="formula-block">$$\\eta_{Carnot} = 1 - \\frac{T_{froide}}{T_{chaude}} \\quad (T \\text{ en Kelvin})$$</div>

        <div class="definition-box">Un moteur thermique réel a toujours \\(\\eta < \\eta_{Carnot}\\). Le rendement de Carnot est une limite théorique inatteignable.</div>
      `
    }
  ]
};
