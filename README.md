# Tacconi Consulting Ltd

Static marketing site and blog for Tacconi Consulting Ltd — IT consulting specialized in platform engineering, virtualization, Linux, AWS, and Kubernetes on bare metal.

## Development

- **Devbox** — reproducible env with `just` and Python. Run `devbox shell` then `just preview`, or `devbox run just preview`.
- **Just** — `just preview` (or `just serve`) serves the site at http://localhost:8000.

## Hosting on GitHub Pages

1. Create a repository (e.g. `tacconi-consulting` or `username.github.io` for a user site).
2. Push this folder to the repo.
3. In the repo: **Settings → Pages → Source**: choose **Deploy from a branch**.
4. Branch: **main** (or your default), folder: **/ (root)**. Save.
5. The site will be at:
   - **User/org site:** `https://<username>.github.io/`
   - **Project site:** `https://<username>.github.io/tacconi-consulting/`

The `.nojekyll` file ensures GitHub serves the static files as-is (no Jekyll processing).

## Adding a blog post

1. **Create the post HTML** in `blog/posts/<slug>.html`. Use an existing post (e.g. `welcome.html`) as a template: same header/footer, `../../` for CSS and home links, `../` for blog index.
2. **Register the post** in `blog/posts.json`: add an object with `slug`, `title`, `date` (YYYY-MM-DD), and optional `excerpt`.

Example `posts.json` entry:

```json
{
  "slug": "my-new-post",
  "title": "My new post",
  "date": "2025-02-20",
  "excerpt": "Optional short summary."
}
```

Posts are listed on `blog/index.html` automatically via the existing script.

## Local preview

**With Devbox + Just (recommended):**

```bash
devbox run just preview
```

Then open **http://localhost:8000**. Stop with Ctrl+C.

**Without Devbox:** install [just](https://github.com/casey/just) and run `just preview`, or serve the root yourself:

```bash
python3 -m http.server 8000
# or
npx serve .
```

For a GitHub Pages project site, use `http://localhost:8000/` so relative links behave like in production.
