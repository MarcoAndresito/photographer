import sequelize from "../config/database";
import User from "../../features/users/models/user.model";

export const db = {
  sequelize,
  User,
};

