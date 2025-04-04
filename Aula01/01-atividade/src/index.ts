import Cliente from "./models/Cliente";
import Venda from "./models/Venda";
import Produto from "./models/Produto";
import Endereco from "./models/Endereco";
import Telefone from "./models/Telefone";

const endereco = new Endereco("Rua A", 123, "Cidade X", "Estado Y");
const telefone1 = new Telefone("11", 999999999, "Celular");
const telefone2 = new Telefone("11", 988888888, "Residencial");
const cliente = new Cliente("João Silva", 12345678900, 19900101, "M", endereco, [telefone1, telefone2]);

const produto1 = new Produto(1, "Notebook", 3500);
const produto2 = new Produto(2, "Mouse", 150);
const venda = new Venda(101, 20240404, cliente, [produto1, produto2]);

console.log("Total da venda:", venda.calcularTotal());


