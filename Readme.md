### Init config for sequelize

```
npx sequelize-cli init
```
### Create migration
```
npx sequelize-cli migration:generate --name create-user-role
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

### Create a seed for models user and post

```
npx sequelize-cli seed:generate --name create-some-users-and-posts
```