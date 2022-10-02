let pessoa = {
   "nome": "Samara",
   "age": 33,
   "position": "Developer",
   "languages": ["JavaScript", "PHP"]
}

console.log(pessoa.nome)

let car = {
    "brand": "BMW",
    "wheels": 4,
    "doors": 2,
    "type": "Sedan"
}

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson);


let aluno = {
    "nome": "Lindsay",
    "serie": "4 ano",
    "idade": "9 anos",
}

console.log(aluno.nome);
console.log(aluno.serie);
console.log(aluno.idade);
console.log(aluno);