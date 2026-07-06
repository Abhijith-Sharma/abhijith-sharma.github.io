# Abhijith Sharma — Product Manager Portfolio

A single-page portfolio site styled as a living product spec document — selected work, impact metrics, career history, core competencies, and credentials.

## Files

- `index.html` — the entire site. Self-contained (inline CSS/JS, no external dependencies or build step).

## Deploying with GitHub Pages

1. Create a new repository on GitHub (e.g. `abhijith-portfolio`).
2. Upload `index.html` (and this README) to the repository — via the GitHub web UI's "Add file → Upload files," or via `git`:
   ```
   git init
   git add index.html README.md
   git commit -m "Add portfolio site"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to the `main` branch and `/ (root)` folder, then save.
4. GitHub publishes the site at `https://<your-username>.github.io/<repo-name>/`.

No build step or dependencies are required — `index.html` is the whole site.
