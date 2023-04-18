import { Router } from "express";
import { getProduct,createProduct,deleteProduct,getProductFavorite } from "../service/product";

const routerProducts = Router();

routerProducts.get("/getProduct", getProduct);
routerProducts.post("/createProduct",createProduct);
routerProducts.delete("/deleteProduct", deleteProduct);
routerProducts.get("/getProductFavorite", getProductFavorite);

export default routerProducts;
