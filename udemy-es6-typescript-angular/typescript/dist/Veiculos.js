"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculos = /** @class */ (function () {
    function Veiculos() {
        this.modelo = '';
        this.velocidade = 0;
    }
    Veiculos.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculos.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculos.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculos;
}());
exports.default = Veiculos;
