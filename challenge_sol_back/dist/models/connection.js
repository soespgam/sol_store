"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("liteth", "root", "moar2314", {
    host: "34.136.39.237",
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=connection.js.map