function imprimirnNoConsole(){
    console.log("Imprimir no navegado");
}
imprimirnNoConsole();

let soma = function(a, b) {
    return a + b;
}

console.log(soma(3, 5));

let saudacao = function(nome){
    if(nome == "Matheus"){
        return "Olá Matheus"
    } else{
        return `Olá ${nome}`
    }
}
console.log(saudacao("Samara"));

// escopo de função
let n = 10; 
    const numero = function() { 
            let n = 25;
            console.log(n);
        }
    numero();
    console.log(n);

    let x = 10;
    if(true)
    {
            let x = 20;
            console.log(x); //escopo if
    }
    console.log(x) // escopo geral

// escopo aninhado (Nested Scopes)

let y = 5;

const multiplicar = function(n){
    let y = n * 2;
    console.log(y) // escopo da função

    if (y == 10) {
        let y = 55;
        console.log(y) // escopo if dentro da função
    }
}

multiplicar(5)

//Arrow Functions

const parOuImpar = (n) => {
    return n % 2;
}
console.log(parOuImpar(3))

const raizQuadrada = (x) => {
    return x * x
}
const raizQuadrada2 = n => n * n;

console.log(raizQuadrada(2));
console.log(raizQuadrada2(2));

// argumentos opcionais
function nomeComIdade(nome, idade) {
    if(idade === undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log("Seu nome é " + nome + "e você " + idade + " anos")
    }
}
nomeComIdade("João")
nomeComIdade("Lindsay", 8)

//Argumentos com valor default

function repetirFrase(frase, n=2) {
    for (let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
}

repetirFrase("Testando", 5);
repetirFrase("Só duas vezes");

//Closure 

function armazenarSoma(x) {
    return y => x + y;
}
    let soma1 = armazenarSoma(3);
    console.log(soma1);
    console.log(soma1(5));
    let soma2 = armazenarSoma(5);
    console.log(soma2(10));


    // Recursion

    function retornarNumeroPar(n){
        if(n % 2 == 0) {
            console.log("n agora é para: " + n);
        } else {
            console.log(n);
            retornarNumeroPar(n - 1);
        }
    }

    retornarNumeroPar(5);

    