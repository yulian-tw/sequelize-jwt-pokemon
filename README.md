# SEQUELIZE-JWT-POKEMON

### Steps for initializing sequelize migration tools

After set up `config/database.js` ,

```bash
npx sequelize db:create
npx sequelize init:migrations
npx sequelize init:models
npx sequelize model:generate --name Pokemon --attributes name:string
```