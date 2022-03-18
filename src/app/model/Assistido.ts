import { Contato } from './Contato';
export interface Assistido {


    id: number;
    nome: string;
    cpfCnpj: string;
    cep: number;
    logradouro: string;
    bairro: string;
    cidade: string;
    contatos: Contato[];
}
