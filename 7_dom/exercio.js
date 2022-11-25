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
