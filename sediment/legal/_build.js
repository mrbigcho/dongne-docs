#!/usr/bin/env node
/**
 * Sediment legal builder.
 *
 * Source: ./_src/{privacy,terms,delete}.{ko,en,ja}.md
 * Target: ./{ko,en,ja}/{privacy,terms,delete}.html
 *
 * Run after editing the source markdown:
 *   node sediment/legal/_build.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const SRC = path.join(__dirname, '_src');
const OUT = __dirname;

// ─── 자리표시자 치환 ───
const SHARED = {
  SUPPORT_EMAIL:      'mrbigcho@gmail.com',
  LEGAL_EMAIL:        'mrbigcho@gmail.com',
  HOSTING_PROVIDER:   'GitHub Pages (GitHub, Inc.) · Firebase Hosting (Google LLC)',
  EFFECTIVE_DATE:     '2026-05-02',
  LAST_UPDATED:       '2026-05-02',
  COMPANY_ADDRESS:    '1205-701, 107, Manhyeon-ro, Suji-gu, Yongin-si, Gyeonggi-do, Republic of Korea',
  COMPANY_PHONE:      '+82-10-3445-4048',
  BUSINESS_REG_NUM:   '594-09-03558',
  ECOMMERCE_REG_NUM:  '제 2026-용인수지-1967 호',
};

const LOCALE_VARS = {
  ko: {
    COMPANY_NAME:   '동네',
    REPRESENTATIVE: '조상우',
    GOVERNING_LAW:  '대한민국',
    JURISDICTION:   '서울중앙지방법원',
  },
  en: {
    COMPANY_NAME:   'DongNe',
    REPRESENTATIVE: 'Sangwoo Cho',
    GOVERNING_LAW:  'Republic of Korea',
    JURISDICTION:   'Seoul Central District Court',
  },
  ja: {
    COMPANY_NAME:   'DongNe',
    REPRESENTATIVE: 'Sangwoo Cho',
    GOVERNING_LAW:  '大韓民国',
    JURISDICTION:   'ソウル中央地方法院',
  },
};

function substitute(text, locale) {
  const vars = { ...SHARED, ...LOCALE_VARS[locale] };
  return text.replace(/\{\{(\w+)\}\}/g, (_, k) => vars[k] ?? `{{${k}}}`);
}

// ─── 한 줄 인라인 마크업 ───
function inline(s) {
  // escape <, >, & first
  let out = s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  // [text](url) — 링크
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text, url) => {
    const safe = url.replace(/"/g, '&quot;');
    return `<a href="${safe}" target="_blank" rel="noopener">${text}</a>`;
  });
  // **bold**
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // *italic* — 이미 강조된 부분은 변형 안 함 (간단히 단일 * 만 처리)
  out = out.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  // `code`
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  return out;
}

// ─── 블록 단위 파싱 ───
function parse(md) {
  const lines = md.split('\n');
  const blocks = [];
  let i = 0;

  let h1 = null;
  let secCount = 0;
  let subCount = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') { i++; continue; }
    if (line.trim() === '---') { blocks.push({ kind: 'hr' }); i++; continue; }

    if (line.startsWith('# ')) {
      h1 = line.slice(2).trim();
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      secCount++;
      subCount = 0;
      blocks.push({ kind: 'h2', text: line.slice(3).trim(), id: `s${secCount}` });
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      subCount++;
      blocks.push({ kind: 'h3', text: line.slice(4).trim() });
      i++;
      continue;
    }
    if (line.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ kind: 'ul', items });
      continue;
    }
    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(lines[i]);
        i++;
      }
      blocks.push({ kind: 'table', rows });
      continue;
    }

    // 일반 paragraph
    const para = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !isBlockStart(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push({ kind: 'p', text: para.join(' ') });
  }
  return { h1, blocks };
}

function isBlockStart(line) {
  return (
    line.startsWith('# ') ||
    line.startsWith('## ') ||
    line.startsWith('### ') ||
    line.startsWith('- ') ||
    line.startsWith('|') ||
    line.trim() === '---'
  );
}

// ─── 표 — markdown 의 첫 행은 header, 두 번째 행은 separator (---) ───
function renderTable(rows) {
  const cells = rows.map((row) =>
    row
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((c) => c.trim())
  );
  if (cells.length === 0) return '';
  // separator row 감지 (---|---|--- 같은)
  const sepIdx = cells.findIndex((row) => row.every((c) => /^[-:]+$/.test(c)));
  const headerRow = sepIdx > 0 ? cells.slice(0, sepIdx) : [];
  const bodyRows  = sepIdx > 0 ? cells.slice(sepIdx + 1) : cells;

  const head = headerRow.length
    ? `<thead>${headerRow
        .map((row) => `<tr>${row.map((c) => `<th>${inline(c)}</th>`).join('')}</tr>`)
        .join('')}</thead>`
    : '';
  const body = `<tbody>${bodyRows
    .map((row) => `<tr>${row.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
    .join('')}</tbody>`;
  return `<table>${head}${body}</table>`;
}

function render(blocks) {
  const out = [];
  for (const b of blocks) {
    switch (b.kind) {
      case 'h2':
        out.push(`<h2 id="${b.id}">${inline(b.text)}</h2>`);
        break;
      case 'h3':
        out.push(`<h3>${inline(b.text)}</h3>`);
        break;
      case 'p':
        out.push(`<p>${inline(b.text)}</p>`);
        break;
      case 'ul':
        out.push(`<ul>${b.items.map((it) => `<li>${inline(it)}</li>`).join('')}</ul>`);
        break;
      case 'table':
        out.push(renderTable(b.rows));
        break;
      case 'hr':
        // ignore — markdown 의 --- 는 의미 없는 시각적 구분선
        break;
    }
  }
  return out.join('\n    ');
}

// ─── locale-aware UI 라벨 ───
const LABEL = {
  ko: {
    privacyTitle: '개인정보처리방침',
    termsTitle:   '이용약관',
    deleteTitle:  '계정 삭제',
    brand:        'Sediment',
    effectivePrefix: '시행일자: ',
    draftStrong:  '초안 안내',
    draftBody:    '본 문서는 작업 중인 초안이며, 법률 전문가의 검토를 받지 않았습니다. 실제 서비스에 적용하기 전 법무 검토를 받을 것을 강하게 권장합니다.',
    footnote:     '© 2026 Dongne · <a href="../../index.html">법적 고지 목차</a>',
    langLabels:   { ko: '한국어', en: 'English', ja: '日本語' },
  },
  en: {
    privacyTitle: 'Privacy Policy',
    termsTitle:   'Terms of Service',
    deleteTitle:  'Account Deletion',
    brand:        'Sediment',
    effectivePrefix: 'Effective date: ',
    draftStrong:  'Draft notice',
    draftBody:    'This document is a working draft and has not been reviewed by legal counsel. Operators should obtain professional review before relying on it for compliance.',
    footnote:     '© 2026 Dongne · <a href="../../index.html">Legal index</a>',
    langLabels:   { ko: '한국어', en: 'English', ja: '日本語' },
  },
  ja: {
    privacyTitle: 'プライバシーポリシー',
    termsTitle:   '利用規約',
    deleteTitle:  'アカウント削除',
    brand:        'Sediment',
    effectivePrefix: '施行日: ',
    draftStrong:  '草案のお知らせ',
    draftBody:    '本書は作成中の草案であり、法律専門家の確認を受けていません。実際のサービスに適用する前に法務確認を受けることを強く推奨します。',
    footnote:     '© 2026 Dongne · <a href="../../index.html">法的告知一覧</a>',
    langLabels:   { ko: '한국어', en: 'English', ja: '日本語' },
  },
};

function langSwitch(currentLocale, type) {
  const order = ['ko', 'en', 'ja'];
  const labels = LABEL[currentLocale].langLabels;
  return order
    .map((lc) =>
      lc === currentLocale
        ? `<strong>${labels[lc]}</strong>`
        : `<a href="../${lc}/${type}.html">${labels[lc]}</a>`
    )
    .join(' · ');
}

function effectiveLabel(locale) {
  switch (locale) {
    case 'ko': return `${LABEL.ko.effectivePrefix}${SHARED.EFFECTIVE_DATE}`;
    case 'ja': return `${LABEL.ja.effectivePrefix}${SHARED.EFFECTIVE_DATE}`;
    default:   return `${LABEL.en.effectivePrefix}April 29, 2026`;
  }
}

function titleFor(type, L) {
  switch (type) {
    case 'privacy': return L.privacyTitle;
    case 'terms':   return L.termsTitle;
    case 'delete':  return L.deleteTitle;
  }
}

// 푸터에 보여줄 다른 두 문서로의 링크
function crossLinks(type, L) {
  const all = [
    { type: 'privacy', label: L.privacyTitle },
    { type: 'terms',   label: L.termsTitle },
    { type: 'delete',  label: L.deleteTitle },
  ];
  return all
    .filter((x) => x.type !== type)
    .map((x) => `<a href="${x.type}.html">${x.label}</a>`)
    .join(' · ');
}

function buildPage({ type, locale, h1, body }) {
  const L = LABEL[locale];
  const title = titleFor(type, L);
  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Sediment</title>
  <link rel="stylesheet" href="../_legal.css">
</head>
<body>
  <div class="container">
    <header class="page-head">
      <p class="brand">${L.brand}</p>
      <h1>${title}</h1>
      <p class="meta">${effectiveLabel(locale)}</p>
      <p class="lang-switch">${langSwitch(locale, type)}</p>
    </header>

    <div class="notice">
      <strong>${L.draftStrong}</strong>
      ${L.draftBody}
    </div>

    ${body}

    <footer class="page-foot">
      <p>${L.footnote} · ${crossLinks(type, L)}</p>
    </footer>
  </div>
</body>
</html>
`;
}

// ─── 빌드 ───
const TYPES = ['privacy', 'terms', 'delete'];
const LOCALES = ['ko', 'en', 'ja'];

let count = 0;
for (const locale of LOCALES) {
  fs.mkdirSync(path.join(OUT, locale), { recursive: true });
  for (const type of TYPES) {
    const srcFile = path.join(SRC, `${type}.${locale}.md`);
    const md = substitute(fs.readFileSync(srcFile, 'utf8'), locale);
    const { h1, blocks } = parse(md);
    const body = render(blocks);
    const html = buildPage({ type, locale, h1, body });
    const outFile = path.join(OUT, locale, `${type}.html`);
    fs.writeFileSync(outFile, html);
    count++;
  }
}

console.log(`✓ Built ${count} HTML pages → ${path.relative(os.homedir(), OUT)}`);
