# Musa Nkosi Portfolio

Static portfolio site: HTML, CSS and JavaScript with GSAP for animation. No build step.

## Files
- `index.html` page structure
- `styles.css` all styling
- `script.js` sections, routing, cursor and the dot portrait
- `photo-data.js` the portrait as a data URI for the dot animation
- `assets/` portrait photo and CV (PDF)

## Run locally
Open the folder in VS Code, install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. Opening the file directly also works.

## Contact form
The form needs a free key from https://web3forms.com (sent to your email). Paste it into `FORM_KEY` at the top of the form code in `script.js`. Without a key the form opens the visitor's email app instead.

## Update your content
- Projects: edit the `P` array in `script.js`. Project pages link to your GitHub profile (the `G` constant at the top); change it or add per-project links in the detail template in `apply()` once your projects are deployed.
- CV: replace `assets/Musa_Banathi_Nkosi_CV.pdf` and keep the file name.

## Push to GitHub and publish
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/MusaNkosi08/portfolio.git
git push -u origin main
```
Then on GitHub: Settings, Pages, Source "Deploy from a branch", branch `main`, folder `/ (root)`. The site goes live at `https://musankosi08.github.io/portfolio/`.
