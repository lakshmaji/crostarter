# Docs

## Managing secrets

```bash
flyctl secrets list
flyctl secrets set RAILS_MASTER_KEY=$(cat config/credentials/production.key)
bin/rails credentials:show
bin/rails credentials:show --environment=development
```

```bash
EDITOR="code --wait"  bin/rails credentials:edit
EDITOR="code --wait"  bin/rails credentials:edit --environment=development
```
