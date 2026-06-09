export const FICHE = {
  chapterId: 'EE_POW',
  title: 'Électronique de puissance',
  sections: [
    {
      id: 'redresseurs',
      title: 'Redresseurs',
      content: `
        <h3>Redresseur monoalternance (mono-phasé, 1 diode)</h3>
        <p>Ne laisse passer qu'une alternance. Tension de sortie moyenne :</p>
        <div class="formula-block">$$U_{moy} = \\frac{U_{max}}{\\pi} \\approx 0{,}318 \\cdot U_{max}$$</div>

        <h3>Redresseur double alternance en pont (pont de Graëtz, 4 diodes)</h3>
        <div class="formula-block">$$U_{moy} = \\frac{2 U_{max}}{\\pi} \\approx 0{,}637 \\cdot U_{max}$$</div>
        <p>Ondulation à \\(2f\\). Avec filtre condensateur : \\(U_{sortie} \\approx U_{max}\\).</p>

        <h3>Redresseur triphasé en pont (6 diodes)</h3>
        <div class="formula-block">$$U_{moy} = \\frac{3\\sqrt{3}}{\\pi} \\cdot U_{ph,max} \\approx 1{,}654 \\cdot U_{ph,max}$$</div>
        <p>Ondulation très faible (6 créneaux par période). Utilisé en forte puissance.</p>

        <div class="tip-box">Relation tension de phase / tension de ligne : \\(U_{ligne} = \\sqrt{3} \\cdot U_{phase}\\)</div>
      `
    },
    {
      id: 'hacheurs',
      title: 'Hacheurs DC-DC',
      content: `
        <h3>Hacheur abaisseur (Buck / série)</h3>
        <p>Convertit une tension DC haute en tension DC basse.</p>
        <div class="formula-block">$$U_s = \\alpha \\cdot U_e \\quad \\text{avec } 0 \\leq \\alpha \\leq 1$$</div>
        <p>\\(\\alpha = t_{ON}/T\\) = rapport cyclique (duty cycle), \\(T\\) = période de commutation</p>

        <h3>Hacheur élévateur (Boost / parallèle)</h3>
        <div class="formula-block">$$U_s = \\frac{U_e}{1 - \\alpha}$$</div>

        <h3>Hacheur buck-boost (inverseur)</h3>
        <div class="formula-block">$$U_s = -\\frac{\\alpha}{1-\\alpha} \\cdot U_e \\quad (\\text{tension inversée})$$</div>

        <h3>Interrupteurs utilisés</h3>
        <ul>
          <li><strong>IGBT</strong> : fort courant, ≤ 10 kHz — onduleurs de forte puissance</li>
          <li><strong>MOSFET</strong> : faible courant, haute fréquence — alimentations commutées</li>
          <li><strong>Thyristor / SCR</strong> : fort courant, commandé à l'amorçage seulement</li>
        </ul>
        <div class="warning-box">Un hacheur idéal ne dissipe pas d'énergie (commutation) → η proche de 95–99%.</div>
      `
    },
    {
      id: 'onduleurs',
      title: 'Onduleurs (DC → AC)',
      content: `
        <h3>Principe</h3>
        <p>Un onduleur convertit une tension continue en tension alternative, via des interrupteurs commandés (IGBT/MOSFET).</p>

        <h3>Onduleur monophasé en pont H</h3>
        <p>4 interrupteurs commandés par PWM (Pulse Width Modulation).</p>
        <p>Tension de sortie fondamental : \\(U_{s,1} = \\dfrac{4}{\\pi} \\cdot \\dfrac{U_{DC}}{2} \\cdot \\sin(\\omega t)\\)</p>

        <h3>Onduleur triphasé (6 interrupteurs)</h3>
        <p>Génère une tension triphasée sinusoïdale. Utilisé dans les variateurs de vitesse pour moteurs asynchrones.</p>
        <div class="formula-block">$$f_{sortie} = \\text{réglable} \\quad ; \\quad \\frac{U}{f} = \\text{cste (loi V/f)}$$</div>

        <h3>Modulation PWM</h3>
        <p>La valeur efficace de la tension fondamentale est proportionnelle à l'indice de modulation \\(m\\) :</p>
        <div class="formula-block">$$U_{s,eff} = m \\cdot \\frac{U_{DC}}{\\sqrt{2}} \\quad (0 \\leq m \\leq 1)$$</div>
      `
    },
    {
      id: 'acac',
      title: 'Convertisseurs AC-AC',
      content: `
        <h3>Gradateur de tension (variateur de phase)</h3>
        <p>Deux thyristors tête-bêche, commutent à un angle de retard \\(\\alpha\\) après le passage à zéro :</p>
        <div class="formula-block">$$U_{eff} = U_{source} \\cdot \\sqrt{\\frac{1}{2}\\left(1 - \\frac{\\alpha}{\\pi} + \\frac{\\sin 2\\alpha}{2\\pi}\\right)}$$</div>
        <p>Application : variation de puissance de chauffage, éclairage à incandescence.</p>

        <h3>Cycloconvertisseur</h3>
        <p>Convertit directement l'AC d'une fréquence en AC d'une fréquence inférieure. Utilisé pour traction ferroviaire.</p>
      `
    }
  ]
};
