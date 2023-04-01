require('dotenv').config();

module.exports= { 
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "110910",
  database: process.env.DB_DATABASE || "database_development",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "mysql",


  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
}
