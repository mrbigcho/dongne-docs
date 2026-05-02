# Final Whistle Privacy Policy

**Effective Date**: {{EFFECTIVE_DATE}}
**Last Updated**: {{LAST_UPDATED}}

{{COMPANY_NAME}} ("we", "us", "our") provides the mobile and web application **Final Whistle: Scoreboard** (the "Service"). This Privacy Policy explains what personal data we collect, why we collect it, who we share it with, and how you can exercise your rights.

By using the Service you agree to the practices described here. If you do not agree, please do not use the Service.

---

## 1. Information We Collect

### 1.1 Account information (Apple, Google, or email)
- **Email address** (required)
- **Display name**, **profile picture URL** (if provided by Apple or Google)
- **Firebase Authentication UID** — auto-generated identifier

### 1.2 Device data (collected automatically)
- Operating system, app version, device model (Firebase Crashlytics, Analytics)
- Time zone, language preference
- **Firebase Cloud Messaging token** — non-identifying device-bound token used for push notifications
- **Usage events** — anonymized in-app interactions (screen views, taps, session length) collected via Firebase Analytics

### 1.3 Content you create
- **Tournament & club data** — clubs you create or join, tournaments you organize or enter, match results, disputes, admin rulings
- **Participation records** — club memberships, tournament entries, posted comments
- **Shared scoreboard access logs** — aggregated traffic on shared links

We do **not** use cookies, advertising identifiers, third-party trackers, or App Tracking Transparency tracking. The usage events collected by Firebase Analytics are anonymized and do not constitute "tracking" as defined by Apple's App Tracking Transparency framework (i.e., we do not link your activity to data from other companies' apps or websites for targeted advertising).

We do **not** collect: precise location, health or medical data, financial account numbers, contact lists, photos outside what you actively upload, or advertising identifiers (IDFA, AAID).

---

## 2. How We Use Your Information

| Data | Purpose |
|---|---|
| Firebase UID | User identification, data isolation |
| Email, display name | Account recovery, multi-device sync |
| Profile picture | Display in tournaments, matches, and standings |
| Time zone, locale | UI localization, accurate match timestamps |
| User content (clubs, tournaments, results) | Core service functionality |
| FCM token | Send push notifications (your turn, results posted, etc.) |
| Usage events, diagnostic data | Service improvement, crash diagnosis |

We do not use your data for any purpose beyond those listed above. We do not sell or share personal information for behavioral advertising.

---

## 3. Retention

- We retain your data for as long as your account is active.
- When you use the in-app "Delete account" function or email a deletion request to {{LEGAL_EMAIL}}, we erase the following within **30 days**:
  - Firebase Authentication user
  - Backend database records (profile, memberships, content you authored)
  - Firebase Cloud Messaging tokens
- Clubs and tournaments you created that are still in active use by other participants may persist after you leave. You may delete them yourself before leaving, or request removal afterward.
- **Diagnostic data (Crashlytics)** is retained for up to 90 days.
- **Analytics events** follow Firebase Analytics defaults (currently 2–14 months).
- Data we are required to retain by law (e.g., transaction records under Korean e-commerce law for 5 years) is kept separately for the legally required period and then deleted.

---

## 4. Sharing & Processors

We do **not sell** your personal data. We share it only with the following processors who help us run the Service:

| Processor | Purpose | Data Shared | Region |
|---|---|---|---|
| Google LLC (Firebase) | Authentication, Crashlytics, Analytics, Cloud Messaging | UID, email, diagnostic data, push tokens, anonymized usage events | United States |
| Apple Inc. | Sign in with Apple, push delivery via APNs | Apple ID identifier, push token | Per Apple policy |
| Railway Corp. | Backend server hosting | User content (clubs, tournaments, results) | United States |
| Cloudflare, Inc. | Flutter Web static hosting / CDN | Anonymized request logs | Global edge |

Each processor's privacy policy:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Apple Privacy](https://www.apple.com/legal/privacy/)
- [Railway Privacy](https://railway.com/legal/privacy)
- [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/)

Content you publish in a public club or tournament (match results, standings, participant lists) is visible to other participants and to anyone with the shared scoreboard link. Private clubs and tournaments are visible only to invited members.

---

## 5. International Transfers

Your data is processed on infrastructure located in the United States (Google Cloud, Railway). When you use the Service, you consent to this transfer.

For users in the EEA, UK, and Switzerland: we rely on Standard Contractual Clauses (SCCs) approved by the European Commission as the lawful basis for the transfer of your personal data outside your jurisdiction.

---

## 6. Your Rights

You have the right to:
- **Access** — view all your content and participation records inside the app
- **Correct** — edit profile, club settings, and tournament info inline
- **Delete** — delete individual content, or use "Delete account" in the MY tab. See the [Account Deletion guide](delete.html) for details
- **Restrict / Object** — contact {{LEGAL_EMAIL}}
- **Portability** — request a JSON export by emailing {{LEGAL_EMAIL}} (delivered within 30 days)
- **Withdraw consent** — for consent-based processing such as push notifications, via OS or in-app settings

We respond to requests within 30 days. If you are dissatisfied with our response, you may file a complaint with your local data protection authority.

For California residents (CCPA): you also have the right to know what personal data we have collected, the categories of sources, the purposes, and the categories of recipients. We do **not** sell your personal information.

For EEA / UK / Swiss residents (GDPR): the lawful bases for our processing are:
- **Contract** (Art. 6(1)(b)) — providing the Service you signed up for
- **Legitimate interests** (Art. 6(1)(f)) — security, debugging, feature improvement; you may object at any time
- **Consent** — push notifications and other consent-based processing; withdraw at any time
- **Legal obligation** — where processing is required by law

---

## 7. Security

We use the following technical and organizational measures:
- TLS 1.2+ encryption for all network traffic
- Encryption at rest where supported by our processors
- Minimized access to personal data, with access controls and audit logging
- Authentication tokens stored in the device's secure storage
- Passwords stored as one-way hashes by Firebase Authentication (we never see plaintext)

No system can be completely secure. If we discover a breach affecting your data, we will notify you and the relevant authorities as required by applicable law.

---

## 8. Children

Final Whistle is not directed to children under 13 (or under the equivalent age in your jurisdiction, e.g., 14 in Korea, 16 in some EU countries). We do not knowingly collect data from such children. If you become aware that a child has provided us with personal data, please contact {{LEGAL_EMAIL}} and we will delete it.

---

## 9. Changes to this Policy

If we change this Policy, we will post the updated version inside the app or notify you by email at least 7 days before it takes effect. For changes that materially affect your rights, we will provide at least 30 days' notice and may ask for your renewed consent.

---

## 10. Contact

| Field | Detail |
|---|---|
| Data Controller | {{COMPANY_NAME}} |
| Representative | {{REPRESENTATIVE}} |
| Address | {{COMPANY_ADDRESS}} |
| Privacy Contact | {{LEGAL_EMAIL}} |
| Phone | {{COMPANY_PHONE}} |

---

## Change Log

| Version | Effective | Changes |
|---|---|---|
| v1.0 | {{EFFECTIVE_DATE}} | Initial release |
