let idade = 19;
let nome = "Samara"
if( idade == 19) {
    console.log("Pode Entrar")
}

if (nome == "Samara" && idade > 10){
    console.log("Liberado")
}

// Estrutura de repetição
//while
let x = 10;

while(x > 0){
    console.log('O x é ' + x);
    x = x - 1;
}

// do while

let z = 100;

do {
    console.log(z / 2);
    z = z - 10;
} while(z >= 0);

// For

for (let i = 0; i < 40; i=i+3){
    console.log(i)
    console.log(`A soma de i com 2 é: ${i + 2}`)
}


// Estrutura condicional switch/case

switch(nome) {
    case "João":
        console.log("O seu nome é João");
        break;
    case "Marcos":
        console.log("O seu nome é Marcos");
    default:
        console.log("O seu nome não é João nem Marcos");
        break
}