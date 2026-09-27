# Sumit Kumar — Portfolio

Personal portfolio of **Sumit Kumar (Baranwal Design)**, Product Designer · UI/UX.
A static site: plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure

```
sumit-kumar-portfolio/
├── index.html                  Page markup
├── css/style.css               All styles (colors in :root)
├── js/main.js                  Content data + animations
├── assets/
│   ├── Sumit_Kumar_CV.pdf      Resume (linked in the nav)
│   └── images/
│       ├── sumit-kumar-hero.png
│       └── projects/           Project cover images
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Edit content

Projects, skills, tools, experience and education live at the top of `js/main.js`.
To add a project cover, put the image in `assets/images/projects/` and set its `image` path in `PROJECTS`.

## Deploy to GitHub Pages

1. Create a repo (for example `sumit-kumar-portfolio`) and push this folder's contents to `main`.
2. In the repo, go to **Settings → Pages** and set **Source** to `main` / root.
3. The site is published at `https://<your-username>.github.io/sumit-kumar-portfolio/`.

## To do

- Replace the LinkedIn link in `index.html` with your profile URL.
- Add covers for Pebble, CGIS redesign, Developer Alerts AI Agent and Spotify queue.
