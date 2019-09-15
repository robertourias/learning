"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var carro = new Carro_1.default('Veloster', 3);
var carroB = new Carro_1.default('Ford Ecosport', 4);
var carroC = new Carro_1.default('Uno Mille', 2);
var moto = new Moto_1.default();
var listaDeCarros;
moto.acelerar();
console.log(carro);
console.log(moto);
var concessionaria = new Concessionaria_1.default("", []);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
