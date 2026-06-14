import { renderMath } from './utils.js';

const OVERLAY_CSS = `
  /* ── Overlay plein écran (sur écran) ─────────────────────── */
  #__po {
    position: fixed;
    inset: 0;
    z-index: 99999;
    overflow-y: auto;
    background: #E8EAF0;
  }
  .print-body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 9pt;
    line-height: 1.5;
    color: #1A1A2E;
    background: white;
    max-width: 14.8cm;
    margin: 0 auto;
    padding: 1.5cm 1.2cm 1.2cm;
    min-height: 100vh;
  }

  /* ── Barre d'outils ──────────────────────────────────────── */
  #__po .__ptb {
    position: sticky;
    top: 0;
    background: rgba(255,255,255,0.97);
    border-bottom: 1px solid #E2E8F0;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin: -1.5cm -1.2cm 1.2rem;
    z-index: 10;
  }
  #__po .__ptb button {
    padding: 0.35rem 0.9rem;
    border: 1.5px solid #CBD5E1;
    border-radius: 20px;
    background: #fff;
    cursor: pointer;
    font-size: 0.82rem;
    font-weight: 600;
    color: #374151;
  }
  #__po .__ptb .btn-primary {
    background: #3B82F6;
    color: #fff;
    border-color: #3B82F6;
  }
  #__po .__ptb .hint {
    font-size: 0.7rem;
    color: #64748B;
    flex: 1;
    min-width: 160px;
    line-height: 1.3;
  }
  #__po .__ptb .hint strong { color: #334155; }

  /* ── Couleurs par matière ─────────────────────────────────── */
  #__po { --accent: #3B82F6; --accent-light: #EFF6FF; --accent-mid: #BFDBFE; --badge-text: #1E3A8A; }
  #__po .subject-ee    { --accent: #16A34A; --accent-light: #F0FDF4; --accent-mid: #BBF7D0; --badge-text: #14532D; }
  #__po .subject-pc    { --accent: #9333EA; --accent-light: #FAF5FF; --accent-mid: #E9D5FF; --badge-text: #581C87; }
  #__po .subject-maths { --accent: #EA580C; --accent-light: #FFF7ED; --accent-mid: #FED7AA; --badge-text: #7C2D12; }

  /* ── En-tête de chapitre ──────────────────────────────────── */
  #__po .chapter-header {
    background: var(--accent-light);
    border-left: 4pt solid var(--accent);
    border-radius: 0 8px 8px 0;
    padding: 0.5rem 0.75rem 0.5rem 0.65rem;
    margin-bottom: 0.9rem;
  }
  #__po .chapter-meta {
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
  #__po .chapter-title {
    font-size: 14pt;
    font-weight: 800;
    margin: 0;
    color: #1A1A2E;
    line-height: 1.2;
  }

  /* ── Sections ─────────────────────────────────────────────── */
  #__po .fiche-section { margin-bottom: 0.85rem; break-inside: avoid-page; }
  #__po .fiche-section h2 {
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
  #__po .fiche-section-content { font-size: 8.5pt; line-height: 1.45; }
  #__po .fiche-section-content h3 { font-size: 8.5pt; font-weight: 700; margin: 0.45rem 0 0.15rem; color: var(--accent); }
  #__po .fiche-section-content h4 { font-size: 8pt; font-weight: 600; margin: 0.3rem 0 0.1rem; color: #555; }
  #__po .fiche-section-content p { margin: 0 0 0.25rem; }
  #__po .fiche-section-content ul,
  #__po .fiche-section-content ol { padding-left: 1.1rem; margin: 0.1rem 0 0.25rem; }
  #__po .fiche-section-content li { margin-bottom: 0.1rem; }
  #__po .fiche-section-content strong { font-weight: 700; }
  #__po .fiche-section-content em { font-style: italic; }

  /* ── Formules ─────────────────────────────────────────────── */
  #__po .formula-block {
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
  #__po .definition-box { background: #EFF6FF; border-left: 3pt solid #3B82F6; border-radius: 0 5px 5px 0; padding: 0.3rem 0.55rem; margin: 0.35rem 0; font-size: 8pt; break-inside: avoid; }
  #__po .warning-box    { background: #FFFBEB; border-left: 3pt solid #F59E0B; border-radius: 0 5px 5px 0; padding: 0.3rem 0.55rem; margin: 0.35rem 0; font-size: 8pt; break-inside: avoid; }
  #__po .tip-box        { background: #F0FDF4; border-left: 3pt solid #22C55E; border-radius: 0 5px 5px 0; padding: 0.3rem 0.55rem; margin: 0.35rem 0; font-size: 8pt; break-inside: avoid; }
  #__po .warning-box::before,
  #__po .tip-box::before,
  #__po .definition-box::before { content: none !important; }

  /* ── Tableaux ─────────────────────────────────────────────── */
  #__po .fiche-section-content table { width: 100%; border-collapse: collapse; font-size: 7.5pt; margin: 0.35rem 0; break-inside: avoid; }
  #__po .fiche-section-content th { background: var(--accent-mid); color: var(--badge-text); font-weight: 700; border: 0.5pt solid var(--accent-mid); padding: 0.25rem 0.4rem; text-align: left; }
  #__po .fiche-section-content td { border: 0.5pt solid #E2E8F0; padding: 0.2rem 0.4rem; vertical-align: top; }
  #__po .fiche-section-content tr:nth-child(even) td { background: var(--accent-light); }

  /* ── KaTeX ────────────────────────────────────────────────── */
  #__po .katex { font-size: 1em; }
  #__po .katex-display { margin: 0.25rem 0; overflow: visible; }

  /* ── Saut de page batch ───────────────────────────────────── */
  #__po .page-break { break-before: page; }

  /* ── Impression ───────────────────────────────────────────── */
  @media print {
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    @page { margin: 0; }
    body > *:not(#__po) { display: none !important; }
    #__po { position: static !important; background: white !important; overflow: visible !important; }
    .print-body { max-width: none !important; margin: 0 !important; padding: 1.2cm !important; background: white !important; min-height: 0 !important; }
    #__po .__ptb { display: none !important; }
  }
`;

function buildToolbarHtml(isMobile, isSafari) {
  let hint;
  if (isMobile) {
    hint = `<span class="hint">iPhone : Imprimer → maintenir l'aperçu → Partager → « Enregistrer dans Fichiers »</span>`;
  } else if (isSafari) {
    hint = `<span class="hint">Safari : <strong>cocher « Imprimer les fonds »</strong>, <strong>décocher « En-têtes et pieds de page »</strong>, choisir <strong>A5</strong>.</span>`;
  } else {
    hint = `<span class="hint">Choisir « Enregistrer en PDF » et format <strong>A5</strong>.</span>`;
  }
  return `
    <div class="__ptb">
      <button class="btn-primary" onclick="window.print()">⎙ Imprimer / PDF</button>
      <button onclick="document.getElementById('__po')?.remove();document.getElementById('__pcs')?.remove()">✕ Fermer</button>
      ${hint}
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
  const ua = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
  const isSafari = !isMobile && /^((?!chrome|android).)*safari/i.test(ua);

  // Supprimer l'overlay précédent si présent
  document.getElementById('__po')?.remove();
  document.getElementById('__pcs')?.remove();

  // Injecter le CSS dans le <head> de la page principale
  const styleEl = document.createElement('style');
  styleEl.id = '__pcs';
  styleEl.textContent = OVERLAY_CSS;
  document.head.appendChild(styleEl);

  // Créer et injecter l'overlay
  const overlay = document.createElement('div');
  overlay.id = '__po';
  overlay.innerHTML = `
    <div class="print-body">
      ${buildToolbarHtml(isMobile, isSafari)}
      ${bodyHtml}
    </div>`;
  document.body.appendChild(overlay);

  // Rendre les formules KaTeX (déjà chargé par la page principale)
  renderMath(overlay);

  // Vider le titre pendant l'impression pour supprimer l'en-tête Safari
  const savedTitle = document.title;
  const printBtn = overlay.querySelector('.btn-primary');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      document.title = '';
      requestAnimationFrame(() => {
        window.print();
        document.title = savedTitle;
      });
    }, { once: false });
    // Remplacer le onclick inline par rien (on gère via addEventListener)
    printBtn.removeAttribute('onclick');
  }

  // Nettoyage après impression
  window.addEventListener('afterprint', () => {
    document.title = savedTitle;
    overlay.remove();
    styleEl.remove();
  }, { once: true });
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
