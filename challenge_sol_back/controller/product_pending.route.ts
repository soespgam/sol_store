import { createProductPending, getProductPending, deleteProductPending } from '../service/products_pending';
import { Router } from "express";


const routerProduct_pending = Router();

routerProduct_pending.get("/getProductPending", getProductPending);
routerProduct_pending.post("/createProductPending",createProductPending);
routerProduct_pending.delete("/deleteProductPending", deleteProductPending);
export default routerProduct_pending;