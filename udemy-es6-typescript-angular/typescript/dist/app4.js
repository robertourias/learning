"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {ConcessionariaDAO} from './ConcessionariaDAO';
var DAO_1 = require("./DAO");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
// import { PessoaDAO } from './PessoaDAO';
// let dao: ConcessionariaDAO = new ConcessionariaDAO();
// let dao2: PessoaDAO = new PessoaDAO();
var dao3 = new DAO_1.DAO();
var dao4 = new DAO_1.DAO();
var concessionaria = new Concessionaria_1.default("", []);
var pessoa = new Pessoa_1.default("", "", new Carro_1.default("", 0));
dao3.insert(concessionaria);
dao4.update(pessoa);
