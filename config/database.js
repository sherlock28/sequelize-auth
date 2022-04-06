module.exports = {
    username: process.env.DB_USERNAME || 'myuser',
    password: process.env.DB_PASSWORD || 'mysqladmin',
    database: process.env.DB_DATABASE || 'mydb',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',

    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',

    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',
}