export const FICHE = {
  chapterId: 'EE_STOCK',
  title: 'Stockage d\'énergie',
  sections: [
    {
      id: 'batteries',
      title: 'Batteries et accumulateurs',
      content: `
        <h3>Grandeurs caractéristiques</h3>
        <ul>
          <li><strong>Capacité C</strong> : charge électrique stockée (Ah)</li>
          <li><strong>Énergie E</strong> : \\(E = C \\cdot U_{nom}\\) (Wh)</li>
          <li><strong>Taux de décharge C-rate</strong> : courant de décharge en multiple de C (1C = décharge en 1h)</li>
          <li><strong>Densité d'énergie</strong> : Wh/kg (massique) ou Wh/L (volumique)</li>
          <li><strong>DOD (Depth of Discharge)</strong> : profondeur de décharge (en %)</li>
        </ul>

        <h3>Comparaison des technologies</h3>
        <table>
          <tr><th>Technologie</th><th>E densité (Wh/kg)</th><th>Cycles</th><th>Application</th></tr>
          <tr><td>Plomb-acide</td><td>30–50</td><td>300–500</td><td>Démarrage, UPS</td></tr>
          <tr><td>NiMH</td><td>60–120</td><td>500–1000</td><td>Hybrides (Prius)</td></tr>
          <tr><td>Li-ion (LFP)</td><td>120–180</td><td>2000–5000</td><td>VE, stockage réseau</td></tr>
          <tr><td>Li-ion (NMC)</td><td>150–250</td><td>500–1500</td><td>VE (Tesla)</td></tr>
          <tr><td>Li-ion (LiPo)</td><td>130–200</td><td>300–500</td><td>Drones, smartphones</td></tr>
        </table>

        <h3>Charge d'une batterie Li-ion (CC-CV)</h3>
        <ol>
          <li><strong>Phase CC (courant constant)</strong> : courant fixé, tension monte jusqu'à \\(U_{max}\\)</li>
          <li><strong>Phase CV (tension constante)</strong> : tension fixée à \\(U_{max}\\), courant diminue jusqu'à 0,05C</li>
        </ol>
        <div class="warning-box">Ne jamais dépasser la tension max ou décharger sous la tension min d'une Li-ion → risque d'incendie ou dégradation irréversible.</div>
      `
    },
    {
      id: 'supercap',
      title: 'Supercondensateurs',
      content: `
        <h3>Principe</h3>
        <p>Stockage électrostatique (double couche électrochimique), pas de réaction chimique.</p>
        <ul>
          <li><strong>Avantages</strong> : charge/décharge ultra-rapide (quelques secondes), très grand nombre de cycles (>1 million), forte puissance massique</li>
          <li><strong>Inconvénients</strong> : faible énergie massique (5–10 Wh/kg), autodécharge rapide</li>
        </ul>

        <h3>Énergie stockée</h3>
        <div class="formula-block">$$E = \\frac{1}{2} C U^2 \\quad [\\text{J ou Wh}]$$</div>

        <h3>Comparaison condensateur / supercondensateur / batterie</h3>
        <table>
          <tr><th></th><th>Condensateur</th><th>Supercap</th><th>Batterie</th></tr>
          <tr><td>Puissance massique</td><td>Très haute</td><td>Haute</td><td>Moyenne</td></tr>
          <tr><td>Énergie massique</td><td>Très faible</td><td>Faible</td><td>Haute</td></tr>
          <tr><td>Temps de charge</td><td>Microsecondes</td><td>Secondes</td><td>Minutes à heures</td></tr>
        </table>

        <div class="tip-box">En traction (métro, bus), les supercondensateurs récupèrent l'énergie de freinage (court délai) puis la restituent au démarrage.</div>
      `
    },
    {
      id: 'hydrogene',
      title: 'Stockage par hydrogène (PAC)',
      content: `
        <h3>Électrolyse de l'eau</h3>
        <div class="formula-block">$$2 H_2O \\xrightarrow{\\text{électrolyse}} 2 H_2 + O_2$$</div>
        <p>L'énergie électrique (ex : excédent d'ENR) est convertie en hydrogène gazeux (stockage chimique).</p>

        <h3>Pile à combustible (PAC)</h3>
        <div class="formula-block">$$H_2 + \\frac{1}{2} O_2 \\rightarrow H_2O + \\text{énergie électrique} + \\text{chaleur}$$</div>
        <ul>
          <li>Rendement PAC seule : 50–60%</li>
          <li>Rendement cycle complet (électrolyse + PAC) : 30–40%</li>
          <li>Émission : uniquement de l'eau</li>
        </ul>

        <div class="definition-box">L'hydrogène est un <strong>vecteur d'énergie</strong>, pas une source primaire. Son bilan carbone dépend de la source d'électricité utilisée pour l'électrolyse.</div>
      `
    }
  ]
};
