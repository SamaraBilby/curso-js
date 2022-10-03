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

//Classes: Construtor por new

function Cachorro(raca){
    this.raca = raca;
}

let husky = new Cachorro("Husky");
console.log(husky.raca)