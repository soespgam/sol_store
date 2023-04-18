import { Router } from "express";
import { getproductFavorits,createProductFavorits,deleteProductFavorits } from "../service/products_favorites";


const routerProduct_favorite = Router();

routerProduct_favorite.post("/getproductFavorits", getproductFavorits);
routerProduct_favorite.post("/createProductFavorits",createProductFavorits);
routerProduct_favorite.delete("/deleteProductFavorits", deleteProductFavorits);

export default routerProduct_favorite;