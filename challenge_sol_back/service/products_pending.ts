import { Request, Response } from "express";
import product_pendingEntity, { productPending } from "../models/product_pending";


export const getProductPending = async (req: Request, res: Response) => {
  try {
    const itemsFavorits = await product_pendingEntity.findAll();
    return res.status(200).json(itemsFavorits);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createProductPending = async (req: Request, res: Response) => {
  try {
    console.log("BODY createItem", req.body.data);
    const productPending: productPending = req.body.data;

    const newproduct = await product_pendingEntity.create({
      fk_idUser:productPending.fk_idUser,
      fk_idProduct:productPending.fk_idProduct
    });
    return res.status(200).json(newproduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteProductPending = async (req: Request, res: Response) => {
  try {
    console.log("BODY deleteProduct", req.body);
    const item = await product_pendingEntity.findByPk(req.body.id);
    if (!item) {
      return res.status(404).json({
        message: `No existe el item ${req.body.id}`,
      });
    }
    await product_pendingEntity.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json(error);
  }
};




