"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nomeTabela = "tb_concessionaria";
    }
    PessoaDAO.prototype.insert = function (object) {
        console.log("Implementação da Logina de Insert");
        return true;
    };
    PessoaDAO.prototype.update = function (object) {
        console.log("Implementação da Logina de update");
        return true;
    };
    PessoaDAO.prototype.delete = function (id) {
        console.log("Implementação da Logina de delete");
        return new Pessoa_1.default("", "", new Carro_1.default("", 0));
    };
    PessoaDAO.prototype.selectItem = function (id) {
        console.log("Implementação da Logina de Select Item");
        return new Pessoa_1.default("", "", new Carro_1.default("", 0));
    };
    PessoaDAO.prototype.selectAll = function () {
        console.log("Implementação da Logina de Select All");
        return [new Pessoa_1.default("", "", new Carro_1.default("", 0))];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
