export interface DAOInterface<T> {
    nomeTabela: string

    insert(object: T): boolean
    update(object: T): boolean
    delete(id: number): T
    selectItem(id: number): T
    selectAll(): [T]
}