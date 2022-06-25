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
console.log(saudacao("Samara"))