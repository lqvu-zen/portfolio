Check the live portfolio website at https://lqvu-zen.github.io/portfolio/ for errors and fix any issues found in the local repo, then commit and push to GitHub.

Steps:
1. Fetch https://lqvu-zen.github.io/portfolio/ and check for:
   - Broken images (img src returning 404)
   - Broken video embeds (data-video URLs that are invalid or unreachable)
   - Missing script or stylesheet references
   - Broken external links (nav, contact, card ↗ links)
   - JavaScript errors (missing DOM elements that JS depends on, undefined references)

2. Read the local source files (index.html, style.css, main.js) and cross-reference with findings.

3. Fix any issues directly in the source files.

4. If fixes were made:
   - Stage only the changed files (never .env or credentials)
   - Commit: git commit -m "Auto-fix: <short description>"
   - Push: git push origin main

5. If no issues found, report that the site is healthy and exit.

Be conservative — only fix clear errors. Do not refactor or redesign anything.
