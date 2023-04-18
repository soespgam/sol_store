"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enterprises_route_1 = __importDefault(require("../controller/enterprises.route"));
const item_routes_1 = __importDefault(require("../controller/item.routes"));
const user_route_1 = __importDefault(require("../controller/user.route"));
const connection_1 = __importDefault(require("../models/connection"));
const express = require("express");
const cors = require('cors');
class Server {
    get Connection() {
        return this.connection;
    }
    constructor() {
        this.apiPaths = {
            enterprises: "/api/enterprises",
            item: "/api/item",
            user: "/api/user"
        };
        this.app = express();
        this.port = process.env.PORT || "8000";
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }
    dbConnection() {
        this.connection = connection_1.default;
    }
    routes() {
        this.app.use(this.apiPaths.enterprises, enterprises_route_1.default);
        this.app.use(this.apiPaths.item, item_routes_1.default);
        this.app.use(this.apiPaths.user, user_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map