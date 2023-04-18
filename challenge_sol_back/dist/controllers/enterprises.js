"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEnterprises = exports.deleteEnterprises = exports.createEnterprises = exports.getEnterprises = void 0;
const enterprises_1 = __importDefault(require("./../models/enterprises"));
const getEnterprises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enterprises = yield enterprises_1.default.findAll();
        return res.status(200).json(enterprises);
    }
    catch (error) {
        return res.status(500).json(error);
    }
    /* connection.connection.query(
      "SELECT * FROM enterprises",
      (err: any, results: any) => {
        if (err) {
          console.error("Error querying database:", err);
          return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
      }
    ); */
});
exports.getEnterprises = getEnterprises;
const createEnterprises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enterprise = req.body.data;
        console.log("BODY createEnterprises", enterprise);
        const enterpriseExist = yield enterprises_1.default.findOne({
            where: {
                nit: enterprise.nit,
            },
        });
        if (enterpriseExist) {
            return res.status(400).json({
                message: `Ya existe la empresa con el nit ${enterprise.nit}`,
            });
        }
        const newEnterprise = enterprises_1.default.create({
            name: enterprise.name,
            address: enterprise.address,
            nit: enterprise.nit,
            phone: enterprise.phone,
        });
        return res.status(200).json(newEnterprise);
    }
    catch (error) {
        return res.status(500).json(error);
    }
    /* const enterprise: Enterprises = req.body.data;
    connection.connection.query(
      `INSERT INTO enterprises (name,nit,phone,address) VALUES ('${enterprise.name}','${enterprise.nit}','${enterprise.phone}','${enterprise.address}');`,
      (err: any, results: any) => {
        if (err) {
          console.error("Error querying database:", err);
          return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
      }
    ); */
});
exports.createEnterprises = createEnterprises;
const deleteEnterprises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODY deleteEnterprises", req.body);
        const enterpriseExist = yield enterprises_1.default.findByPk(req.body.data.id);
        if (!enterpriseExist) {
            return res.status(400).json({
                message: `Ya existe la empresa ${req.body.data.id}`,
            });
        }
        yield enterprises_1.default.destroy({
            where: {
                id: req.body.data.id,
            },
        });
        return res.status(200).json(enterpriseExist);
    }
    catch (error) {
        return res.status(500).json(error);
    }
    /* connection.connection.query(
      `DELETE FROM enterprises WHERE id='${req.body.id}'`,
      (err: any, results: any) => {
        if (err) {
          console.error("Error querying database:", err);
          return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
      }
    ); */
});
exports.deleteEnterprises = deleteEnterprises;
const updateEnterprises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODY updateEnterprises", req.body.body);
        const enterprise = req.body.body;
        const resEnterprise = yield enterprises_1.default.findByPk(enterprise.id);
        //console.log("RES FIND PK", resEnterprise)
        if (!resEnterprise) {
            return res.status(404).json({
                message: `No existe la empresa ${req.body.id}`,
            });
        }
        yield enterprises_1.default.update(enterprise, {
            where: {
                id: enterprise.id,
            },
        });
        return res.status(200).json(resEnterprise);
    }
    catch (error) {
        return res.status(500).json(error);
    }
    /* const enterprise: Enterprises = req.body.body;
    connection.connection.query(
      `UPDATE enterprises SET name ='${enterprise.name}', nit = '${enterprise.nit}', phone = '${enterprise.phone}',address='${enterprise.address}'  WHERE id='${enterprise.id}'`,
      (err: any, results: any) => {
        if (err) {
          console.error("Error querying database:", err);
          return res.status(500).send("Error querying database.");
        }
        return res.status(200).send(results);
      }
    ); */
});
exports.updateEnterprises = updateEnterprises;
//# sourceMappingURL=enterprises.js.map