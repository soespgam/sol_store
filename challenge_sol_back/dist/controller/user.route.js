"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../service/user");
const express_1 = require("express");
const routerUser = (0, express_1.Router)();
routerUser.post("/login", user_1.login);
exports.default = routerUser;
//# sourceMappingURL=user.route.js.map