import { Request, Response } from "express";
import UserEntity, { User } from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const listUsers = await UserEntity.findAll();
    return res.status(200).json(listUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user: User = req.body;
    console.log("USER LOGIN", user);
    const userExist = await UserEntity.findOne({
      where: {
        name: user.name,
        password: user.password
      },
    });
    if (userExist) {
      return res.status(200).json([userExist]); 
    }else{
      return res.status(404).json('No existe el usuario'); 
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log("BODY createItem", req.body.data);
    const user: User = req.body.data;

    const newUser = await UserEntity.create({
      name: user.name,
      password:user.password,
      role:user.role
    });
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};
