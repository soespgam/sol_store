"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./../controllers/item");
const express_1 = require("express");
const item_2 = require("../controllers/item");
const routerItem = (0, express_1.Router)();
routerItem.post("/getItem", item_2.getItem);
routerItem.post("/registerItem", item_1.createItem);
routerItem.post("/updateItem", item_1.updateItem);
routerItem.delete("/deleteItem", item_1.deleteItem);
exports.default = routerItem;
//# sourceMappingURL=item.routes.js.map