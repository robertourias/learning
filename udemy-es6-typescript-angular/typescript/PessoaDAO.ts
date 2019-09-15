import { DAOInterface } from './DAOInterface';
import Pessoa from './Pessoa';
import Carro from './Carro';

export class PessoaDAO implements DAOInterface {
    nomeTabela: string = "tb_concessionaria"

    insert(object: any): boolean {
        console.log("Implementação da Logina de Insert");
        return true
    }

    update(object: any): boolean {
        console.log("Implementação da Logina de update");
        return true
    }

    delete(id: number): Pessoa {
        console.log("Implementação da Logina de delete");
        return new Pessoa("", "", new Carro("", 0))
    }

    selectItem(id: number): Pessoa {
        console.log("Implementação da Logina de Select Item");
        return new Pessoa("", "", new Carro("", 0))
    }

    selectAll(): [Pessoa] {
        console.log("Implementação da Logina de Select All");
        return [new Pessoa("", "", new Carro("", 0))]
    }
}