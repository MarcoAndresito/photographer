"use server"; // 👈 esto fuerza a que se ejecute solo en el servidor

import { Sequelize } from "sequelize";

console.log("DB_NAME", process.env.DB_NAME);

const sequelize = new Sequelize("db_photographer", "sa", "123456789", {
  host: "ONPMVASQUEZ",
  dialect: "mssql",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  },
});

export default sequelize;
