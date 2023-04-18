import db from "../models/connection";
import { DataTypes } from "sequelize";
import UserEntity from "./user";
import ProductsEntity from "./product";

export interface productFavorit {
  fk_idUser: string;
  fk_idProduct: string;
  id:number,
}

const product_favoritsEntity = db.define(
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
product_favoritsEntity.belongsTo(UserEntity, {foreignKey: "fk_idUser"});
product_favoritsEntity.belongsTo(ProductsEntity, {foreignKey: "fk_idProduct"});

export default product_favoritsEntity;