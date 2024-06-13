import Sequelize from "sequelize";
import config from "./config.js"; 

const dbConfig = config.development;

const sequelize = new Sequelize(
  dbConfig.db,
  dbConfig.username,
  dbConfig.dbPass,
  {
    host: dbConfig.dbHost,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);

export { sequelize };
