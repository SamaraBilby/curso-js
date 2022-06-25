// exercício 06

let nome = "Lindsay";
let idade = 33;
let happy = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof happy);


// exercício 07

if( idade >= 18 ) {
    console.log("Pode entrar!!")
}
else{
    console.log("Não pode entrar!!")
}

// exercício 08

if(nome === "Samara") {
    console.log(`Olá ${nome}, tudo bem?`)

} else {
    console.log(`Oi, ${nome} !!`)
}

// exercício 09

function potencia (a, b) {
    return Math.pow(a, b)
}
console.log(potencia(2, 6))

// exercio 10 

let velocidadeCarro = 100;

if (velocidadeCarro > 80) {
    console.log("Carro acima do limite de velocidade");
} else if( velocidadeCarro === 80){
    console.log("Carro no limite de velocidade");
} else {
    console.log("Carro abaixo do limite de velocidade");
}

// exercio 11

let idedeCondutor = 33;
let idCnh = "não";

if (idade < 18 && idCnh === "não") {
    console.log("Não pode dirigir veículos automotores");
} else if (idade >= 18 && idCnh === "não") {
    console.log("Não pode dirigir veículos automotores");
} else {
    console.log("Pode dirigir veículos automotores");
}

// exercio 12

let n = 0;

while( n <= 10) {
    console.log ('o valo de n é :' + n);
    n = n + 1;
}

// exercico 13

for(let i = 100; i >= 50; i = i - 5){
    console.log(i)
}

// exercicio 14

for(let i = 0; i <= 50; i++){
    if( i % 2 == 0) {
        console.log(`O número ${i} é par`)
    } else {
        console.log(`O número ${i} é impar`)
    }
}

// exercio 15

for(let i = 1; i <= 50; i++){
    if (i % 2 == 0 && i != 1){
        console.log(`${i} não é primo`);
    } else if (i % i == 0 ) {
        console.log(`${i} é primo`);
    }
}