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