import Concessionaria from './Concessionaria'
import Carro from './Carro'
import Moto from './Moto'

let carro = new Carro('Veloster', 3);
let carroB = new Carro('Ford Ecosport', 4);
let carroC = new Carro('Uno Mille', 2);
let moto = new Moto();
let listaDeCarros: Array <Carro>;


moto.acelerar()

console.log(carro);
console.log(moto);

let concessionaria = new Concessionaria("", [])

console.log(concessionaria.fornecerHorariosDeFuncionamento())