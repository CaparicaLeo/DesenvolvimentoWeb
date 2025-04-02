import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente {
  private _nome: string;
  private _cpf: number;
  private _data_nascimento: number;
  private _sexo: string;
  private _endereco: Endereco;
  private _telefones: Telefone[];

  constructor(
    nome: string,
    cpf: number,
    data_nascimento: number,
    sexo: string,
    rua: string,
    numeroEndereco: number,
    cidade: string,
    estado: string,
    ddd: string,
    numeroTelefone: number,
    tipo: string
  ) {
    this._nome = nome;
    this._cpf = cpf;
    this._data_nascimento = data_nascimento;
    this._sexo = sexo;
    this._endereco = new Endereco(rua, numeroEndereco, cidade, estado);
    this._telefones = [new Telefone(ddd, numeroTelefone, tipo)];
  }

  get nome(): string {
    return this._nome;
  }

  get cpf(): number {
    return this._cpf;
  }

  get dataNascimento(): number {
    return this._data_nascimento;
  }

  get sexo(): string {
    return this._sexo;
  }

  get endereco(): Endereco {
    return this._endereco;
  }

  get telefones(): Telefone[] {
    return this._telefones;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  set cpf(cpf: number) {
    this._cpf = cpf;
  }

  set dataNascimento(data: number) {
    this._data_nascimento = data;
  }

  set sexo(sexo: string) {
    this._sexo = sexo;
  }

  set endereco(endereco: Endereco) {
    this._endereco = endereco;
  }

  set telefones(telefones: Telefone[]) {
    this._telefones = telefones;
  }
}
