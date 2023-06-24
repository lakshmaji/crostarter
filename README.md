# Crostarter 🎉

[![Deployment][deploy-image]][deploy-url] [![Unit Tests][rspec-image]][rspec-url] [![Rails code style][rubocop-code-style-image]][rubocop-code-style-url] [![Rails Style Guide][rails-code-style-image]][rails-code-style-url]
[![npm][npm-image]][npm-url] [![ESLint][eslint-image]][eslint-url]
![ruby][ruby-version] [![DeepSource][deepsource-image]][deepsource-url]
[![FOSSA Status][fossa-image]][fossa-url]

Demo: [Live](https://crostarter.fly.dev/)

An opensource crowd funding platform

## Getting started

Follow along to run app in your local machine

### Installation

#### Prerequisites

```bash
rbenv install 3.1.3
brew install postgresql
```

#### Setup

```bash
bundle install
yarn install
```

### Development

- Create or use keys for credentials

  ```bash
  # Copy or create the secret, below is example of copying existing keys to respective environments
  cp master.key config/master.key
  cp development.key config/credentials/development.key
  cp production.key config/credentials/production.key
  ```

- Copy `.env.example`

  ```bash
  cp .env.example .env
  ```

- Use SQLite as development database,

  ```bash
  bin/rails db:create
  bin/rails db:migrate
  ```

- Launch redis

  ```bash
  colima start
  docker-compose up
  ```

- Seed data

  ```bash
  bin/rails db:seed
  ```

- Launch server

  ```bash
  bin/rails server
  yarn dev # This will launch app in non-SSR mode

  # Run in SSR mode
  yarn dev:ssr
  # Build for SSR
  yarn build:ssr
  ```

  OR

  ```bash
  cp .env.example .env
  gem install foreman
  foreman start -f Procfile.dev
  ```

### Testing

```bash
bin/rails g rspec:request user
rspec
bundle exec rspec
```

### Linting

```bash
bundle exec rubocop --safe-auto-correct
bundle exec rubocop --A # force - better not use it
```

### Environment variables

```yml
aws:
  access_key_id: '******'
  secret_access_key: '******'
secret_key_base: '******'
REDIS_URL: redis://localhost:6379
ci:
  throttle_key:
```

---

[deploy-image]: https://github.com/lakshmaji/kickstarter/actions/workflows/deployment.yml/badge.svg?branch=main
[deploy-url]: https://github.com/lakshmaji/kickstarter/actions/workflows/deployment.yml
[rspec-image]: https://github.com/lakshmaji/kickstarter/actions/workflows/spec.yml/badge.svg?branch=main
[rspec-url]: https://github.com/lakshmaji/kickstarter/actions/workflows/spec.yml
[rubocop-code-style-image]: https://img.shields.io/badge/code_style-rubocop-brightgreen.svg
[rubocop-code-style-url]: https://github.com/rubocop/rubocop-rails
[rails-code-style-image]: https://img.shields.io/badge/code_style-community-brightgreen.svg
[rails-code-style-url]: https://rails.rubystyle.guide
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard
[eslint-image]: https://badges.aleen42.com/src/eslint.svg
[eslint-url]: https://eslint.org/
[ruby-version]: https://img.shields.io/badge/ruby-3.1+-ruby.svg?colorA=99004d&colorB=cc0066
[deepsource-image]: https://deepsource.io/gh/lakshmaji/crostarter.svg/?label=active+issues&show_trend=true&token=1iscn-MF5vlAmvh7Nzs1mvHd
[deepsource-url]: https://deepsource.io/gh/lakshmaji/crostarter/?ref=repository-badge
[fossa-image]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Flakshmaji%2Fcrostarter.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Flakshmaji%2Fcrostarter?ref=badge_shield

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flakshmaji%2Fcrostarter.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Flakshmaji%2Fcrostarter?ref=badge_large)
