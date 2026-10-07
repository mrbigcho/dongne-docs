# dongne-docs

Public docs hub for Dongne projects — currently legal pages (Privacy / Terms) for **Final Whistle** and **Sediment**, served via GitHub Pages.

## Layout

```
dongne-docs/
├── index.html                    # landing — links to each project
├── final-whistle/
│   └── legal/                    # ko / en, hand-authored HTML
│       ├── _legal.css
│       ├── index.html
│       ├── ko/{privacy,terms}.html
│       └── en/{privacy,terms}.html
└── sediment/
    └── legal/                    # ko / en / ja, generated from sediment markdown
        ├── _legal.css
        ├── index.html
        ├── _build.js             # markdown → HTML 변환 스크립트
        ├── ko/{privacy,terms}.html
        ├── en/{privacy,terms}.html
        └── ja/{privacy,terms}.html
```

## Editing

### Final Whistle
HTML 직접 편집. `final-whistle/legal/{ko,en}/{privacy,terms}.html` 의 항목·문구 수정 후 commit.

### Sediment
원본은 [`~/Projects/sediment/docs/legal/*.md`](https://github.com/mrbigcho/sediment) — markdown 으로 관리.
편집 후 변환:

```bash
node sediment/legal/_build.js
```

`_build.js` 가:
1. 6개 markdown 을 읽어
2. `{{COMPANY_NAME}}` 등 자리표시자를 치환하고
3. `sediment/legal/<locale>/<type>.html` 로 출력합니다.

자리표시자 매핑은 `_build.js` 상단의 `SHARED` / `LOCALE_VARS` 객체에서 관리. 사업자 정보(주소·전화·등록번호)는 미정 상태라 `{{...}}` 그대로 노출됩니다 — 채워질 때까지 의도적으로 가시화.

## GitHub Pages

이 저장소는 GitHub Pages 로 서빙됩니다.

- 메인 페이지: `https://docs.dongne.dev/`
- Sediment 약관 (ko): `https://docs.dongne.dev/sediment/legal/ko/privacy.html`
- Final Whistle 약관 (ko): `https://docs.dongne.dev/final-whistle/legal/ko/privacy.html`

각 앱에서 약관 화면을 열 때 위 URL 로 외부 링크를 띄웁니다.

## Firebase Hosting (dongne.dev)

같은 내용을 회사 도메인 `https://dongne.dev/` 에도 띄웁니다. Firebase 프로젝트 `dongne-final-whistle` 의 `dongne-studio` 사이트 (Final Whistle 은 같은 프로젝트의 `dongne-final-whistle` 사이트 = `fw.dongne.dev`).
랜딩(`index.html` + `ko/ ja/ zh-Hant/ de/`)은 `_landing/build.mjs` 가 생성한다 — 직접 고치지 말고 스크립트의 문구·템플릿을 고친 뒤 `node _landing/build.mjs`. 스타일은 `site.css`, 대표 이미지 `og.png` 는 `rsvg-convert -w 1200 -h 630 _landing/og.svg -o og.png`.

GitHub Pages 는 push 로 자동 반영되지만 dongne.dev 는 수동 배포:

```bash
firebase deploy --only hosting:dongne-studio
```

## 변경 이력

- **2026-04-29** — 초기 버전. Final Whistle legal 이전 + Sediment legal (ko/en/ja) 생성.

## 연락처

sangwoo@dongne.dev
