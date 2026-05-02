# Sediment 약관·개인정보처리방침 템플릿

> ko / en / ja 3개 언어 × Privacy / Terms 2개 = 6 파일.
> **변호사 검토 없이 그대로 출시하지 마세요.** 이 템플릿은 Sediment 의 실제 데이터 흐름·결제 구조·서비스 정의에 맞춰 작성됐지만, 한국·일본·EU·미국 각 관할의 법률 상세를 반영하려면 현지 변호사 검토가 권장됩니다.

---

## 자리표시자 (Find & Replace)

모든 파일에서 아래 키를 본인 정보로 치환:

| 자리표시자 | 의미 | 예시 |
|---|---|---|
| `{{COMPANY_NAME}}` | 법인 / 개인사업자명 | "동네" / "Dongne LLC" |
| `{{REPRESENTATIVE}}` | 대표자 / 운영자 성명 | "조상우" |
| `{{COMPANY_ADDRESS}}` | 사업장 주소 (KR/JP 표시 의무) | "서울특별시 ..." |
| `{{COMPANY_PHONE}}` | 연락처 전화번호 | "+82-10-..." |
| `{{SUPPORT_EMAIL}}` | 일반 문의 이메일 | `support@sediment.app` |
| `{{LEGAL_EMAIL}}` | 개인정보·법률 문의 이메일 | `legal@sediment.app` |
| `{{BUSINESS_REG_NUM}}` | 사업자등록번호 (KR 필수) | "123-45-67890" |
| `{{ECOMMERCE_REG_NUM}}` | 통신판매업 신고번호 (KR 필수) | "제 2026-서울-..." |
| `{{HOSTING_PROVIDER}}` | 호스팅 제공자 | "Firebase Hosting (Google LLC)" |
| `{{EFFECTIVE_DATE}}` | 시행일자 | "2026-05-01" |
| `{{LAST_UPDATED}}` | 최종 수정일 | "2026-04-29" |
| `{{GOVERNING_LAW}}` | 준거법 | "대한민국" / "Japan" |
| `{{JURISDICTION}}` | 관할 법원 | "서울중앙지방법원" |

`grep -r "{{" docs/legal/` 으로 미치환 자리표시자 일괄 점검 가능.

---

## 호스팅

추천: 정적 마크다운 → HTML 변환 후 `sediment.app/{privacy,terms}/{ko,en,ja}` 경로로 서빙.

옵션:
1. **Firebase Hosting** — 이미 사용 중. `firebase.json` 의 hosting target에 정적 페이지 추가
2. **Cloudflare Pages** — Markdown 자동 빌드 (Astro / Eleventy 등)
3. **GitHub Pages** — Jekyll 기본 지원

URL 구조 예시:
```
sediment.app/privacy/ko    → docs/legal/privacy.ko.md (HTML 변환)
sediment.app/privacy/en
sediment.app/privacy/ja
sediment.app/terms/ko
sediment.app/terms/en
sediment.app/terms/ja
```

앱 내 링크 검증: [client/app/subscribe.tsx](../../client/app/subscribe.tsx) 의
`TERMS_URL`, `PRIVACY_URL` 상수가 위 URL을 가리키는지 확인.

---

## 출시 후 약관 변경

1. **변경 이력** — 각 파일 하단의 "변경 이력" 섹션에 새 버전·날짜·변경 내용 추가
2. **사용자 통지** — 중대한 변경(개인정보 수집 항목 추가, 결제 정책 변경 등)은 앱 내 모달 + 이메일 통지가 KR PIPA·EU GDPR 의무
3. **앱 내 동의 갱신** — 큰 변경 시 신규/기존 사용자 모두 재동의 흐름 필요 가능

---

## 법률별 핵심 의무 체크

### 한국 (개인정보 보호법 / 전자상거래법)
- [ ] 개인정보처리방침 항목별 명시 (수집·목적·보유기간·제3자 제공·해외이전·권리)
- [ ] 통신판매업 신고
- [ ] 사업자 정보 표시 (사업자등록번호·통신판매업 신고번호·주소·전화·대표자)
- [ ] 청약철회 7일 (단, 사용한 디지털 콘텐츠 제외)

### 일본 (個人情報保護法 / 特定商取引法)
- [ ] 個人情報の利用目的 명시
- [ ] 第三者提供 동의
- [ ] 越境移転 (해외 이전) 표시 — Firebase US
- [ ] 特商法 표기 (販売事業者·所在地·連絡先·販売価格·支払方法·引渡時期)

### EU (GDPR)
- [ ] Lawful basis (계약 이행 + 정당한 이익)
- [ ] DPO 지정 (250명 미만 / 대규모 모니터링 없으면 면제 가능)
- [ ] Cross-border transfer SCCs (Firebase US)
- [ ] Data subject rights (access, rectification, erasure, portability, restriction, objection)
- [ ] 14일 cooling-off (소비자 디지털 콘텐츠 — 사용 시작 전까지)

### 미국 (CCPA / Apple 정책)
- [ ] California 거주자 권리 (know, delete, opt-out)
- [ ] Apple App Store auto-renewal 표준 문구
- [ ] Privacy Nutrition Label 과 일치하는 수집 항목 기재

---

## 파일

- [privacy.ko.md](privacy.ko.md) — 개인정보처리방침 (한국어)
- [privacy.en.md](privacy.en.md) — Privacy Policy (English)
- [privacy.ja.md](privacy.ja.md) — プライバシーポリシー (Japanese)
- [terms.ko.md](terms.ko.md) — 이용약관 (한국어)
- [terms.en.md](terms.en.md) — Terms of Service (English)
- [terms.ja.md](terms.ja.md) — 利用規約 (Japanese)
