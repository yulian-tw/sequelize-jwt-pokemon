# SEQUELIZE-JWT-POKEMON

### Steps for initializing sequelize migration tools

1. After set up `config/database.js` , create Pokemon model.

```bash
npx sequelize db:create
npx sequelize init:migrations
npx sequelize init:models
npx sequelize model:generate --name Pokemon --attributes name:string
## update model and migration scripts
npx sequelize db:migrate
```

1. Add trainer model and Association.

```bash
npx sequelize-cli model:generate --name Trainer --attributes username:string,password:string
# Update trainer model and migration script
# Plan: Update pokemon model and create migration script
npx sequelize-cli migration:generate --name update-pokemon-with-trainer
npx sequelize db:migrate
npx sequelize-cli migration:generate --name update-pokemon-with-trainer-fk
```