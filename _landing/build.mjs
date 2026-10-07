// dongne.dev 랜딩 생성기 — 로케일별 index.html 5개를 이 템플릿 하나에서 만든다.
// 실행: node _landing/build.mjs  (산출물: index.html, ko/, ja/, zh-Hant/, de/ 의 index.html)
// 컨셉: 도로명주소판. 히어로는 '동네길' 표지판, 각 제품은 그 길의 건물(건물번호판 + 제품 고유 팔레트).
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://dongne.dev';

const APP_STORE = 'https://apps.apple.com/app/final-whistle/id6763357952';
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=dev.dongne.finalwhistle';
const SEDIMENT = 'https://sediment.dongne.dev';
const EMAIL = 'sangwoo@dongne.dev';

const LOCALES = [
  { code: 'en', dir: '', name: 'English' },
  { code: 'ko', dir: 'ko', name: '한국어' },
  { code: 'ja', dir: 'ja', name: '日本語' },
  { code: 'zh-Hant', dir: 'zh-Hant', name: '繁體中文' },
  { code: 'de', dir: 'de', name: 'Deutsch' },
];

const T = {
  en: {
    title: 'Dongne — apps for the people you already know',
    description: 'Dongne is a software company in Korea building apps for friends, clubs and local groups. Makers of Final Whistle and Sediment.',
    contact: 'Contact',
    langLabel: 'Language',
    signLabel: 'Road sign: Dongne-gil, numbers 1 to 99',
    headline: 'Apps for the people you already know.',
    intro: 'Dongne is a software company in Yongin, Korea, founded in 2025. We build services for friends, clubs and local groups: people who already share a pitch, a league or a neighborhood.',
    productsTitle: 'Products',
    plateLabel: (n) => `Dongne-gil ${n}`,
    fwLine: 'Run a tournament from the first whistle to the final table.',
    fwBody: 'Brackets, leagues and clubs for sports and esports in one app. Draws are made automatically, results go in on one screen, and standings update straight away.',
    fwMore: 'About Final Whistle',
    fwPage: 'final-whistle/',
    sedLine: 'One small question a day.',
    sedBody: 'A journal that asks one question each day and lets the rest of the day pass. Low pressure, long memory.',
    sedOpen: 'Open Sediment',
    companyTitle: 'Company',
    rows: [
      ['Trade name', 'Dongne (동네)'],
      ['Representative', 'Sangwoo Cho (조상우)'],
      ['Founded', 'May 2025'],
      ['Business registration no.', '594-09-03558'],
      ['Mail-order business no.', '2026-Yongin Suji-1967'],
      ['Email', null],
    ],
    privacy: 'This site uses no cookies and no analytics.',
  },
  ko: {
    title: '동네 — 가까운 사람들이 함께 쓰는 앱',
    description: '동네는 친구, 동호회, 동네 모임을 위한 앱을 만드는 소프트웨어 회사입니다. Final Whistle과 Sediment를 만듭니다.',
    contact: '문의',
    langLabel: '언어',
    signLabel: '도로명판: 동네길, 1번부터 99번',
    headline: '가까운 사람들이 함께 쓰는 앱을 만듭니다.',
    intro: '동네는 2025년 경기도 용인에서 시작한 소프트웨어 회사입니다. 친구, 동호회, 동네 모임처럼 서로 얼굴을 아는 사람들을 위한 서비스를 만듭니다.',
    productsTitle: '서비스',
    plateLabel: (n) => `동네길 ${n}`,
    fwLine: '대회의 첫 휘슬부터 최종 순위까지.',
    fwBody: '스포츠와 e스포츠의 대회, 리그, 클럽 운영을 앱 하나로. 대진표는 자동으로 짜이고, 결과는 한 화면에서 입력하고, 순위는 바로 갱신됩니다.',
    fwMore: 'Final Whistle 자세히 보기',
    fwPage: 'final-whistle/ko/',
    sedLine: '하루에 작은 질문 하나.',
    sedBody: '하루에 작은 질문 하나만 묻고 나머지는 흘려보내는 일기. 부담은 적게, 기억은 오래.',
    sedOpen: 'Sediment 열기',
    companyTitle: '회사 정보',
    rows: [
      ['상호', '동네 (Dongne)'],
      ['대표', '조상우'],
      ['설립', '2025년 5월'],
      ['사업자등록번호', '594-09-03558'],
      ['통신판매업 신고번호', '제 2026-용인수지-1967 호'],
      ['이메일', null],
    ],
    privacy: '이 사이트는 쿠키와 분석 도구를 쓰지 않습니다.',
  },
  ja: {
    title: 'Dongne — 近くにいる人たちのアプリ',
    description: 'Dongne(동네)は、友人やクラブ、地域のグループのためのアプリをつくる韓国のソフトウェア会社です。Final Whistle と Sediment をつくっています。',
    contact: 'お問い合わせ',
    langLabel: '言語',
    signLabel: '道路名標識：トンネキル、1番から99番',
    headline: '近くにいる人たちが、いっしょに使うアプリをつくっています。',
    intro: 'Dongne(동네)は2025年に韓国・龍仁で始まったソフトウェア会社です。友人、クラブ、地域のグループなど、顔の見える人たちのためのサービスをつくっています。',
    productsTitle: 'サービス',
    plateLabel: (n) => `トンネキル ${n}`,
    fwLine: '大会の最初のホイッスルから最終順位まで。',
    fwBody: 'スポーツもeスポーツも、大会・リーグ・クラブの運営をひとつのアプリで。対戦表は自動で組まれ、結果はひと画面で入力、順位はその場で更新されます。',
    fwMore: 'Final Whistle について',
    fwPage: 'final-whistle/ja/',
    sedLine: '一日ひとつ、小さな問い。',
    sedBody: '一日に小さな問いをひとつだけ尋ねて、残りはそのまま流す日記。圧は軽く、記憶は長く。',
    sedOpen: 'Sediment を開く',
    companyTitle: '会社情報',
    rows: [
      ['商号', 'Dongne(동네)'],
      ['代表者', 'チョ・サンウ(조상우)'],
      ['設立', '2025年5月'],
      ['事業者登録番号', '594-09-03558'],
      ['通信販売業申告番号', '2026-龍仁水枝-1967'],
      ['メール', null],
    ],
    privacy: 'このサイトは Cookie も計測ツールも使っていません。',
  },
  'zh-Hant': {
    title: 'Dongne — 為身邊的人做的應用程式',
    description: 'Dongne（동네）是一間韓國軟體公司，為朋友、社團與在地團體打造應用程式。Final Whistle 與 Sediment 的開發者。',
    contact: '聯絡我們',
    langLabel: '語言',
    signLabel: '道路名牌：Dongne-gil，1 號至 99 號',
    headline: '為身邊的人，做大家一起用的應用程式。',
    intro: 'Dongne（동네）是 2025 年在韓國龍仁成立的軟體公司，為朋友、社團與在地團體這些彼此認識的人打造服務。',
    productsTitle: '產品',
    plateLabel: (n) => `Dongne-gil ${n} 號`,
    fwLine: '從開賽哨音到最終排名。',
    fwBody: '運動與電競的賽事、聯賽、俱樂部，一個應用程式全部處理。賽程表自動排定，結果在一個畫面輸入，名次即時更新。',
    fwMore: '了解 Final Whistle',
    fwPage: 'final-whistle/',
    sedLine: '一天一個小問題。',
    sedBody: '一天只問一個小小的問題，其餘的就讓它流過去。壓力輕一點，記憶長一點。',
    sedOpen: '開啟 Sediment',
    companyTitle: '公司資訊',
    rows: [
      ['商號', 'Dongne（동네）'],
      ['負責人', 'Sangwoo Cho（조상우）'],
      ['成立', '2025 年 5 月'],
      ['營業登記號碼', '594-09-03558'],
      ['通訊銷售業申報號碼', '2026-龍仁水枝-1967'],
      ['電子郵件', null],
    ],
    privacy: '本網站不使用 Cookie，也不做任何追蹤分析。',
  },
  de: {
    title: 'Dongne — Apps für die Menschen, die man schon kennt',
    description: 'Dongne ist ein Softwareunternehmen aus Südkorea und baut Apps für Freundeskreise, Vereine und lokale Gruppen. Macher von Final Whistle und Sediment.',
    contact: 'Kontakt',
    langLabel: 'Sprache',
    signLabel: 'Straßenschild: Dongne-gil, Hausnummern 1 bis 99',
    headline: 'Apps für die Menschen, die man schon kennt.',
    intro: 'Dongne (동네) ist ein Softwareunternehmen aus Yongin, Südkorea, gegründet 2025. Wir bauen Dienste für Freundeskreise, Vereine und lokale Gruppen.',
    productsTitle: 'Produkte',
    plateLabel: (n) => `Dongne-gil ${n}`,
    fwLine: 'Turniere organisieren, vom Anpfiff bis zur Abschlusstabelle.',
    fwBody: 'Turniere, Ligen und Vereine für Sport und E-Sport in einer App. Turnierbäume entstehen automatisch, Ergebnisse werden auf einem Bildschirm eingetragen, die Tabelle ist sofort aktuell.',
    fwMore: 'Mehr zu Final Whistle',
    fwPage: 'final-whistle/',
    sedLine: 'Eine kleine Frage am Tag.',
    sedBody: 'Ein Tagebuch, das jeden Tag eine kleine Frage stellt und den Rest vorüberziehen lässt. Wenig Druck, langes Gedächtnis.',
    sedOpen: 'Sediment öffnen',
    companyTitle: 'Unternehmen',
    rows: [
      ['Firma', 'Dongne (동네)'],
      ['Inhaber', 'Sangwoo Cho (조상우)'],
      ['Gegründet', 'Mai 2025'],
      ['Unternehmensnummer', '594-09-03558'],
      ['Versandhandels-Nr.', '2026-Yongin Suji-1967'],
      ['E-Mail', null],
    ],
    privacy: 'Diese Seite verwendet keine Cookies und keine Analyse-Tools.',
  },
};

// Final Whistle 마크 — final-whistle/docs/brand/mark.svg 지오메트리 그대로, 단색.
const FW_MARK = `<svg class="fw-mark" viewBox="0 0 64 64" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M7 24 H39 A17 17 0 1 1 23.1 35 H7 A3 3 0 0 1 4 32 V27 A3 3 0 0 1 7 24 Z M39 34 L45.7 38.8 L43.1 46.7 L34.9 46.7 L32.3 38.8 Z"/><path d="M38 17 L38 8 M46 19 L50 11 M53 24 L60 18" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/></svg>`;

const ARROW = `<svg class="sign__arrow" viewBox="0 0 48 24" aria-hidden="true"><path d="M2 12 H40 M30 3 L42 12 L30 21" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const plate = (t, n) => `<div class="plate" role="img" aria-label="${t.plateLabel(n)}"><span class="plate__road">동네길</span><span class="plate__no">${n}</span></div>`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 브라우저 언어로 첫 방문만 리다이렉트 — 사용자가 언어를 고르면 localStorage 로 고정.
const REDIRECT = `<script>
    (function () {
      try {
        if (localStorage.getItem('dongne-lang')) return;
        var l = (navigator.language || '').toLowerCase();
        if (l.indexOf('zh-tw') === 0 || l.indexOf('zh-hk') === 0 || l.indexOf('zh-hant') === 0 || l.indexOf('zh-mo') === 0) location.replace('zh-Hant/');
        else if (l.indexOf('ja') === 0) location.replace('ja/');
        else if (l.indexOf('ko') === 0) location.replace('ko/');
        else if (l.indexOf('de') === 0) location.replace('de/');
      } catch (e) {}
    })();
  </script>`;

function page(loc) {
  const t = T[loc.code];
  const up = loc.dir ? '../' : '';
  const url = (l) => `${ORIGIN}/${l.dir ? l.dir + '/' : ''}`;
  const alternates = LOCALES.map((l) => `  <link rel="alternate" hreflang="${l.code}" href="${url(l)}">`).join('\n');
  const langNav = LOCALES.map((l) =>
    l.code === loc.code
      ? `<a aria-current="page" lang="${l.code}">${l.name}</a>`
      : `<a href="${up}${l.dir ? l.dir + '/' : ''}" hreflang="${l.code}" lang="${l.code}" data-lang-switch="${l.code}">${l.name}</a>`
  ).join('\n          ');
  const rows = t.rows.map(([k, v]) =>
    `<div class="facts__row"><dt>${k}</dt><dd>${v === null ? `<a href="mailto:${EMAIL}">${EMAIL}</a>` : esc(v)}</dd></div>`
  ).join('\n          ');

  return `<!DOCTYPE html>
<html lang="${loc.code}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(t.title)}</title>
  <meta name="description" content="${esc(t.description)}">
  <link rel="canonical" href="${url(loc)}">
${alternates}
  <link rel="alternate" hreflang="x-default" href="${ORIGIN}/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Dongne">
  <meta property="og:title" content="${esc(t.title)}">
  <meta property="og:description" content="${esc(t.description)}">
  <meta property="og:url" content="${url(loc)}">
  <meta property="og:image" content="${ORIGIN}/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#1D3E78">
  <link rel="icon" href="${up}favicon.svg" type="image/svg+xml">
  ${loc.code === 'en' ? REDIRECT : ''}
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
  <link rel="stylesheet" href="${up}site.css">
</head>
<body>
  <header class="top wrap">
    <a class="wordmark" href="${up}${loc.dir ? loc.dir + '/' : ''}"><span lang="ko">동네</span> Dongne</a>
    <nav class="langs" aria-label="${t.langLabel}">
          ${langNav}
    </nav>
    <a class="top__contact" href="mailto:${EMAIL}">${t.contact}</a>
  </header>

  <main>
    <div class="wrap">
      <figure class="sign" role="img" aria-label="${t.signLabel}">
        <div class="sign__face">
          <span class="sign__from">1</span>
          <span class="sign__name"><span class="sign__ko" lang="ko">동네길</span><span class="sign__ro">Dongne-gil</span></span>
          <span class="sign__to">${ARROW}<span>99</span></span>
        </div>
        <div class="sign__posts" aria-hidden="true"><i></i><i></i></div>
      </figure>

      <section class="intro">
        <h1>${esc(t.headline)}</h1>
        <p>${esc(t.intro)}</p>
      </section>
    </div>

    <section class="street wrap" aria-labelledby="products-title">
      <h2 id="products-title">${t.productsTitle}</h2>
      <div class="lots">
        <article class="lot lot--fw">
          ${plate(t, 3)}
          ${FW_MARK}
          <h3>Final Whistle</h3>
          <p class="lot__line">${esc(t.fwLine)}</p>
          <p>${esc(t.fwBody)}</p>
          <div class="lot__actions">
            <a class="btn btn--go" href="${APP_STORE}">App Store</a>
            <a class="btn btn--line" href="${PLAY_STORE}">Google Play</a>
          </div>
          <a class="lot__more" href="${up}${t.fwPage}">${esc(t.fwMore)}</a>
        </article>

        <article class="lot lot--sed">
          ${plate(t, 8)}
          <span class="sed-mark" aria-hidden="true">S</span>
          <h3>Sediment</h3>
          <p class="lot__line">${esc(t.sedLine)}</p>
          <p>${esc(t.sedBody)}</p>
          <a class="lot__more" href="${SEDIMENT}">${esc(t.sedOpen)}</a>
          <div class="strata" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
        </article>
      </div>
    </section>

    <section class="company wrap" aria-labelledby="company-title">
      <h2 id="company-title">${t.companyTitle}</h2>
      <dl class="facts">
          ${rows}
      </dl>
    </section>
  </main>

  <footer class="foot wrap">
    <p>© 2026 Dongne</p>
    <p>${esc(t.privacy)}</p>
  </footer>

  <script>
    document.addEventListener('click', function (e) {
      var a = e.target.closest('[data-lang-switch]');
      if (!a) return;
      try { localStorage.setItem('dongne-lang', a.dataset.langSwitch); } catch (err) {}
    });
  </script>
</body>
</html>
`;
}

for (const loc of LOCALES) {
  const out = join(ROOT, loc.dir, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page(loc));
  console.log('wrote', out.replace(ROOT + '/', ''));
}
