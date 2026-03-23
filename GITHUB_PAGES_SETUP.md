# GitHub Pages Hosting Setup for deve Branch

## Configuration Complete

This project is configured for GitHub Pages hosting on the `deve` branch.

### Branch Structure:
- `homepage` → Feature branch for homepage work
- `deve` → Development/staging branch (→ **GitHub Pages hosting branch**)
- `main` → Production branch

### To Configure GitHub Pages:

1. **Go to GitHub Repository Settings:**
   - Navigate to: `https://github.com/career141-dev/Career141.com/settings/pages`

2. **Set Pages Source:**
   - **Source:** Deploy from a branch
   - **Branch:** `deve` (or `main` for production deployment)
   - **Folder:** `/ (root)`

3. **Your site will be available at:**
   - `https://career141-dev.github.io/Career141.com/` (if using deve branch)
   - *OR update to custom domain if configured*

### Deployment Workflow:

```
Feature Work (homepage branch)
        ↓
    Merge → deve (staging)
        ↓
    Merge → main (production)
```

GitHub Pages will auto-update when you push to the selected branch.

### GitHub Actions (Optional - for automated builds):

Create `.github/workflows/deploy.yml` to automate builds on push.

---

**Setup Complete!** 🚀
