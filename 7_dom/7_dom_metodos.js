const calculos = {
    media: function(a, b){
        return (a + b) / 2;
    },

    soma: function(a, b){
        return a + b;
    },

    subtracao: function(a, b){
        return a - b;
    },

    multiplicacao: function(a, b){
        return a * b;
    },

    divisao: function(a, b){
        return a / b;
    },

    //this
    
    setMedia: function(media){
        this.media = media;
    },
    getMedia: function(a, b, c){
        this.media =(a + b + c) / 3
        return this.media;
    }
}

console.log(calculos.media(24,3));
console.log(calculos.soma(24,3));
console.log(calculos.subtracao(24,3));
console.log(calculos.multiplicacao(24,3));
console.log(calculos.divisao(24,3));


//this
calculos.getMedia(3, 5, 7);
console.log(calculos.media);

// Prototype

let pessoa ={
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty("maos"));

let pessoaNova = Object.create(pessoa);
console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);
console.log(pessoaNova.hasOwnProperty("maos"));

// Classes

let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log("Au Au")
    }
}

let salcicha = Object.create(cachorro);
salcicha.latir();
salcicha.raca = "Salcicha";

console.log(salcicha.raca);
console.log(cachorro.raca);

// Class Construtor por meio de função

function criarCachorro(raca){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

let doberman = criarCachorro("Doberman");
console.log(doberman.raca);

//Classes: Construtor por new - método mais utilizado

function Cachorro(raca){
    this.raca = raca;
}

let husky = new Cachorro("Husky");
console.log(husky.raca);

console.log(husky.raca);

// métodos no prototype

Cachorro.prototype.uivar= function() {
    console.log("AAAuuuUUU");
}

husky.uivar();

// Construtor na classe (ES6)

class Dog {
    constructor(raca, patas, cor) {
        this.raca =raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au Au")
    }
}

// mais sobre classes
// Não podemos adicionas propriedades na classe, só via prototype
// a classe só aceita métodos;

Dog.prototype.patas = 4;//Override


let salcicha2 = new Dog("Salcicha", 4, "Marrom");
    console.log(salcicha2);
    console.log(salcicha2.patas)
    console.log(Dog)

    salcicha2.latir()

//Override(substituir) nas propriedades do prototype
    Dog.prototype.raca = "SRD";
//Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no prototype
//podemos substituir a do prototype depois que a classe é instanciada


// Symbols

/* 
1. Propriedades únicas que , nãoo podem ser alteradas e nem criadas duas vezes 
2. Podemos utilizar como uma constante, só que para propriedade de objeto
*/

class Welpe {
    constructor(raca) {
        this.raca = raca;
    }
}

let patas = Symbol();
Welpe.prototype[patas] = 4;

let golden = new Welpe("Golden Retriever")

console.log(Welpe.prototype[patas]);
console.log(golden[patas]);

// Getters e Setters

/*

1. Get: serve para resgatar o valor de uma propriedade;
2. Set: serve para alterar o valor de uma propriedade;

*/

class Animal{
    constructor(raca) {
        this.raca = raca;
    }

    get varRaca(){
        return "A raça é " + this.raca;
    }

    set novaRaca(value){
        this.raca = value;
    }
}

let kingKong =  new Animal("King Kong")
console.log(kingKong.varRaca);
kingKong.novaRaca = "Girafa";
console.log(kingKong.varRaca)

//Herança(inheritance)

/* 
1. Uma classe pode herdar propriedades de outra class por herança 
2.Por isso utilizamos extends;
*/


class Mamifero{
    constructor(color){
        this.color = color;
    }
}

class Dog_2 extends Mamifero{
    constructor(color, especie){
        super(color, color);
        this.especie = especie;
    }
}

let pug = new Dog_2("Marrom", "Pug")
console.log(pug);

// instanceof operator

// podemos verificar quem é o pai do objeto utilizando o instanceof

console.log(new Dog_2 instanceof Mamifero)