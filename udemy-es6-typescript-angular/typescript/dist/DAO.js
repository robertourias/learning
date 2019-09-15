"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = "tb_concessionaria";
    }
    DAO.prototype.insert = function (object) {
        console.log("Implementação da Logina de Insert");
        return true;
    };
    DAO.prototype.update = function (object) {
        console.log("Implementação da Logina de update");
        return true;
    };
    DAO.prototype.delete = function (id) {
        console.log("Implementação da Logina de delete");
        return Object();
    };
    DAO.prototype.selectItem = function (id) {
        console.log("Implementação da Logina de Select Item");
        return Object();
    };
    DAO.prototype.selectAll = function () {
        console.log("Implementação da Logina de Select All");
        return [Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
