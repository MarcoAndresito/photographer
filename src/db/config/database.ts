"use server";

import type { Sequelize } from "sequelize";

let sequelize: Sequelize | null = null;

export async function getSequelize() {
  if (sequelize) return sequelize;
  const { Sequelize } = await import("sequelize");
  const tedious = await import("tedious");
  sequelize = new Sequelize(
    process.env.DB_NAME || "",
    process.env.DB_USER || "",
    process.env.DB_PASS || "",
    {
      host: process.env.DB_HOST,
      dialect: (process.env.DB_DIALECT as any) || "mssql",
      dialectModule: tedious,
      logging: process.env.NODE_ENV === "development" ? console.log : false,
      dialectOptions: {
        options: {
          encrypt: true,
          trustServerCertificate: true,
        },
      },
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
  );
  return sequelize;
}
