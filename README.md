# Kickstarter 🎉

[![Deploy](https://github.com/lakshmaji/kickstarter/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/lakshmaji/kickstarter/actions/workflows/build.yml) [![Run Spec](https://github.com/lakshmaji/kickstarter/actions/workflows/spec.yml/badge.svg?branch=main)](https://github.com/lakshmaji/kickstarter/actions/workflows/spec.yml) [![Rails Style Guide](https://img.shields.io/badge/code_style-rubocop-brightgreen.svg)](https://github.com/rubocop/rubocop-rails) [![Rails Style Guide](https://img.shields.io/badge/code_style-community-brightgreen.svg)](https://rails.rubystyle.guide)


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


## TODO

- [ ] Feature development
  - [ ] Run seeds in fly deployment
  - [ ] create project
    - [ ] File Upload s3 
  - [ ] contribute
  - [ ] delete project
  - [ ] edit project
  - [ ] pagination
  - [ ] slider (with few random projects)
  - [ ] react-vis
  - [ ] payment gateway integration (stripe)
  - [ ] product listing updates
  - [ ] Use SASS variable, mixins
  - [ ] Elastic search integration 
    - [ ] search projects
    - [ ] recommended projects
  - [ ] Welcome email using sidekiq and redis
  - [ ] Newsletter using aws SNS
  - [ ] rate limiter
  - [ ] PDF report generation for fund, and contributions (background job using sidekiq)
- [ ] Playwright testing (e2e)
- [ ] Github action for playwright
- [ ] REST API
  - [ ] versioning
  - [ ] serializer
  - [ ] jwt
- [ ] GraphQL


