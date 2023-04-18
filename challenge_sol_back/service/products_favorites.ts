import { Request, Response } from "express";
import product_favoritsEntity, { productFavorit } from "../models/product_favorite";
import UserEntity, { User } from "../models/user";
import ProductsEntity, { product } from "../models/product";



export const getproductFavorits = async (req: Request, res: Response) => {
  try {

    console.log("BODY createItem", req.body);
    const product: productFavorit = req.body;
    const productFavorite = await product_favoritsEntity.findAll({
      include: [{
        model: UserEntity,
        required: true,
      },
      {
        model: ProductsEntity,
        required:true,
      }
    ],
    where: {
      fk_idUser:product.fk_idUser
    },
    });
    return res.status(200).json(productFavorite);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createProductFavorits = async (req: Request, res: Response) => {
  try {
    console.log("BODY createItem", req.body.data);
    const product: productFavorit = req.body.data;

    const newproduct = await product_favoritsEntity.create({
      fk_idUser: product.fk_idUser,
      fk_idProduct: product.fk_idProduct
    });
    return res.status(200).json(newproduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteProductFavorits = async (req: Request, res: Response) => {
  try {
    console.log("BODY deleteProduct", req.body);
    const item = await product_favoritsEntity.findByPk(req.body.id);
    if (!item) {
      return res.status(404).json({
        message: `No existe el item ${req.body.id}`,
      });
    }
    await product_favoritsEntity.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json(error);
  }
};

