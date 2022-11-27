//Exercíco 36

class ContaBanco {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }
}

let contaBanco = new ContaBanco(1000);

contaBanco.deposito(1000);

console.log(contaBanco.saldo);

contaBanco.saque(500);

console.log(contaBanco.saldo);

// Exercício 37

class Carrinho {
  constructor(itens, qtd, valorTotal) {
    this.itens = itens;
    this.qtd = qtd;
    this.valorTotal = valorTotal;
  }

  addItem(item) {
    let contador = 0;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].qtd += item.qtd;
      }
    }

    if (contador === 0) {
      this.itens.push(item);
    }

    this.qtd += item.qtd;
    this.valorTotal += item.preco * item.qtd;
  }

  removeItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        let obj = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });
        
        this.qtd -= this.itens[itemCarrinho].qtd;
        this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
        
        this.itens.splice(index,1)
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 01,
      nome: "Camisa",
      qtd: 1,
      preco: 20,
    },

    {
      id: 02,
      nome: "Calça",
      qtd: 2,
      preco: 50,
    },
  ],
  3,
  120
);

console.log(carrinho);

carrinho.addItem({ id: 01, nome: "Camisa", qtd: 2, preco: 20 });

console.log(carrinho);

carrinho.addItem({ id: 03, nome: "short", qtd: 1, preco: 42 });

console.log(carrinho);


carrinho.removeItem({ id: 03, nome: "short", qtd: 1, preco: 42 });

console.log(carrinho);



//exercicio 38

class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novaBairro(novaBairro){
        this.bairro = novaBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novaEstado(novaEstado){
        this.estado = novaEstado;
    }


}

let endereco = new Endereco("Rua Santa Monica", "Novo Mundo", "Curitiba", "PR");

console.log(endereco);

endereco.novaRua = "Rua dos Anjos";
endereco.novaBairro = "Compensa";
endereco.novaCidade = "Manaus";
endereco.novaEstado = "AM"
console.log(endereco);


// Exercício 39 

class Carro{
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }
     dirigir(km){
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;

     }

     abastecer(litros){
      this.gasolinaRestante += litros;
     }
}

let carro = new Carro("Renoult","Kwid",100, 14)

    console.log(carro)

    carro.dirigir(15);

    console.log(carro);

    carro.abastecer(100);

    console.log(carro);

    // Exercício 40

    class Conta{
      constructor(saldoCC, saldoCP, juros){
          this.saldoCC = saldoCC;
          this.saldoCP = saldoCP;
          this.juros = juros;
      }

      deposito(valor){
        this.saldoCC += valor;

      }

      saque(valor){
        this.saldoCC -= valor;
      }

      transferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor
      }

      transferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor
      }

      jurosAniversario() {
        let juros = (this.saldoCP * this.juros) / 100
        this.saldoCP += juros;
      }

    }

    class ContaEspecial extends Conta{
      constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros*2)
      }      
    }

    let conta = new Conta(1000, 500, 1);
    console.log(conta);

    conta.saque(50)

    console.log(conta)

    conta.deposito(500)

    console.log(conta)

    conta.transferenciaCP(1000)

    console.log(conta)

    conta.transferenciaCC(500)

    console.log(conta)

    conta.jurosAniversario()

    console.log(conta)

    let contaEspecial = new ContaEspecial(10000, 50000, 1);

    console.log(contaEspecial);

    contaEspecial.jurosAniversario();
    console.log(contaEspecial)