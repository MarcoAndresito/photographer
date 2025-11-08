import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "db_photographer",
  "sa",
  "123456789",
  {
    host: "ONPMVASQUEZ",
    dialect: "mssql", // Dialecto para SQL Server
    dialectOptions: {
      options: {
        encrypt: true, // Esto depende de tu configuración de servidor
        trustServerCertificate: true, // Para evitar problemas en desarrollo
      },
    },
  }
);

//export default sequelize;
