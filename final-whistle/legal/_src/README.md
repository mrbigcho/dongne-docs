# Final Whistle 법적 문서 소스

본 디렉터리는 Final Whistle 법적 문서의 **소스 오브 트루스**입니다. `_build.js` 가 마크다운 → HTML 변환과 자리표시자 치환을 수행합니다.

## 파일

| 파일 | 설명 |
|---|---|
| `privacy.{ko,en}.md` | 개인정보처리방침 |
| `terms.{ko,en}.md` | 이용약관 |
| `delete.{ko,en}.md` | 계정 삭제 안내 (App Store Guideline 5.1.1(v) 대응) |

## 빌드

```bash
node final-whistle/legal/_build.js
# → final-whistle/legal/{ko,en}/{privacy,terms,delete}.html 6 페이지 생성
```

## 자리표시자

`_build.js` 의 `SHARED` / `LOCALE_VARS` 에 정의되어 있습니다. 사업자 정보 변경 시 `_build.js` 만 수정하면 모든 문서에 일괄 반영됩니다.

| 자리표시자 | 출처 | 예시 |
|---|---|---|
| `{{COMPANY_NAME}}` | LOCALE_VARS | ko: `동네` / en: `DongNe` |
| `{{REPRESENTATIVE}}` | LOCALE_VARS | ko: `조상우` / en: `Sangwoo Cho` |
| `{{COMPANY_ADDRESS}}` | SHARED | 사업장 주소 (locale 무관) |
| `{{COMPANY_PHONE}}` | SHARED | `+82-...` |
| `{{BUSINESS_REG_NUM}}` | SHARED | 사업자등록번호 |
| `{{ECOMMERCE_REG_NUM}}` | SHARED | 통신판매업 신고번호 |
| `{{SUPPORT_EMAIL}}` / `{{LEGAL_EMAIL}}` | SHARED | 지원·법무 문의 |
| `{{HOSTING_PROVIDER}}` | SHARED | 호스팅 사업자 (전자상거래법 §10) |
| `{{GOVERNING_LAW}}` / `{{JURISDICTION}}` | LOCALE_VARS | 준거법·관할법원 |
| `{{EFFECTIVE_DATE}}` / `{{LAST_UPDATED}}` | SHARED | 시행일·최종 수정일 |

## 검증

빌드 후 산출물에 `{{` 가 남아 있지 않은지 확인:

```bash
grep -r '{{' final-whistle/legal/{ko,en}/ && echo "❌ 자리표시자 미치환" || echo "✓ 모든 자리표시자 치환 완료"
```
