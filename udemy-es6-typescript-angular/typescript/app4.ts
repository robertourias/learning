// import {ConcessionariaDAO} from './ConcessionariaDAO';
import { DAO } from './DAO';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import Carro from './Carro';
// import { PessoaDAO } from './PessoaDAO';

// let dao: ConcessionariaDAO = new ConcessionariaDAO();
// let dao2: PessoaDAO = new PessoaDAO();
let dao3: DAO<Concessionaria> = new DAO<Concessionaria>();
let dao4: DAO<Pessoa> = new DAO<Pessoa>();
let concessionaria= new Concessionaria("", []);
let pessoa = new Pessoa("", "", new Carro("", 0))



dao3.insert(concessionaria);
dao4.update(pessoa);