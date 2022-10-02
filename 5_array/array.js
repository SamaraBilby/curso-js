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

// Destructuring com Array

let nome = ['Zoe', 'Scooby', 'Poly']

let [nomeA, nomeB, nomeC] = nome;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);

// Exercícios

// Exercício 01
/* Criar um aray com 5 itens, acessar o item 1, 3 e 4 */

let arrayEx_01 = ["cat", "dog", "bird", "fish", "horse"];
console.log(arrayEx_01[0], arrayEx_01[2], arrayEx_01[3]);

//Exercício 02

/* Crie um array com 2 elemesntos e outro com 4. Imprima o números de elementos de
cada um na tela */

let arrayEl_01Ex_02 = [3, 5]
let arrayEl_02Ex_02 = [1, 2, 4, 6]

console.log(arrayEl_01Ex_02.length);
console.log(arrayEl_02Ex_02.length);


// Exercício 03

/* Criar um objeto onibus
Com as propriedades roda = 8;
limite de passageiro = 40;
portas = 2

imprima todas as propriedades no console;
*/

let onibus_03 = {
    rodas: 8,
    max_passageiro: 40,
    portas: 2
}

console.log(onibus_03.rodas);
console.log(onibus_03.max_passageiro);
console.log(onibus_03.portas);

// Exercício 04

/* Adicione a propriedade janelas no objeto onibus, com o valor 20
Delete a propriedade rodas
Imprima a propriedade janelas no console
*/

onibus_03.janelas=20;

console.log(onibus_03)

delete onibus_03.rodas;

console.log(onibus_03);
console.log(onibus_03.janelas);

// Exercício 05

/* Crie um array com 5 nomes, 
incluindo o seu
Verifique se o seu nome existe no array
Se existir imprima alguma mensagem no console
*/

let names_Ex05 = ["Andrio", "Lulu", "Samara", "Lindsay", "Terezinha"];

if(names_Ex05.includes("Samara")){
    console.log(names_Ex05[names_Ex05.indexOf("Samara")]);
}

// Exercício 06

/* Crie dois arrays, um com mais de 5 elementos e outro com menos
Faça uma função que verifica o número de elementos
Se possuir menos que 5, imprima "Poucos elementos"
Se tiver mais, imprima "Muitos elementos"
*/

let array1_EX06 = ["cama", "guarda-roupa", "roupas"];
let array2_EX06 = ["geladeira", "fogão", "panela", "cafeteria", "xícaras", "frutas", "bolo"];

function quantidadeElementosArr(array){
    if(array.length < 5){
        console.log("Poucos elementos");
    }
    else{
        console.log("Muitos Elementos");
    }
}

quantidadeElementosArr(array1_EX06);
quantidadeElementosArr(array2_EX06);




