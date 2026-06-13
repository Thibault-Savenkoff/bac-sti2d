const KATEX_CSS = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
const KATEX_JS  = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
const KATEX_AR  = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js';

const PRINT_CSS = `
  @page { size: A5 portrait; margin: 1.2cm; }

  * { box-sizing: border-box; }

  /* ── Couleurs par matière ─────────────────────────────────── */
  :root {
    --accent:       #3B82F6;
    --accent-light: #EFF6FF;
    --accent-mid:   #BFDBFE;
    --badge-text:   #1E3A8A;
  }
  .subject-ee {
    --accent:       #16A34A;
    --accent-light: #F0FDF4;
    --accent-mid:   #BBF7D0;
    --badge-text:   #14532D;
  }
  .subject-pc {
    --accent:       #9333EA;
    --accent-light: #FAF5FF;
    --accent-mid:   #E9D5FF;
    --badge-text:   #581C87;
  }
  .subject-maths {
    --accent:       #EA580C;
    --accent-light: #FFF7ED;
    --accent-mid:   #FED7AA;
    --badge-text:   #7C2D12;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 9pt;
    line-height: 1.5;
    color: #1A1A2E;
    background: #fff;
    margin: 0;
    padding: 0.5cm 0.8cm;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ── Barre d'outils (masquée à l'impression) ─────────────── */
  .toolbar {
    position: sticky;
    top: 0;
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin: -0.5cm -0.8cm 1.2rem;
    z-index: 10;
  }
  .toolbar button {
    padding: 0.35rem 0.9rem;
    border: 1.5px solid #CBD5E1;
    border-radius: 20px;
    background: #fff;
    cursor: pointer;
    font-size: 0.82rem;
    font-weight: 600;
    color: #374151;
  }
  .toolbar .btn-primary {
    background: #3B82F6;
    color: #fff;
    border-color: #3B82F6;
  }
  .toolbar .hint {
    font-size: 0.72rem;
    color: #94A3B8;
    flex: 1;
    min-width: 150px;
  }

  /* ── En-tête de chapitre ──────────────────────────────────── */
  .chapter-header {
    background: var(--accent-light);
    border-left: 4pt solid var(--accent);
    border-radius: 0 8px 8px 0;
    padding: 0.5rem 0.75rem 0.5rem 0.65rem;
    margin-bottom: 0.9rem;
  }
  .chapter-meta {
    display: inline-block;
    font-size: 6pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.13em;
    color: var(--badge-text);
    background: var(--accent-mid);
    border-radius: 20px;
    padding: 1pt 6pt;
    margin-bottom: 0.25rem;
  }
  .chapter-title {
    font-size: 14pt;
    font-weight: 800;
    margin: 0;
    color: #1A1A2E;
    line-height: 1.2;
  }

  /* ── Sections ─────────────────────────────────────────────── */
  .fiche-section {
    margin-bottom: 0.85rem;
    break-inside: avoid-page;
  }
  .fiche-section h2 {
    font-size: 7.5pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--badge-text);
    background: var(--accent-light);
    border-left: 3pt solid var(--accent);
    padding: 2.5pt 6pt;
    margin: 0.7rem 0 0.35rem;
    border-radius: 0 4px 4px 0;
  }

  /* ── Contenu ──────────────────────────────────────────────── */
  .fiche-section-content { font-size: 8.5pt; line-height: 1.45; }
  .fiche-section-content h3 {
    font-size: 8.5pt;
    font-weight: 700;
    margin: 0.45rem 0 0.15rem;
    color: var(--accent);
  }
  .fiche-section-content h4 {
    font-size: 8pt;
    font-weight: 600;
    margin: 0.3rem 0 0.1rem;
    color: #555;
  }
  .fiche-section-content p { margin: 0 0 0.25rem; }
  .fiche-section-content ul,
  .fiche-section-content ol {
    padding-left: 1.1rem;
    margin: 0.1rem 0 0.25rem;
  }
  .fiche-section-content li { margin-bottom: 0.1rem; }
  .fiche-section-content strong { font-weight: 700; }
  .fiche-section-content em { font-style: italic; }

  /* ── Formules ─────────────────────────────────────────────── */
  .formula-block {
    background: var(--accent-light);
    border: 0.5pt solid var(--accent-mid);
    border-left: 3pt solid var(--accent);
    border-radius: 0 5px 5px 0;
    padding: 0.35rem 0.6rem;
    margin: 0.35rem 0;
    font-size: 8pt;
    break-inside: avoid;
    overflow: visible;
  }

  /* ── Boîtes ───────────────────────────────────────────────── */
  .definition-box {
    background: #EFF6FF;
    border-left: 3pt solid #3B82F6;
    border-radius: 0 5px 5px 0;
    padding: 0.3rem 0.55rem;
    margin: 0.35rem 0;
    font-size: 8pt;
    break-inside: avoid;
  }
  .warning-box {
    background: #FFFBEB;
    border-left: 3pt solid #F59E0B;
    border-radius: 0 5px 5px 0;
    padding: 0.3rem 0.55rem;
    margin: 0.35rem 0;
    font-size: 8pt;
    break-inside: avoid;
  }
  .tip-box {
    background: #F0FDF4;
    border-left: 3pt solid #22C55E;
    border-radius: 0 5px 5px 0;
    padding: 0.3rem 0.55rem;
    margin: 0.35rem 0;
    font-size: 8pt;
    break-inside: avoid;
  }
  /* Désactive les ::before injectés par le CSS principal */
  .warning-box::before, .tip-box::before, .definition-box::before { content: none !important; }

  /* ── Tableaux ─────────────────────────────────────────────── */
  .fiche-section-content table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.5pt;
    margin: 0.35rem 0;
    break-inside: avoid;
  }
  .fiche-section-content th {
    background: var(--accent-mid);
    color: var(--badge-text);
    font-weight: 700;
    border: 0.5pt solid var(--accent-mid);
    padding: 0.25rem 0.4rem;
    text-align: left;
  }
  .fiche-section-content td {
    border: 0.5pt solid #E2E8F0;
    padding: 0.2rem 0.4rem;
    vertical-align: top;
  }
  .fiche-section-content tr:nth-child(even) td {
    background: var(--accent-light);
  }

  /* ── KaTeX ────────────────────────────────────────────────── */
  .katex { font-size: 1em; }
  .katex-display { margin: 0.25rem 0; overflow: visible; }

  /* ── Saut de page batch ───────────────────────────────────── */
  .page-break { break-before: page; }

  @media print {
    .toolbar { display: none !important; }
    body { padding: 0; }
  }
`;

function buildToolbar(isMobile) {
  const iosHint = `<span class="hint">iPhone : Imprimer → maintenir l'aperçu → Partager → « Enregistrer dans Fichiers »</span>`;
  const desktopHint = `<span class="hint">Dans le dialogue : choisir « Enregistrer en PDF »</span>`;
  return `
    <div class="toolbar">
      <button class="btn-primary" onclick="window.print()">⎙ Imprimer / Enregistrer en PDF</button>
      <button onclick="window.close()">✕ Fermer</button>
      ${isMobile ? iosHint : desktopHint}
    </div>`;
}

function buildChapterHtml(fiche, subject, isFirst) {
  const subjectClass = `subject-${subject.id.toLowerCase()}`;
  const sectionsHtml = fiche.sections.map(sec => `
    <div class="fiche-section">
      <h2>${sec.title}</h2>
      <div class="fiche-section-content">${sec.content}</div>
    </div>`).join('');

  return `
    <div class="${subjectClass}${isFirst ? '' : ' page-break'}">
      <div class="chapter-header">
        <div class="chapter-meta">${subject.shortLabel} — ${subject.label}</div>
        <h1 class="chapter-title">${fiche.title}</h1>
      </div>
      ${sectionsHtml}
    </div>`;
}

export function openPrintWindow(bodyHtml, title) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${title}</title>
  <link rel="stylesheet" href="${KATEX_CSS}">
  <script defer src="${KATEX_JS}"></script>
  <script defer src="${KATEX_AR}"
    onload="renderMathInElement(document.body,{delimiters:[
      {left:'$$',right:'$$',display:true},
      {left:'\\\\[',right:'\\\\]',display:true},
      {left:'$',right:'$',display:false},
      {left:'\\\\(',right:'\\\\)',display:false}
    ],throwOnError:false})"></script>
  <style>${PRINT_CSS}</style>
</head>
<body>
  ${buildToolbar(isMobile)}
  ${bodyHtml}
</body>
</html>`;

  const win = window.open('', '_blank');
  if (!win) {
    alert('Le navigateur a bloqué l\'ouverture d\'une nouvelle fenêtre. Autorise les pop-ups pour ce site.');
    return;
  }
  win.document.write(html);
  win.document.close();
}

export async function printFiche(chapterId, fiche, subject) {
  const body = buildChapterHtml(fiche, subject, true);
  openPrintWindow(body, `Fiche — ${fiche.title}`);
}

export async function printSubjectBatch(subject, fiches) {
  const body = fiches
    .map((fiche, i) => buildChapterHtml(fiche, subject, i === 0))
    .join('');
  openPrintWindow(body, `Fiches ${subject.label} — BAC STI2D`);
}
