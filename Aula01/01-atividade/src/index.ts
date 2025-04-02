import Cliente from "./models/Cliente";
import Venda from "./models/Venda";
import Produto from "./models/Produto";
import * as readline from "readline";

//Simulando um BD
let clientes: Cliente[];
let produtos: Produto[];
let vendas: Venda[];

//Realizando a entrada no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function criarCliente() {
    rl.question("Nome: ", (answer)=>{
        var nome:string = answer.toString();
    });
    rl.question("CPF: ", (answer)=>{
        var cpf:number = Number(answer.trim());
    });
    rl.question("Data de nascimento (DDMMAAAA): ", (answer)=>{
        var data_nascimento:number = Number(answer.trim());
    });
    
}
function verTodosCliente() {}
//function buscaUmCliente(): Cliente {}
function criarProduto() {}
function verTodosProdutos() {}
//function buscaUmProduto(): Produto {}
function criarVenda() {}
function verTodasVendas() {}

function main() {
  console.log("Atividade 01");
  console.log("1. Criar Cliente");
  console.log("2. Ver todos os Clientes");
  console.log("3. Criar Produto");
  console.log("4. Ver todos os produtos");
  console.log("5. Realizar venda");
  console.log("6. Ver todas as vendas");
  console.log("0. Sair");
  rl.question("Escolha sua opção: ", (answer) => {
    switch (answer.toString()) {
      case "1":
        criarCliente();
        break;
      case "2":
        verTodosCliente();
        break;
      case "3":
        criarProduto();
        break;
      case "4":
        verTodosProdutos();
        break;
      case "5":
        criarVenda();
        break;
      case "6":
        verTodasVendas();
        break;
      case "0":
        rl.close();
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
    main(); // Chama novamente a função para manter o loop
  });
}

main();
