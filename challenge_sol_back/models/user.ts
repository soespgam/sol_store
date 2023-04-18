import db from "../models/connection";
import { DataTypes } from "sequelize";
import product_favoritsEntity from "./product_favorite";
export interface User {
  name: string;
  role: string;
  password: string;
  id: number,
}
const UserEntity = db.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
},
  {
    freezeTableName: true,
    timestamps: false,
  });
export default UserEntity;
