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