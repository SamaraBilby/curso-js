// exercicio 01

function primeiraFuncao() {
    console.log("Hello World");
}

primeiraFuncao();

// exercicio 02

function funcaoIdadade(idade){
    console.log(`Você tem ${idade} anos!`);
};

funcaoIdadade(15);
funcaoIdadade(33)
funcaoIdadade(66)

//exercicio 03

function somaDoisNum(x, y) {
    return x + y;
};

console.log(somaDoisNum(5, 7));

// exercicio 04 

function numAleatorio(num){
    return Math.floor(Math.random() * num) + 1;
}

console.log(numAleatorio(25));
console.log(numAleatorio(10));

// exericio 05

function autoEscola(idade) {
    if(idade >= 18) {
        console.log("Pode entrar na auto escola!!");
    } else{
        console.log(`Você ainda não entrar na auto escola tente novamente daqui ${18 - idade } anos!!`)
    }
}

autoEscola(15);
autoEscola(22);
autoEscola(16);
autoEscola(18);

// exercio 06

function tipoDeDado(dado){
    return typeof(dado);
}

console.log(tipoDeDado("Zoe - calopsita"));
console.log(tipoDeDado(8 <= 10));
console.log(tipoDeDado(125));

// exercicio 07 

function transformarNumPositivo(numNegativo){
    return Math.abs(numNegativo);
}

console.log(transformarNumPositivo(-15))

// exercicio 08

function verificarTamanhoTexto(texto){
    if (texto.length > 10) {
        console.log("Texto muito longo");
    }
    else{
        console.log("Texto dentro do limite");
    }
}
verificarTamanhoTexto("Zoe come muitas sementes");
verificarTamanhoTexto("Zoe Bird");

// exercicio 09

function potencia(base, expoente){
    return Math.pow(base, expoente);
}

console.log(potencia(5, 7));

// exercio 10

function valoresPares(num){
    for (let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(`O númeto ${i} é par!`)
        } else {
            console.log(`O número ${i} é impar!`)
        }
        
    }
}
valoresPares(23);

