# Sediment Privacy Policy

**Effective Date**: {{EFFECTIVE_DATE}}
**Last Updated**: {{LAST_UPDATED}}

{{COMPANY_NAME}} ("we", "us", "our") provides the mobile application **Sediment** (the "Service"). This Privacy Policy explains what personal data we collect, why we collect it, who we share it with, and how you can exercise your rights.

By using the Service you agree to the practices described here. If you do not agree, please do not use the Service.

---

## 1. Information We Collect

### 1.1 Anonymous accounts
- **Auto-generated identifier**: a Firebase Authentication UID (no email, no name)
- **Device locale**: time zone, language preference
- **Firebase Installation ID**: a non-identifying ID assigned per app install (not an advertising identifier)
- **Usage events**: anonymized in-app interactions (screen views, taps, session length) collected via Firebase Analytics

### 1.2 Linked accounts (email, Apple, Google)
- **Email address** (required to link an account)
- **Display name**, **profile picture URL** (if provided by Apple or Google)

### 1.3 Content you create
- **Fragments (deposits)**: text and attached photos
- **AI-woven layers**: AI-generated summaries derived from your fragments
- **Usage statistics**: timestamps, streak counts, credit balance changes

### 1.4 Subscriptions
- **Subscription state**: active flag, expiration date, product ID, store (App Store / Google Play)
- We **do not collect or store payment instrument details** (card number, account number). Apple, Google, and RevenueCat handle that information directly.

We do **not** use cookies, advertising identifiers, third-party trackers, or App Tracking Transparency tracking. The usage events collected by Firebase Analytics are anonymized and do not constitute "tracking" as defined by Apple's App Tracking Transparency framework (i.e., we do not link your activity to data from other companies' apps or websites for targeted advertising).

---

## 2. How We Use Your Information

| Data | Purpose |
|---|---|
| Firebase UID | User identification, data isolation |
| Email, display name | Account recovery, multi-device sync |
| Time zone, locale | UI/AI output localization, accurate timestamps |
| Fragments, photos | Core service (journaling, AI weaving) |
| AI call metadata | Usage tracking, credit accounting, error diagnosis |
| Subscription state | Entitlement checks, blocking deletion while subscription is active |
| Firebase Installation ID, usage events | Service improvement through anonymized usage analytics (no advertising) |

We do not use your data for any purpose beyond those listed above. If we change our purposes, we will obtain your consent first.

---

## 3. Retention

- We retain your data for as long as your account is active.
- When you delete your account from within the app, we **immediately** erase:
  - Firebase Authentication user
  - All Firestore documents (user profile, fragments, layers, AI call logs, credit ledger)
  - All Storage files (attached photos, audio)
- If you have an active subscription, deletion is blocked until you cancel it through App Store or Google Play.
- Data we are required to retain by law (e.g., transaction records under Korean e-commerce law for 5 years) is kept separately for the legally required period and then deleted.

---

## 4. Sharing & Processors

We do **not sell** your personal data. We share it only with the following processors who help us run the Service:

| Processor | Purpose | Data Shared | Region |
|---|---|---|---|
| Google LLC (Firebase) | Authentication, database, file storage, serverless functions, usage analytics | UID, email, fragments, photos, AI logs, Installation ID, anonymized usage events | United States (us-central1) |
| Google LLC (Gemini API) | AI weaving | Your text fragments at generation time | United States |
| RevenueCat, Inc. | Subscription state management | UID, subscription product ID, expiration | United States |
| Apple Inc. / Google LLC | In-App Purchase processing | Payment data (per their own policies) | Apple / Google |

Each processor's privacy policy:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [RevenueCat Privacy](https://www.revenuecat.com/privacy)
- [Apple Privacy](https://www.apple.com/legal/privacy/)

---

## 5. International Transfers

Your data is stored on Google Cloud infrastructure located in the United States (`us-central1` region). When you use the Service, you consent to this transfer.

For users in the EEA, UK, and Switzerland: we rely on Standard Contractual Clauses (SCCs) approved by the European Commission as the lawful basis for the transfer of your personal data outside your jurisdiction. Google's SCCs are available in their [Cloud Service Specific Terms](https://cloud.google.com/terms/data-processing-addendum).

---

## 6. Your Rights

You have the right to:
- **Access** — view all your fragments and layers within the app
- **Correct** — edit fragments inline (Today / Archive screens)
- **Delete** — delete individual fragments and layers, or use "Delete account permanently" in Account
- **Restrict / Object** — contact {{LEGAL_EMAIL}}
- **Portability** — request a JSON export by emailing {{LEGAL_EMAIL}}

For California residents (CCPA): you also have the right to know what personal data we have collected, the categories of sources, the purposes, and the categories of recipients. We do **not** sell your personal information.

For EEA / UK / Swiss residents (GDPR): the lawful basis for our processing is performance of our service contract with you (Article 6(1)(b)) and our legitimate interests in maintaining and improving the Service (Article 6(1)(f)).

---

## 7. Security

We use the following technical and organizational measures:
- TLS 1.2+ encryption for all network traffic
- Firebase App Check to block unauthorized clients
- Firestore Security Rules limiting access to your own data only
- Authentication tokens stored in the device's secure storage
- Passwords stored as one-way hashes by Firebase Authentication (we never see plaintext)

No system can be completely secure. If we discover a breach affecting your data, we will notify you and the relevant authorities as required by applicable law.

---

## 8. Children

Sediment is not directed to children under 13 (or under the equivalent age in your jurisdiction, e.g., 14 in Korea, 16 in some EU countries). We do not knowingly collect data from such children. If you become aware that a child has provided us with personal data, please contact {{LEGAL_EMAIL}} and we will delete it.

---

## 9. Automated Decision-Making

Our AI weaving (layer generation) is produced by Google's Gemini model. The output is an observational summary based on your fragments. It is **not medical, psychological, legal, or financial advice** and should not be used as a substitute for professional judgment.

---

## 10. Changes to this Policy

If we change this Policy, we will post the updated version inside the app and on our website at least 7 days before it takes effect. For changes that materially affect your rights, we will provide at least 30 days' notice and may ask for your renewed consent.

---

## 11. Contact

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
