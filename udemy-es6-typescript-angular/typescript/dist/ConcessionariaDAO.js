"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = "tb_concessionaria";
    }
    ConcessionariaDAO.prototype.insert = function (object) {
        console.log("Implementação da Logina de Insert");
        return true;
    };
    ConcessionariaDAO.prototype.update = function (object) {
        console.log("Implementação da Logina de update");
        return true;
    };
    ConcessionariaDAO.prototype.delete = function (id) {
        console.log("Implementação da Logina de delete");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDAO.prototype.selectItem = function (id) {
        console.log("Implementação da Logina de Select Item");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDAO.prototype.selectAll = function () {
        console.log("Implementação da Logina de Select All");
        return [new Concessionaria_1.default("", [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
