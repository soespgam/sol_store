import { Request, Response } from "express";
import ProductsEntity, { product } from "../models/product";

export const getProduct = async (req: Request, res: Response) => {
  try {
    const itemsCarts = await ProductsEntity.findAll();
    return res.status(200).json(itemsCarts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getProductFavorite = async (req: Request, res: Response) => {
  try {
    console.log("BODY createItem", req.body);
    const productFavorite = await ProductsEntity.findAll({
      where: {
        favorite: 1
      },
    });
    return res.status(200).json(productFavorite);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    console.log("BODY createItem", req.body.data);
    const product: product = req.body.data;

    const newproduct = await ProductsEntity.create({
      name_product:product.name_product,
      description:product.description,
      favorite:product.favorite
    });
    return res.status(200).json(newproduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    console.log("BODY deleteProduct", req.body);
    const item = await ProductsEntity.findByPk(req.body.id);
    if (!item) {
      return res.status(404).json({
        message: `No existe el item ${req.body.id}`,
      });
    }
    await ProductsEntity.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json(error);
  }
};







