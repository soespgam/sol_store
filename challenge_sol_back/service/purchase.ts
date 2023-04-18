import { Request, Response } from "express";
import purchaseEntity, { purchase } from "../models/purchase";
import UserEntity from "../models/user";
import ProductsEntity from "../models/product";

export const getItem = async (req: Request, res: Response) => {
  try {
    const purchase: purchase = req.body;
    const itemsPurchase = await purchaseEntity.findAll({
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
      fk_idUser:purchase.fk_idUser
    },
    });
    return res.status(200).json(itemsPurchase);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createPurchase = async (req: Request, res: Response) => {
  try {
    console.log("BODY createItem", req.body.data);
    const purchase: purchase  = req.body.data;

    const newPurchase = await purchaseEntity.create({
      fk_idUser:purchase.fk_idUser,
      fk_idProduct:purchase.fk_idProduct,
      amount:purchase.amount,
      status:purchase.status
    });
    return res.status(200).json(newPurchase);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deletePurchase = async (req: Request, res: Response) => {
  try {
    console.log("BODY deletePurchase", req.body);
    const item = await purchaseEntity.findByPk(req.body.id);
    if (!item) {
      return res.status(404).json({
        message: `No existe el item ${req.body.id}`,
      });
    }
    await purchaseEntity.destroy({
      where: {
        id: req.body.id,
      },
    });
    return res.status(200).json(item);
  } catch (error) {
    return res.status(500).json(error);
  }
};
