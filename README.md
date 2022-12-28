# Crostarter 🎉

[![Deployment][deploy-image]][deploy-url] [![Unit Tests][rspec-image]][rspec-url] [![Rails code style][rubocop-code-style-image]][rubocop-code-style-url] [![Rails Style Guide][rails-code-style-image]][rails-code-style-url]
[![npm][npm-image]][npm-url] [![ESLint][eslint-image]][eslint-url]
![ruby][ruby-version] [![DeepSource][deepsource-image]][deepsource-url]

Demo: [Live](https://crostarter.fly.dev/)

## Getting started

Follow along to run app in your local machine

### Installation

```bash
bundle install
yarn install
```

### Development

```bash
cp .env.example .env

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
foreman -f Procfile.dev start
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
