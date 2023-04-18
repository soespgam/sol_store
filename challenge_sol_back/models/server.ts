import { Application } from "express";
import routerPurchase from "../controller/purchase.route";
import routerProducts from "../controller/products.route";
import routerUser from "../controller/user.route";
import routerProduct_favorite from "../controller/product_favorite.route";
import routerProduct_pending from "../controller/product_pending.route";

import db from "../models/connection";

const express = require("express");
const cors = require('cors');
class Server {
  public app: Application;
  private port: string;
  public connection: any;

  private apiPaths = {
    user: "/api/user",
    product:"/api/product",
    product_favorite:"/api/product_favorite",
    product_pending:"/api/product_pending",
    purchase:"/api/purchase",
  };

  public get Connection(): any {
    return this.connection;
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  private dbConnection(): void {
    this.connection = db;
  }
  public routes(): void {
    this.app.use(this.apiPaths.product, routerProducts);
    this.app.use(this.apiPaths.purchase, routerPurchase);
    this.app.use(this.apiPaths.user, routerUser);
    this.app.use(this.apiPaths.product_favorite,routerProduct_favorite)
    this.app.use(this.apiPaths.product_pending,routerProduct_pending)
  }
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto " + this.port);
    });
  }
}

export default Server;
