import sequelize from "@/lib/sequelize";
import { DataTypes, ModelDefined } from "sequelize";

interface UserAttributes {
  username: string;
  email: string;
  password: string;
}

type UserCreationAttributes = Required<UserAttributes>;

const User: ModelDefined<UserAttributes, UserCreationAttributes> =
  sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default User;
