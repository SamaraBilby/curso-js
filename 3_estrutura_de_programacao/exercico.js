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