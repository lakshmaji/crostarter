# Kickstarter 🎉

[![Deploy](https://github.com/lakshmaji/kickstarter/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/lakshmaji/kickstarter/actions/workflows/build.yml) [![Run Spec](https://github.com/lakshmaji/kickstarter/actions/workflows/spec.yml/badge.svg?branch=main)](https://github.com/lakshmaji/kickstarter/actions/workflows/spec.yml) [![Rails Style Guide](https://img.shields.io/badge/code_style-rubocop-brightgreen.svg)](https://github.com/rubocop/rubocop-rails) [![Rails Style Guide](https://img.shields.io/badge/code_style-community-brightgreen.svg)](https://rails.rubystyle.guide)


Demo: [Live](https://crostarter.fly.dev/)


```bash
bin/vite ssr
bin/vite build --ssr
bin/vite dev
bin/rails server
```

```bash
cp .env.example .env
foreman -f Procfile start
```

```bash
bin/rails g rspec:request user
rspec
bundle exec rspec
```

```bash
bundle exec rubocop --safe-auto-correct
bundle exec rubocop --A # force - better not use it
```

```bash
bin/rails db:recreate
bin/rails db:create RAILS_ENV=test
```


- [ ] CI/CD pipeline
  - [ ] fix fly deployment issue
- [ ] Feature development
- [ ] Playwright testing (e2e)


```bash
flyctl apps create 
flyctl list apps
flyctl deploy --remote-only
flyctl logs -a crostarter
```


# curl and ca-certificates are needed for volta installation
RUN apt-get update \
    && apt-get install -y \
    ca-certificates \
    --no-install-recommends

