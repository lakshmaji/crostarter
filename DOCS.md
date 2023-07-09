# Docs

## Managing secrets

```bash
brew install flyctl

flyctl secrets list
flyctl secrets set RAILS_MASTER_KEY=
flyctl secrets set RAILS_PRODUCTION_KEY=
bin/rails credentials:show
bin/rails credentials:show --environment=development
flyctl ssh console --command '/app/bin/rails db:seed RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1' -t --verbose
fly ssh console -C 'printenv RAILS_MASTER_KEY'
flyctl volumes list

```

```bash
bin/rails credentials:show --environment development
bin/rails credentials:show

EDITOR="code --wait"  bin/rails credentials:edit
EDITOR="code --wait"  bin/rails credentials:edit --environment=development
```

## Database

```bash
psql postgres

CREATE ROLE croadmin WITH LOGIN PASSWORD 'password';
ALTER ROLE croadmin CREATEDB;
\q
psql postgres -U croadmin
CREATE DATABASE crostarter;
\l # verify database name in the list
bin/rails db:migrate
\c crostarter;
\dt

# postgresql:://croadmin:password@localhost:5432/crostarter

```

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

# Redis

```bash
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 4d4cf48fb35f
# connecting to redis
redis-cli -h localhost/1 -a eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81
```

## Background jobs

1. uses sidekiq
2. Monitor [here](http://localhost:3000/queue/monitor/)
3. run redis, sidekiq, and launch app

## Run github actions locally

```bash
brew install act
act -s FLY_API_TOKEN=<value> -j deploy -w .github/workflows/deployment.yml
```

- run migrations in prod

  ```bash
  bin/rails db:migrate  RAILS_ENV=production
  ```

-
