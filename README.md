# maw-studio.de

Portfolio of Marina Arnoldovna Wilgelm, built with Jekyll and deployed to GitHub Pages by GitHub Actions.

## Develop

Requires Ruby 3.4 (see `.ruby-version`) and Bundler.

```sh
bundle install
bundle exec jekyll serve          # http://localhost:4000
bundle exec jekyll build && bundle exec htmlproofer ./_site --disable-external --no-enforce-https
```

Projects live in `_projects/`; the overview is sorted by the `n` front matter field.
The accent colour of a project comes from its `color` field.

## Deploy

Every push to `master` builds the site and deploys it to GitHub Pages (`.github/workflows/pages.yml`).
Pull requests run the build and an internal link check (`.github/workflows/ci.yml`).

## Credits

- Typeface: [Schibsted Grotesk](https://github.com/schibsted/schibsted-grotesk), SIL Open Font License 1.1, see `LICENSES/OFL-SchibstedGrotesk.txt`.
- Scroll animations: [AOS](https://github.com/michalsnik/aos) 2.3.4 by Michał Sajnóg, MIT License, see `LICENSES/MIT-AOS.txt`.
