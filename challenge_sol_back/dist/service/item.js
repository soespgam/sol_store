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
exports.updateItem = exports.deleteItem = exports.createItem = exports.getItem = void 0;
const item_1 = __importDefault(require("../models/item"));
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODY getItem", req.body.body);
        const items = yield item_1.default.findAll({
            where: {
                enterprise: req.body.body.id,
            },
        });
        return res.status(200).json(items);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getItem = getItem;
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODY createItem", req.body.data);
        const item = req.body.data;
        const existItem = yield item_1.default.findOne({
            where: {
                name: item.name,
                enterprise: item.enterprise,
            },
        });
        if (existItem) {
            return res.status(400).json({
                message: `Ya existe item ${item.name}`,
            });
        }
        const newItem = yield item_1.default.create({
            name: item.name,
            enterprise: item.enterprise,
        });
        return res.status(200).json(newItem);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.createItem = createItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODY deleteItem", req.body);
        const item = yield item_1.default.findByPk(req.body.id);
        if (!item) {
            return res.status(404).json({
                message: `No existe el item ${req.body.id}`,
            });
        }
        yield item_1.default.destroy({
            where: {
                id: req.body.id,
            },
        });
        return res.status(200).json(item);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.deleteItem = deleteItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("BODY updateItem", req.body.body);
        const item = req.body.body;
        const resItem = yield item_1.default.findByPk(item.id);
        if (!resItem) {
            return res.status(404).json({
                message: `No existe el item ${req.body.id}`,
            });
        }
        yield item_1.default.update(item, {
            where: {
                id: item.id,
            },
        });
        return res.status(200).json(resItem);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.updateItem = updateItem;
//# sourceMappingURL=item.js.map