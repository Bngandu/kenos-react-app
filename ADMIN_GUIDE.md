# Kenos Tabernacle Ministry — Website Administration & Handover Guide

**Document Version:** 1.1  
**Date:** October 2026  
**Prepared by:** Billy Ngandu  
**Website:** https://ktmnewhorizon.co.za  
**GitHub Repository:** https://github.com/Bngandu/kenos-react-app

---

## Table of Contents

1. Overview
2. Architecture Diagram
3. AWS Infrastructure
4. Source Code & Technology Stack
5. Local Development Setup
6. Making Changes to the Website
7. Deployment Process
8. Domain & DNS Management
9. Email (Zoho Mail)
10. Important Credentials & Access
11. Troubleshooting
12. Future Improvements
13. Contact & Handover Notes

---

## 1. Overview

The Kenos Tabernacle Ministry New Horizon website is a modern single-page application (SPA) built with React. It is hosted on Amazon Web Services (AWS) using S3 for file storage, CloudFront for global content delivery (CDN) and HTTPS, and Route 53 for domain management.

The website displays information about the church including service times, history, leadership, missionary outreach (KIOFM), youth ministry (MOYGA), and contact details.

---

## 2. Architecture Diagram

```
[User visits https://ktmnewhorizon.co.za]
        │
        ▼
[Route 53 DNS] ──► resolves domain to CloudFront
        │
        ▼
[CloudFront CDN] ──► serves cached files globally via HTTPS
        │
        ▼
[S3 Bucket: ktmnewhorizon.co.za] ──► stores the website files
        │
        ├── index.html (main page)
        ├── assets/
        │     ├── index-XXXXX.js (React app bundle)
        │     └── index-XXXXX.css (styles)
        ├── Kenos-Logo.png
        ├── book1.jpg
        ├── book2.jpg
        └── book3.jpg
```

---

## 3. AWS Infrastructure

### 3.1 S3 Bucket

- **Bucket name:** `ktmnewhorizon.co.za`
- **Region:** Africa (Cape Town) `af-south-1`
- **Static website hosting:** Enabled
- **Website endpoint:** http://ktmnewhorizon.co.za.s3-website.af-south-1.amazonaws.com
- **Bucket versioning:** Enabled
- **Public access:** Allowed via bucket policy (public read for GetObject)

The bucket holds the production build files. When a user visits the site, the `index.html` file is served, which loads the JavaScript and CSS bundles.

### 3.2 CloudFront Distribution

- **Distribution name:** ktmnewhorizon-website
- **Distribution ID:** E2ASAV7XPVK0PG
- **Domain name:** d4aac56tegjpq.cloudfront.net
- **Alternate domain names (CNAMEs):** ktmnewhorizon.co.za, www.ktmnewhorizon.co.za
- **SSL Certificate:** ktmnewhorizon.co.za (managed by AWS Certificate Manager)
- **Origin:** S3 website endpoint (HTTP only)
- **Purpose:** Provides HTTPS, caching, and fast global delivery

CloudFront caches files. After updating the site, you MUST create a cache invalidation to see changes.

### 3.3 Route 53

- **Hosted zone:** ktmnewhorizon.co.za
- **A Record:** Alias pointing to the CloudFront distribution
- **Purpose:** Translates the domain name to the CloudFront distribution

### 3.4 AWS Certificate Manager (ACM)

- **Certificate:** ktmnewhorizon.co.za (includes www.ktmnewhorizon.co.za)
- **Region:** us-east-1 (required for CloudFront)
- **Validation:** DNS validation via Route 53
- **Purpose:** Provides the SSL/TLS certificate for HTTPS

---

## 4. Source Code & Technology Stack

### 4.1 Repository

- **GitHub:** https://github.com/Bngandu/kenos-react-app
- **Branch:** main
- **Local path:** /Users/cizubub/Downloads/ktm-website/

### 4.2 Technology Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI framework (component-based) |
| Vite | Build tool (fast dev server & production bundling) |
| Tailwind CSS 4 | Utility-first CSS styling |
| Framer Motion | Scroll animations & transitions |
| Swiper.js | Book carousel (coverflow effect) |
| React Icons | Icon library (FontAwesome icons) |

### 4.3 Project Structure

```
ktm-website/
├── index.html              ← Dev entry point (NOT for production upload)
├── vite.config.js          ← Build configuration
├── package.json            ← Dependencies & scripts
├── public/                 ← Static assets (copied as-is to build)
│   ├── Kenos-Logo.png
│   ├── book1.jpg
│   ├── book2.jpg
│   └── book3.jpg
├── src/
│   ├── main.jsx            ← App entry point
│   ├── index.css           ← Global styles & Tailwind theme
│   ├── App.jsx             ← Main app component (assembles all sections)
│   ├── data/
│   │   └── content.js      ← All text content (quotes, timeline, leaders)
│   └── components/
│       ├── Navbar.jsx       ← Navigation bar
│       ├── Hero.jsx         ← Hero/landing section
│       ├── Welcome.jsx      ← Welcome & service times
│       ├── BooksCarousel.jsx← Recommended reading carousel
│       ├── Hofmann.jsx      ← Hofmann painting quotes
│       ├── Mission.jsx      ← Divine mission section
│       ├── EndTimeSign.jsx  ← End-time sign quote
│       ├── About.jsx        ← About us & leadership
│       ├── Timeline.jsx     ← Church history timeline
│       ├── KIOFM.jsx        ← Missionary outreach
│       ├── MOYGA.jsx        ← Youth ministry
│       ├── Contact.jsx      ← Contact details & socials
│       ├── Footer.jsx       ← Footer
│       └── BackToTop.jsx    ← Scroll-to-top button
└── dist/                    ← Production build output (upload THIS to S3)
    ├── index.html           ← THIS is what goes to S3
    └── assets/
        ├── index-XXXXX.js
        └── index-XXXXX.css
```

### 4.4 Key Design Decisions

- **Two-tone theme:** Alternating dark navy sections and light cream sections
- **Color palette:** Navy (#1a3355), Gold (#d4af37), Cream (#faf8f2)
- **Typography:** Playfair Display (headings), Inter (body text)
- **All content is in `src/data/content.js`** — easy to update text without touching components

---

## 5. Local Development Setup

### Prerequisites

- macOS (or any OS with Node.js)
- Node.js v18+ (installed via Homebrew: `brew install node`)
- Git
- A code editor (VS Code recommended)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Bngandu/kenos-react-app.git
cd kenos-react-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# Visit http://localhost:5173
```

The dev server supports Hot Module Replacement (HMR) — changes you make to files appear instantly in the browser without refreshing.

---

## 6. Making Changes to the Website

### 6.1 Updating Text Content

Most text is in `src/data/content.js`. Edit this file to change:
- Service times
- Timeline events
- Leadership info
- Quotes

### 6.2 Updating a Component

Each section of the website is a separate file in `src/components/`. For example:
- To change the hero section → edit `src/components/Hero.jsx`
- To change contact details → edit `src/components/Contact.jsx`

### 6.3 Updating Images

Replace files in the `public/` folder:
- `public/Kenos-Logo.png` — church logo
- `public/book1.jpg` — Hofmann's Head of Christ
- `public/book2.jpg` — Who is William Branham
- `public/book3.jpg` — The Cloud

### 6.4 Changing Colors/Theme

Edit `src/index.css` — the `@theme` block at the top defines all colors:

```css
@theme {
  --color-primary: #1a3355;
  --color-secondary: #d4af37;
  --color-gold: #d4af37;
  --color-cream: #faf8f2;
  /* etc. */
}
```

### 6.5 Adding a New Section

1. Create a new file in `src/components/` (e.g., `Instagram.jsx`)
2. Import and add it to `src/App.jsx` in the desired position

---

## 7. Deployment Process

### Step 1: Build for Production

```bash
cd /path/to/ktm-website
npm run build
```

This generates optimized files in the `dist/` folder.

### Step 2: Upload to S3

1. Open AWS Console → S3 → `ktmnewhorizon.co.za`
2. Delete the old `index.html` from the bucket root
3. Delete the old files inside the `assets/` folder
4. Upload new `dist/index.html` to the bucket root
5. Upload new files from `dist/assets/` into the `assets/` folder

**IMPORTANT:** Always upload from the `dist/` folder, NEVER the project root `index.html`.

### Step 3: Invalidate CloudFront Cache

1. Open AWS Console → CloudFront → `ktmnewhorizon-website`
2. Go to **Invalidations** tab
3. Click **Create invalidation**
4. Path: `/*`
5. Click **Create invalidation**
6. Wait 2-5 minutes for changes to propagate

### Step 4: Verify

Visit https://ktmnewhorizon.co.za (hard refresh with Cmd+Shift+R if needed).

---

## 8. Domain & DNS Management

### Domain Registrar

The domain `ktmnewhorizon.co.za` is registered through AWS Route 53.

### DNS Records (Route 53)

Website + certificate records:

| Type | Name | Value |
|------|------|-------|
| A | ktmnewhorizon.co.za | Alias → CloudFront distribution |
| A | www.ktmnewhorizon.co.za | Alias → CloudFront distribution |
| CNAME | (validation) | ACM certificate validation |

Email records are also in this zone, see **Section 9.3 (Email / Zoho Mail)** for MX, SPF, DKIM, and DMARC. Website and email records coexist safely in the same hosted zone.

### Domain Renewal

The domain will need to be renewed periodically. Check Route 53 → Registered domains for expiry date and ensure auto-renewal is enabled.

---

## 9. Email (Zoho Mail)

The church uses **Zoho Mail** (Forever Free plan) to provide custom email addresses on the `@ktmnewhorizon.co.za` domain. This is completely separate from the website, email and website hosting share only the domain name. Changing one does not affect the other.

### 9.1 Plan & Account

- **Provider:** Zoho Mail — https://www.zoho.com/mail/
- **Plan:** Forever Free (up to 5 mailboxes, 5 GB each, 1 domain, webmail + mobile app)
- **Data center:** US (determines server hostnames below)
- **Admin console:** https://mailadmin.zoho.com
- **Webmail:** https://mail.zoho.com
- **Super Administrator mailbox:** `info@ktmnewhorizon.co.za`
- **Cost:** $0/month on the free plan

> The `info@` mailbox is the Super Administrator. It owns the whole mail setup, keep its password safe and recorded. Losing it means losing admin control of the mail.

### 9.2 Mailboxes

| Address | Purpose |
|---------|---------|
| info@ktmnewhorizon.co.za | Main public contact + Super Admin |
| (add pastor@, admin@, etc. as needed, 5 free) | Additional mailboxes / aliases |

Add or manage mailboxes in the Zoho Admin Console → **Users**. You can also create **aliases** (extra addresses that drop into an existing inbox) for free, e.g. point `contact@` into `info@`.

### 9.3 DNS Records (in Route 53)

All email records live in the same hosted zone as the website (`ktmnewhorizon.co.za`). They do not conflict with the website's A records.

| Name / Host | Type | Value | Purpose |
|-------------|------|-------|---------|
| (root / blank) | MX | `10 mx.zoho.com`, `20 mx2.zoho.com`, `50 mx3.zoho.com` | Routes incoming mail to Zoho |
| (root / blank) | TXT | `zoho-verification=zb10937497.zmverify.zoho.com` | Domain ownership verification |
| (root / blank) | TXT | `v=spf1 include:zoho.com ~all` | SPF — authorizes Zoho to send on your behalf |
| `zmail._domainkey` | TXT | `v=DKIM1; k=rsa; p=MIGf...QIDAQAB` (1024-bit key from Zoho) | DKIM — cryptographic signing, anti-spoofing |
| `_dmarc` | TXT | `v=DMARC1; p=quarantine; rua=mailto:info@ktmnewhorizon.co.za; fo=1` | DMARC — policy + reports for failed mail |

Notes:
- The two root TXT records (verification + SPF) must live in **one** Route 53 TXT record, as two quoted lines. Route 53 does not allow two separate TXT records with the same name.
- The DKIM selector is `zmail` (1024-bit key chosen so the value fits in a single DNS TXT string).
- The full DKIM key value is stored in Zoho (Admin Console → Domains → `ktmnewhorizon.co.za` → Email Configuration → DKIM). Regenerate there if ever needed.

### 9.4 Reading & Replying to Mail

Three ways to access mail sent to `info@` (or any mailbox):

1. **Webmail (easiest):** https://mail.zoho.com, log in with the address and password.
2. **Mobile app:** install "Zoho Mail" (App Store / Play Store), log in. Push notifications.
3. **Pull into existing Gmail (optional):** since the church already uses Gmail, you can receive and reply to the Zoho address from inside Gmail:
   - Gmail → Settings → Accounts and Import → **Check mail from other accounts** → add the Zoho address via POP (`pop.zoho.com`, port 995, SSL).
   - Gmail → Settings → Accounts → **Send mail as** → add the Zoho address via SMTP (`smtp.zoho.com`, port 465, SSL), so replies go out as `info@ktmnewhorizon.co.za`.

### 9.5 Verifying Setup

In the Zoho Admin Console the domain should show MX, SPF, and DKIM all verified (1/1). DKIM verification can lag 30–40 minutes after the DNS record is added, this is normal, just click **Verify** again later. Mail works as soon as MX + SPF are verified; DKIM only improves deliverability.

### 9.6 Email Troubleshooting

- **Not receiving mail:** confirm MX records point to Zoho (`dig MX ktmnewhorizon.co.za`) and the mailbox exists in the Admin Console.
- **DKIM won't verify:** the record is correct but Zoho's verifier is lagging, wait 30–40 min and retry. Do not regenerate the key (that resets the clock).
- **Mail landing in spam:** ensure SPF, DKIM, and DMARC are all verified.
- **Forgot admin password:** reset via https://accounts.zoho.com using the recovery email/phone on the account.

---

## 10. Important Credentials & Access

### AWS Account

- **Account ID:** 995869199809
- **Console:** https://console.aws.amazon.com
- **Region for S3:** af-south-1 (Cape Town)
- **Region for CloudFront/ACM:** us-east-1 (Virginia)

### GitHub

- **Account:** Bngandu
- **Repository:** https://github.com/Bngandu/kenos-react-app

### Zoho Mail

- **Admin console:** https://mailadmin.zoho.com
- **Super Admin mailbox:** info@ktmnewhorizon.co.za
- **Plan:** Forever Free

### Services Used (Monthly Cost)

| Service | Cost |
|---------|------|
| S3 (storage + requests) | ~$0.50/month |
| CloudFront (free tier) | $0/month |
| Route 53 (hosted zone) | $0.50/month |
| Zoho Mail (Forever Free plan) | $0/month |
| Domain renewal | ~$15/year |
| **Total** | **~$1-2/month** |

---

## 11. Troubleshooting

### Site shows blank page after deployment
- You likely uploaded the wrong `index.html` (from project root instead of `dist/`)
- Fix: Delete it, upload `dist/index.html` instead

### Site shows old version after deployment
- CloudFront is serving cached files
- Fix: Create invalidation with `/*` and wait 5 minutes

### 403 Forbidden on assets
- The uploaded files don't have public read access
- Fix: Check bucket policy allows `s3:GetObject` for `*`

### CSS/JS not loading (broken styling)
- Check Content-Type metadata on the files in S3:
  - `.js` files → `application/javascript`
  - `.css` files → `text/css`
  - `.html` files → `text/html`

### Build fails locally
- Run `npm install` first to ensure dependencies are installed
- Check you have Node.js 18+ installed: `node --version`

---

## 12. Future Improvements

Ideas for the next team to consider:

- **Instagram feed integration** (LightWidget embed)
- **Photo gallery page** with church event images
- **Live streaming embed** for Sunday services
- **Dark/light mode toggle** for user preference
- **Contact form** with email delivery (via AWS SES or Formspree)
- **Automated deployment** using GitHub Actions (build + deploy to S3 automatically on push)
- **Performance:** Convert images to WebP format, add image compression

---

## 13. Contact & Handover Notes

### Current Maintainer

- **Name:** Billy Ngandu (Pastor)
- **Email:** billngandu75@gmail.com
- **GitHub:** @Bngandu

### Handover Checklist

- [ ] New maintainer has access to the AWS account (Console login)
- [ ] New maintainer has access to the GitHub repository (collaborator added)
- [ ] New maintainer has Node.js installed and can run `npm run dev` locally
- [ ] New maintainer has successfully deployed at least one change
- [ ] AWS credentials for CLI access are set up (optional, for advanced users)
- [ ] Domain renewal contact email is current

---

*This document should be kept updated as infrastructure or processes change. Store it in the GitHub repository and keep a printed copy with church administration records.*
