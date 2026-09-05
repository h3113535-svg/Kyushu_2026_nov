# Firebase owner-only delete setup — v1.11.20

## What v1.11.20 already does in the app
The PWA now treats shared-data deletion as owner-only for:
- `foods`
- `shopping`
- `expenses`
- `mapPlaces`
- custom `bookingItems`

For non-owner accounts, the delete buttons are not rendered. The delete handler also checks the owner identity again before deleting.

Local-only actions are intentionally not owner-restricted:
- PDF attachment remove (IndexedDB on that device only)
- Offline Pack removal (Cache Storage on that device only)
- Exchange calculator clear/reset

## 1. Configure the owner identity
Open `firebase-config.js` and set ONE of these:

```js
window.KYUSHU_OWNER_EMAIL = "YOUR_GOOGLE_EMAIL@example.com";
window.KYUSHU_OWNER_UID = "";
```

or, preferably, use the Firebase Authentication UID:

```js
window.KYUSHU_OWNER_EMAIL = "";
window.KYUSHU_OWNER_UID = "YOUR_FIREBASE_AUTH_UID";
```

If both are blank, shared-data deletion is disabled for everyone. This is intentional as a safe default.

## 2. Important: app UI is not the security boundary
Hiding buttons and checking in JavaScript prevents accidental deletion through the normal app, but a technically capable user could still call the Realtime Database REST API directly if your Firebase Rules allow it.

For true enforcement, Realtime Database Rules must also reject deletes from non-owner accounts.

A delete in Realtime Database Rules can be recognized with:

```text
!newData.exists()
```

The intended logic for each runtime item is:

```text
allowed family user AND (newData.exists() OR owner account)
```

In other words:
- create/update: allowed family users
- delete: owner only

## 3. Do NOT keep a broad parent `.write: true` / allowlist write rule
Realtime Database Rules cascade. If a parent path already grants `.write`, a deeper child rule cannot revoke that permission.

Therefore, if the current rules grant write access at:

```text
trips/kyushu-nov-2026
```

or at a higher parent, that broad write permission must be restructured before child-level owner-only delete rules can actually protect deletion.

## 4. Recommended next step
Paste your current Firebase Realtime Database Rules JSON into ChatGPT. It can then be converted into an exact ready-to-paste version that preserves your current family email allowlist while making only deletion owner-only.
