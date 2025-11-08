import { DataTypes, Model } from "sequelize";
import sequelize from "../../../db/config/database";

export default class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { sequelize, tableName: "users", timestamps: true }
);
