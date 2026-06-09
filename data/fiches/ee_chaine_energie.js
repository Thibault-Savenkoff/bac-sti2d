export const FICHE = {
  chapterId: 'EE_CHAIN',
  title: 'Chaîne d\'énergie',
  sections: [
    {
      id: 'structure',
      title: 'Structure de la chaîne d\'énergie',
      content: `
        <p>La chaîne d'énergie décrit le trajet de l'énergie depuis sa source jusqu'à son utilisation finale :</p>
        <div class="formula-block">ALIMENTER → DISTRIBUER → CONVERTIR → TRANSMETTRE → AGIR</div>

        <h3>Fonctions</h3>
        <table>
          <tr><th>Fonction</th><th>Rôle</th><th>Exemples</th></tr>
          <tr><td>Alimenter</td><td>Fournir l'énergie</td><td>Réseau EDF, batterie, panneau PV, éolienne</td></tr>
          <tr><td>Distribuer</td><td>Commander l'énergie</td><td>Contacteur, interrupteur, variateur, IGBT</td></tr>
          <tr><td>Convertir</td><td>Changer la forme de l'énergie</td><td>Moteur (E→M), résistance (E→T), groupe électrogène</td></tr>
          <tr><td>Transmettre</td><td>Adapter et transporter</td><td>Réducteur, engrenage, courroie, câble, tuyau</td></tr>
          <tr><td>Agir</td><td>Produire l'effet utile</td><td>Roue, bras robotisé, pompe, résistance chauffante</td></tr>
        </table>

        <div class="tip-box">Astuce BAC : lire le diagramme IBD (SysML) et associer chaque bloc à une fonction de la chaîne.</div>
      `
    },
    {
      id: 'chaine-info',
      title: 'Chaîne d\'information',
      content: `
        <div class="formula-block">ACQUÉRIR → TRAITER → COMMUNIQUER → AGIR</div>

        <h3>Capteurs courants en EE</h3>
        <table>
          <tr><th>Grandeur mesurée</th><th>Capteur</th><th>Signal de sortie</th></tr>
          <tr><td>Courant</td><td>Tore de Rogowski, shunt, capteur Hall</td><td>Tension analogique ou numérique</td></tr>
          <tr><td>Tension</td><td>Diviseur de tension, transformateur de tension</td><td>Tension analogique</td></tr>
          <tr><td>Vitesse rotation</td><td>Codeur incrémental, résolveur</td><td>Impulsions, signal sinus/cosinus</td></tr>
          <tr><td>Température</td><td>Thermocouple, Pt100, CTN</td><td>Tension, résistance</td></tr>
          <tr><td>Puissance</td><td>Wattmètre, analyseur de puissance</td><td>Valeur numérique</td></tr>
        </table>

        <h3>Systèmes de traitement</h3>
        <ul>
          <li><strong>Microcontrôleur</strong> (Arduino, STM32) : pilotage simple, temps réel</li>
          <li><strong>API (Automate Programmable Industriel)</strong> : environnements industriels</li>
          <li><strong>DSP</strong> : traitement signal rapide (régulation de variateur)</li>
          <li><strong>FPGA</strong> : parallélisme, ultra-rapide</li>
        </ul>
      `
    },
    {
      id: 'rendement',
      title: 'Rendement et bilan de puissance',
      content: `
        <h3>Rendement global</h3>
        <div class="formula-block">$$\\eta = \\frac{P_{utile}}{P_{absorbée}} = \\prod_{i} \\eta_i$$</div>
        <p>Le rendement global est le produit des rendements de chaque étape.</p>

        <h3>Bilan de puissance</h3>
        <div class="formula-block">$$P_{absorbée} = P_{utile} + P_{pertes}$$
$$P_{pertes} = P_{Joule} + P_{fer} + P_{méc} + \\ldots$$</div>

        <h3>Exemple : chaîne de traction électrique</h3>
        <table>
          <tr><th>Étape</th><th>η typique</th></tr>
          <tr><td>Batterie → Onduleur</td><td>97%</td></tr>
          <tr><td>Onduleur → Moteur</td><td>95%</td></tr>
          <tr><td>Moteur → Réducteur</td><td>97%</td></tr>
          <tr><td>Réducteur → Roue</td><td>98%</td></tr>
          <tr><td><strong>Global</strong></td><td><strong>≈ 87%</strong></td></tr>
        </table>

        <div class="definition-box">Un rendement élevé signifie moins de pertes, moins de chaleur à dissiper, et une autonomie plus grande (véhicule électrique).</div>
      `
    }
  ]
};
