import db from "./connection";
import { DataTypes } from "sequelize";
import UserEntity from "./user";
import ProductsEntity from "./product";

export interface purchase {
  fk_idUser: string;
  fk_idProduct: string;
  amount: string;
  status:boolean;
  id: number;
  
}

const purchaseEntity = db.define(
  "purchase",
  {
    fk_idUser: {
      type: DataTypes.INTEGER,
    },
    fk_idProduct: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    status:{
      type: DataTypes.BOOLEAN,
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
purchaseEntity.belongsTo(UserEntity, {foreignKey: "fk_idUser"})
purchaseEntity.belongsTo(ProductsEntity, {foreignKey: "fk_idProduct"});

export default purchaseEntity;
