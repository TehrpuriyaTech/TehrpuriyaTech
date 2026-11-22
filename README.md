# Tehrpuriya Tech website

## Pages
- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `contact.html` — Contact
- `script.js` — Shared navigation and reveal animations
- `contact.js` — Contact form to WhatsApp handoff
- `assets/logo.png` — Brand logo

## Run
Open `index.html` in a browser. Tailwind CSS and Google Fonts load from CDNs, so an internet connection is required.

## Important: configure WhatsApp
Before publishing, open `contact.js` and set `WHATSAPP_NUMBER` to your official number using country code and digits only (for example, `919876543210`). Do not include `+`, spaces or hyphens.

The contact form validates fields in the browser and prepares a WhatsApp message. It does not store or email submissions. For a server-backed contact form, connect a backend or trusted form service.

## Internship page
- `internship.html` contains the 3-month remote unpaid web development internship details and application form.
- `intern.js` prepares the application in WhatsApp after `INTERN_WHATSAPP_NUMBER` is configured with the official number (country code + digits only).
- Until that number is configured, the form does not send or store submissions. Connect a Google Form or backend before publishing if you want applications collected centrally.
