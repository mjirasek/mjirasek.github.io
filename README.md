# mjirasek.github.io

Source of the academic website of Michael Jirasek, live at https://mjirasek.github.io.

The site is built with Jekyll from a customized fork of the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT license).

## Editing content

- `_pages/`: standalone pages (home, gallery, interests, etc.)
- `_projects/`: research project pages
- `_bibliography/papers.bib`: publications
- `_data/`: CV and other structured data
- `assets/`: images, PDFs, and other files

## Deployment

Edit on `master`, commit, and push. GitHub Actions (`.github/workflows/deploy.yml`) builds the site and publishes it to `gh-pages`. Do not edit `gh-pages` directly.

Theme documentation: [INSTALL.md](INSTALL.md), [CUSTOMIZE.md](CUSTOMIZE.md).
