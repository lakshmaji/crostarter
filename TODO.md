## TODO

- [ ] Feature development

  - [ ] IaaC
    - [ ] create `cdk` project in typescript (bootstrap is not required for small project)
    - [ ] Run on CI actions
  - [ ] Fix CLS - take help from css expert !!
  - [ ] payment gateway integration (stripe)

  - [ ] Elastic search integration
    - [ ] search projects
    - [ ] recommended projects
  - [ ] Welcome email using sidekiq and redis
  - [ ] Newsletter using aws SNS
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

- [ ] Playwright testing (e2e)
  - [ ] Github action for playwright
- [ ] REST API
  - [ ] versioning
  - [ ] serializer
  - [ ] jwt
- [ ] GraphQL
- [ ] synk
- [ ] brakeman
- [ ] categories page search
  - [ ] Not elasticsearch though https://github.com/activerecord-hackery/ransack
