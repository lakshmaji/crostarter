## TODO

- [ ] Feature development

  - [x] Run seeds in fly deployment

    ```bash
      flyctl auth token
      flyctl ssh console --command '/app/bin/rails db:seed RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1' -t <token>
    ```

  - [ ] IaaC
    - [ ] create `cdk` project in typescript (bootstrap is not required for small project)
    - [ ] Run on CI actions
  - [ ] Fix CLS - take help from css expert !!
  - [ ] No projects found for filters message
  - [ ] contribute
    - [ ] payment gateway integration (stripe)
  - [ ] categories page search
    - [ ] Not elasticsearch though https://github.com/activerecord-hackery/ransack
  - [ ] Elastic search integration
    - [ ] search projects
    - [ ] recommended projects
  - [ ] Welcome email using sidekiq and redis
  - [ ] Newsletter using aws SNS
  - [ ] rate limiter
  - [ ] PDF report generation for fund, and contributions (background job using sidekiq)
  - [ ] redis as cache layer
    - [ ] for categories
    - [ ] for projects
  - [ ] trending projects (would be from redis)
    - [ ] visitors attracted and funds raised in last 2 weeks or month
  - [ ] soft delete
  - [ ] services for retrieving data
  - [ ] Use SASS variable, mixins
  - [ ] roles (cancancan ?)
  - [ ] Progress indicator route navigation

- [ ] Playwright testing (e2e)
  - [ ] Github action for playwright
- [ ] REST API
  - [ ] versioning
  - [ ] serializer
  - [ ] jwt
- [ ] GraphQL
