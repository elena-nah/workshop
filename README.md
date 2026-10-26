# Little Pixel Workshop
A complete, responsive static portfolio for GitHub Pages. No build tools, paid services, or Python required.

## Publish on GitHub Pages (from browser or phone)
1. Go to github.com/new and create a **public** repository, e.g. `little-pixel-workshop`.
2. Upload **all** files in this folder to the repository root: `index.html`, `style.css`, `script.js`, `config.js`, and the `assets` folder containing both images. Do not upload the enclosing `pixel-dev-corner` folder itself.
3. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**; select **main** and **/(root)**; click **Save**.
4. After a few minutes visit `https://YOUR-GITHUB-USERNAME.github.io/little-pixel-workshop/`.
5. To edit the page, open `config.js` on GitHub, click the pencil icon, change values and **Commit changes**. GitHub Pages will republish.

## Configure
- `kofiUrl`: Paste your actual Ko-fi profile link. Until then the support button is disabled.
- `projects`: Edit names, descriptions and labels. Set `url` to a public PWA link or GitHub Release download URL to enable the button. Blank `url` keeps it marked **Coming soon**.
- `type`: `pwa`, `desktop`, or `other` (these drive filters).
- `color`: `rose`, `forest`, `amber`, `sky`, `plum`.
- `icon`: Any emoji or symbol. You can replace these with actual screenshots in a later version.
- Site title/text: Edit `index.html` directly.

## Files for apps
For Windows ZIP/EXE downloads, use GitHub Releases (in your app's own repository) and copy the release asset link into `config.js`. For PWAs, link to the live app URL. GitHub Pages hosts the website, not private paid downloads.

## Note
The banner and avatar are pixel-art illustrations. Other project pictures are currently decorative icon cards, not screenshots. All example projects are labelled **Coming soon** until you add real links.
