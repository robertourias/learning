import Veiculos from './Veiculos'

export default class Carro extends Veiculos {
    private numeroDePortas: number

    constructor(modelo: string, portas: number) {
        super()
        this.modelo = modelo
        this.numeroDePortas = portas
    }

}