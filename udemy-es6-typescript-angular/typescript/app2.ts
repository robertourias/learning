import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

let carroA = new Carro('Uno', 2)
let carroB = new Carro('Ecosport', 4)
let carroC = new Carro('Veloster', 3)

let listaCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaCarros)

let cliente = new Pessoa('Roberto', 'Ecosport', carroA)

// console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});


console.log(cliente.dizerCarroQueTem())