let numeros = [1, 3, 5, 8, 12];
 console.log(numeros);
let informacoes = ["Samara", 12, true, "Teste", 2];
console.log(informacoes);

console.log(numeros[4]);
console.log(informacoes[0]);
console.log(informacoes[informacoes.length - 1]);

let marca = "Nike";

        console.log(typeof marca.toUpperCase);
        console.log(marca.toUpperCase());


let pessoa = {
            nome: "Samara",
            profissao: "Desenvolvedora Front End",
            idade: 33,
            softSkill: function(){
                console.log('proatividade, dinâmica, comunicativa, focado')
            }    
        }

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.softSkill();

let carro = {
        marca: "VW",
        portas: 4,
        eletrico: false,
        motor: 1.0
    }
    console.log(carro.portas);

    delete carro.portas;
    
    console.log(carro.portas);
    
    carro.tetoSolar = true;
    
    console.log(carro.tetoSolar);

    console.log(carro);

    let objetoA = {
        prop1: 'teste',
        prop2: 'testando',
    }
    let objetoB = {
        prop3: 'propriedade'
    }

    Object.assign(objetoA, objetoB)
    console.log(objetoA);
    
    // Verificando a chave de objeto

   /* let objetoA = {
        prop1: 'teste',
        prop2: 'testando',
    }*/

    console.log(Object.keys(objetoA))

  // Mutação (mutability)
  
 let objetoC = {
    pontos:10
 }

 let objetoD = objetoC

 let objetoE = {
    pontos: 10
 } 

 console.log(objetoC == objetoD);
 console.log(objetoC == objetoE);

 // Loop em Arrays

 let numbers = [1, 5, 10, 15, 20, 25];

 for(let i = 0; i <= numbers.length; i++){
    console.log(numbers[i]);
 }

 // métodos de array: push e pop

 let pessoas = ['Samara', 'Lindsay', 'Zoe'];
 let pessoasRemovidas = pessoas.pop();

 console.log(pessoas)
 console.log(pessoasRemovidas);

 pessoas.push("Polyana")
 console.log(pessoas);

 // métodos de array: shift e unshift

 let frutas = ['maça', 'melão', 'uva'];
 let frutaRemovida = frutas.shift();
 console.log(frutas);
 console.log(frutaRemovida);

 let frutaAdicionada = frutas.unshift("melancia");
 console.log(frutas);

 //Métodos de array: indexOf e lastIndexOf

 let arrayNum = [0, 1, 2, 1, 0, 5, 6];

 console.log(arrayNum.indexOf(1));
 console.log(arrayNum.lastIndexOf(1));

 //Métodos de array: slice

   console.log(arrayNum.slice(2, 3))
   console.log(arrayNum.slice(3))

   //Métodos de array: forEach

   arrayNum.forEach(num => {
    console.log(num);
   });

   let car = ['BMW', 'Fiat', 'Audi'];
   console.log(car.includes('Fiat'));
   console.log(car.includes('Renault'));

   //Métodos de array: reverse

   console.log(arrayNum.reverse());

   // Métodos de string: trim

   let texto = ' \n  teste  \n';

   console.log(texto.trim());


// Métodos de string: padStart 

let milAoContrario = '1';

console.log(milAoContrario.padStart(4, '0'));

// Métodos de string: split

let frase = "O rato roeu a roupa do rei de roma"
let palavras = frase.split(" ");

console.log(palavras)

let fraseMontada = palavras.join('<->');
console.log(fraseMontada);

//Métodos de string: repeat

console.log('teste '.repeat(5))

// REST OPERATOR

function imprimirNumeros(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(9, 25, 18, 125, 588, 98);


// Destructuring com objetos

const person ={
    nome: "Zoe",
    lastName: "Bilby"
}

const {nome: Scooby, lastName: Doo} = person

console.log(Scooby);
console.log(Doo)