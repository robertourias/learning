import { DAOInterface } from './DAOInterface';

export class DAO<T> implements DAOInterface<T> {
    nomeTabela: string = "tb_concessionaria"

    insert(object: T): boolean {
        console.log("Implementação da Logina de Insert");
        return true
    }

    update(object: T): boolean {
        console.log("Implementação da Logina de update");
        return true
    }

    delete(id: number): T {
        console.log("Implementação da Logina de delete");
        return Object()
    }

    selectItem(id: number): T {
        console.log("Implementação da Logina de Select Item");
        return Object()
    }

    selectAll(): [T] {
        console.log("Implementação da Logina de Select All");
        return [Object()]
    }
}