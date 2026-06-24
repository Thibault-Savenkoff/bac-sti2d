export function renderGrandOral() {
  const root = document.getElementById('app-root');
  root.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Grand Oral</h1>
      <p class="page-subtitle">Fiches de révision interactives</p>
    </div>
    <div class="cards-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;padding:0 16px 32px">
      <a href="fiches_electricite.html" class="card card-link" style="text-decoration:none;display:block;padding:20px;border-radius:16px;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.08);border:1px solid #E5E4E0;">
        <div style="font-size:28px;margin-bottom:10px;">⚡</div>
        <div style="font-size:16px;font-weight:700;color:#0C447C;margin-bottom:4px;">Répartition de l'électricité</div>
        <div style="font-size:13px;color:#666;line-height:1.4;">Production · Transport · Répartition technique<br>6 fiches + Q&A jury</div>
      </a>
      <a href="fiches_grand_oral.html" class="card card-link" style="text-decoration:none;display:block;padding:20px;border-radius:16px;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.08);border:1px solid #E5E4E0;">
        <div style="font-size:28px;margin-bottom:10px;">🤖</div>
        <div style="font-size:16px;font-weight:700;color:#085041;margin-bottom:4px;">Impact de l'IA</div>
        <div style="font-size:13px;color:#666;line-height:1.4;">Environnement · Énergie · Économie<br>6 fiches + Q&A jury</div>
      </a>
      <a href="fiches_synthese.html" class="card card-link" style="text-decoration:none;display:block;padding:20px;border-radius:16px;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.08);border:1px solid #E5E4E0;">
        <div style="font-size:28px;margin-bottom:10px;">📋</div>
        <div style="font-size:16px;font-weight:700;color:#534AB7;margin-bottom:4px;">Synthèse rapide</div>
        <div style="font-size:13px;color:#666;line-height:1.4;">Les deux sujets · Chiffres clés · Plans<br>Vue condensée</div>
      </a>
      <a href="fiches_conducteur.html" class="card card-link" style="text-decoration:none;display:block;padding:20px;border-radius:16px;background:white;box-shadow:0 1px 3px rgba(0,0,0,0.08);border:1px solid #E5E4E0;">
        <div style="font-size:28px;margin-bottom:10px;">🎤</div>
        <div style="font-size:16px;font-weight:700;color:#1D9E75;margin-bottom:4px;">Conducteur d'oral</div>
        <div style="font-size:13px;color:#666;line-height:1.4;">Script de passage · Timing · Transitions<br>Les deux sujets</div>
      </a>
    </div>
  `;
}
