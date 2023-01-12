// callback
// essa função recebe um dois parâmetros e o segundo é o tempo que será acusado
console.log("Ainda não chamou o callback");
setTimeout(function() {
    console.log("Chamou o Callback")
},2000);

console.log("Ainda não chamou o callback");

//Promises

let promessa = Promise.resolve(6+6);

console.log("Algum código");
console.log(promessa)
promessa.then((value) => console.log(`A soma é ${value}`));

//Falhas nas Promises

let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

promiseErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("Erro: " + reason));


//Rejeitando Promises

function verificarAlgo(num){
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log("O número é 2"));
        }
        else {
            reject(new Error("Falhou"))
        }
    })
}

verificarAlgo(4)
verificarAlgo(2)
verificarAlgo(1)


// Resolvendo várias Promises

const p1 = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve(100);
    }, 2500);
})

const p2 = Promise.resolve(5);

const p3 = new Promise(function(resolve,reject){
    resolve(10);
});

Promise.all([p1,p2,p3]).then((values) => console.log(values))


// Async functions

async function somar(a,b){
    return a + b;
}

somar(2,2).then(function(value){
    console.log(value);
});