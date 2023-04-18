"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enterprises_1 = require("../controllers/enterprises");
const routerEnterprises = (0, express_1.Router)();
routerEnterprises.get("/getEnterprises", enterprises_1.getEnterprises);
routerEnterprises.post("/registerEnterprise", enterprises_1.createEnterprises);
routerEnterprises.post("/updateEnterprise", enterprises_1.updateEnterprises);
routerEnterprises.post("/deleteEnterprise", enterprises_1.deleteEnterprises);
exports.default = routerEnterprises;
//# sourceMappingURL=enterprises.route.js.map