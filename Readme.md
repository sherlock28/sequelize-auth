### Init config for sequelize

```
npx sequelize-cli init
```

### Run migrations

```
npx sequelize-cli db:migrate
```

### Run all seeders

```
npx sequelize-cli db:seed:all
```

### Create a user model

```
npx sequelize-cli model:generate --name user --attributes name:string,password:string,email:string
```