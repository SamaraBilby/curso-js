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