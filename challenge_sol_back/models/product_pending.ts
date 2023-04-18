import db from "../models/connection";
import { DataTypes } from "sequelize";

export interface productPending {
  fk_idUser: string;
  fk_idProduct: string;
  id: number;
}

const product_pendingEntity = db.define(
  "product_favorits",
  {
    fk_idUser: {
      type: DataTypes.INTEGER,
    },
    fk_idProduct: {
      type: DataTypes.INTEGER,
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
  }
);
export default product_pendingEntity;