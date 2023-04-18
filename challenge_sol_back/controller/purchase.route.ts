import { Router } from "express";
import { getItem,createPurchase,deletePurchase } from "../service/purchase";


const routerPurchase = Router();

routerPurchase.post("/getItem", getItem);
routerPurchase.post("/createPurchase",createPurchase);
routerPurchase.delete("/deleteItemPurchase", deletePurchase);

export default routerPurchase;