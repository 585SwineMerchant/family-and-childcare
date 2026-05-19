# Family Functions Interactive Packet

This is a static GitHub Pages version of the Family Functions & Healthy Families activity packet.

## Deploy on GitHub Pages

1. Put `index.html`, `styles.css`, and `app.js` in the root of a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set the source to the main branch and root folder.
4. Open the published Pages URL.

Student work is saved locally in the browser while they are working. The score updates automatically. Each activity displays one prompt at a time with back/next controls so students can review and revise before submitting.

The Greece Central Schools logo is loaded from the district's official website asset URL. If you need the page to work fully offline, download that image and update the `img` tag in `index.html` to point to the local copy.

## Gmail results

The **Prepare Gmail Results** button creates a text results file, opens a Gmail draft addressed to `kevin.mccann@greececsd.org`, and includes the overall score in the message body.

Web Gmail does not allow a static GitHub Pages site to silently attach a local file to a draft. For true automatic Gmail draft creation with the text file attached, deploy the optional Apps Script in `apps-script/Code.gs`, then paste its web app URL into `APPS_SCRIPT_WEB_APP_URL` at the top of `app.js`.

Recommended Apps Script deployment settings:

- Execute as: the teacher account that should own the Gmail draft
- Who has access: users in the school domain, or anyone with the link if your district permits it
