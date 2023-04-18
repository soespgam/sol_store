"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const sequelize_1 = require("sequelize");
const ItemEntity = connection_1.default.define("item", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    enterprise: {
        type: sequelize_1.DataTypes.STRING,
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});
exports.default = ItemEntity;
//# sourceMappingURL=item.js.map