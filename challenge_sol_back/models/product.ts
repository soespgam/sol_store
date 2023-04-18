import { DataTypes } from "sequelize";
import db from "./connection";
import product_favoritsEntity from "./product_favorite";
export interface product {
  name_product: string;
  description: string;
  favorite: boolean;
  id: number;
}
const ProductsEntity = db.define(
  "product",
  {
    name_product: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
export default ProductsEntity;
