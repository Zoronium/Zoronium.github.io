# zoronium.github.io

An interactive résumé that behaves like a terminal. Single file, no build step,
no dependencies beyond a Google Fonts link. Open [index.html](index.html) and
type `help`.

## Editing

Everything you'd want to change lives in one place: the `R` object near the
top of the `<script>` in `index.html` (search for `EDIT ONLY THIS OBJECT`).
Name, links, experience, projects, skills, education, awards — edit that,
save, refresh. Every command (`resume`, `grep`, `print`, the PDF export, the
JSON-LD block) renders from it, so nothing else needs to change in sync.

## The old site

The previous portfolio landing page (pre-2025) is preserved on the [`v0.1`](../../tree/v0.1)
branch, not deleted — it's just no longer what GitHub Pages serves from `main`.

## Deploying

Pages serves straight from `main` at the repo root — push to `main` and it's
live within a minute or two, no Actions/CI involved.
