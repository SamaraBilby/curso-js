// string = texto

console.log(typeof ('Isso é uma string'))
console.log(typeof ('Isse texto também é'))

//Strings: datalhes mais técnicos
//a \ pode dar um 'escape' na string e isso permite 'efeitos especiais'
// por exemplo:\n pula uma linha
console.log("Essa string \n tem duas linhas");
//para inserir uma ' ou " devemos inciar a strig com a aspa inversa da que desejamos inserir;
//O templete literal serve para computar valores também, ex:
console.log(`A soma de 2 + 2 é ${2+2}`);
//concatenação é um processo de soma strings,veja:
console.log("salada " + "de" + " fruta");

// Exercício 01
// Aspas Duplas
console.log('Você sabe o que significa essa frase: "Faço o que falo mas não faça o que faço"');
// Aspas Simples
console.log("Gostei de comer a 'torta tradicional da vovó'")
// Templete Literal
console.log(`Minha filha errou na prova pois esqueceu e 9 x 9 é ${9*9}.`)