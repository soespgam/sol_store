import { login,createUser,getUsers } from "../service/user";

import { Router } from "express";

const routerUser = Router();

routerUser.post("/login", login);
routerUser.get("/getUsers",getUsers)
routerUser.post("/createUser",createUser)
export default routerUser;
