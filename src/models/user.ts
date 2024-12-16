import sequelize from "@/lib/sequelize";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";

class User extends Model<
  InferAttributes<User, {}>,
  InferCreationAttributes<User, { omit: "id" | "createdAt" | "updatedAt" }>
> {
  declare id: string;
  declare username: string;
  declare email: string;
  declare password: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: false },
  },
  {
    sequelize,
    tableName: "Users",
    modelName: "User",
  }
);

// Sincroniza el modelo
User.sync({ force: true })
  .then((a) => {
    console.log("User table created successfully.", a.toJSON);
  })
  .catch((error) => {
    console.error("Error creating table:", error);
  });

export default User;
