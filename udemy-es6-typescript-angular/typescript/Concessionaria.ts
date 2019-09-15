import { ConcessionariaInterface } from './ConcessionariaInterface'
import Carro from './Carro'

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaCarros
    }

    public fornecerHorariosDeFuncionamento(): string {
        return 'De segunda a sexta das 8 as 18 e sabado das 8 as 12h'
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}