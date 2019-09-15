import { DAOInterface } from './DAOInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDAO implements DAOInterface {
    nomeTabela: string = "tb_concessionaria"

    insert(object: any): boolean {
        console.log("Implementação da Logina de Insert");
        return true
    }

    update(object: any): boolean {
        console.log("Implementação da Logina de update");
        return true
    }

    delete(id: number): Concessionaria {
        console.log("Implementação da Logina de delete");
        return new Concessionaria("", [])
    }

    selectItem(id: number): Concessionaria {
        console.log("Implementação da Logina de Select Item");
        return new Concessionaria("", [])
    }

    selectAll(): [Concessionaria] {
        console.log("Implementação da Logina de Select All");
        return [new Concessionaria("",[])]
    }
}