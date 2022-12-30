# Docs

## Managing secrets

```bash
flyctl secrets list
flyctl secrets set RAILS_MASTER_KEY=
bin/rails credentials:show
bin/rails credentials:show --environment=development
flyctl ssh console --command '/app/bin/rails db:seed RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1' -t --verbose
fly ssh console -C 'printenv RAILS_MASTER_KEY'
flyctl volumes list

```

```bash
EDITOR="code --wait"  bin/rails credentials:edit
EDITOR="code --wait"  bin/rails credentials:edit --environment=development
```

## Database

```bash
flyctl postgres connect -a <database name>
\l
\c crostarter
\dt
exit

DROP TABLE active_storage_attachments CASCADE; # shouldn't run on prod.
```

## Deployment

```bash
fly postgres create
# > name of database
flyctl apps create crostarter
flyctl postgres attach --app crostarter <database name>
flyctl secrets set RAILS_MASTER_KEY=$(cat config/credentials/production.key)
flyctl deploy -c fly.toml --remote-only
```

## Run seeds

- Run seeds in fly deployment

  ```bash
    flyctl auth token
    flyctl apps restart crostarter -t <token>
    flyctl ssh console --command '/app/bin/rails db:recreate:seed RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1' -t <token> # returns error if trying to drop database while it is using by app
  ```
