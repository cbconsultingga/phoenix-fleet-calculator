# Phoenix Fleet Calculator

A mobile-friendly Progressive Web App for Phoenix water mitigation equipment planning.

## What it does

- Calculates recommended air movers
- Calculates Phoenix dehumidifier count
- Calculates Phoenix Guardian R air scrubber count
- Accounts for water damage class, category, humidity, containment, and safety margin
- Flags Category 2 and Category 3 scrubber requirements
- Includes Xactimate reference codes
- Supports print / save-to-PDF workflow
- Can be installed to a phone home screen after hosting over HTTPS

## Files

```text
index.html
manifest.json
service-worker.js
README.md
```

## Deployment

Recommended quick options:

1. GitHub Pages
2. Netlify
3. Vercel
4. Firebase Hosting

## GitHub Pages setup

In GitHub:

1. Open repository settings
2. Go to Pages
3. Source: Deploy from branch
4. Branch: main
5. Folder: /root
6. Save

After Pages finishes building, open the live URL on a phone and choose Add to Home Screen.

## Field-use note

This app is a planning calculator only. Final equipment placement and counts should be verified by field inspection, IICRC S500 procedures, moisture mapping, psychrometric readings, contamination controls, and company SOPs.
