import Produto from "./Produto";
import Cliente from "./Cliente";

export default class Venda{
    private _codigo:number;
    private _data:number;
    private _cliente:Cliente;
    private _produtos:Produto[];

    constructor(codigo:number, data:number, cliente:Cliente, produto:Produto[]){
        this._codigo=codigo;
        this._data=data;
        this._cliente=cliente;
        this._produtos=produto;
    }
    get codigo(): number {
        return this._codigo;
    }
    get data(): number {
        return this._data;
    }
    get cliente(): Cliente {
        return this._cliente;
    }
    get produtos(): Produto[] {
        return this._produtos;
    }
    calcularTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}