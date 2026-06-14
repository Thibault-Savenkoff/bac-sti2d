function buildChapterHtml(fiche, subject, isFirst) {
  const cls = `subject-${subject.id.toLowerCase()}${isFirst ? '' : ' page-break'}`;
  const sections = fiche.sections.map(sec => `
    <div class="fiche-section">
      <h2>${sec.title}</h2>
      <div class="fiche-section-content">${sec.content}</div>
    </div>`).join('');

  return `
    <div class="${cls}">
      <div class="chapter-header">
        <div class="chapter-meta">${subject.shortLabel} — ${subject.label}</div>
        <h1 class="chapter-title">${fiche.title}</h1>
      </div>
      ${sections}
    </div>`;
}

function openPrint(html, title) {
  const key = '__p' + Date.now();
  localStorage.setItem(key, JSON.stringify({ html, title }));

  const printUrl = new URL('print.html', location.href);
  printUrl.hash = key;
  const win = window.open(printUrl.toString(), '_blank');

  if (!win) {
    localStorage.removeItem(key);
    alert('Le navigateur a bloqué l\'ouverture. Autorise les pop-ups pour ce site.');
  }
}

export async function printFiche(chapterId, fiche, subject) {
  openPrint(buildChapterHtml(fiche, subject, true), `Fiche — ${fiche.title}`);
}

export async function printSubjectBatch(subject, fiches) {
  const html = fiches.map((f, i) => buildChapterHtml(f, subject, i === 0)).join('');
  openPrint(html, `Fiches ${subject.label} — BAC STI2D`);
}
