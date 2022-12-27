// criando expressões regulares

console.log(/testando/.test("ttttestandoooo"));
console.log(/testando/.test("asdsddasdsds"))

const reg1 = new RegExp("bola");

const reg2 = /bola/;

let text = "Tem bola na cesta"

console.log(reg1.test("bola"));
console.log(reg1.test("ball"));

console.log(reg2.test("bola"));
console.log(reg2.test("ball"));

console.log(reg1.test(text));
console.log(reg2.test(text));

// conjunto de caracteres

let reg3 = /[123]/;
console.log(reg3.test("Exite 123 aqui?"));
console.log(reg3.test("Exite 1,2 e 3 aqui?"));

let reg4 = /[0-9]/;

console.log(reg4.test("O número 8 está presente aqui"));



// caracteres especiais

let reg5 = /./;

console.log(reg5.test("1234"));
console.log(reg5.test("gahsghaghgahsg"));
console.log(reg5.test(" "));
console.log(reg5.test("1alla2aksjkdksj3aljska4"));

let reg6 = /\d/;

console.log(reg6.test("1234")); //true
console.log(reg6.test("gahsghaghgahsg")); //false
console.log(reg6.test(" ")); //false
console.log(reg6.test("1alla2aksjkdksj3aljska4")); //true por ter números

let reg7= /\D/;

console.log(reg7.test("1234"));//false
console.log(reg7.test("gahsghaghgahsg"));//true
console.log(reg7.test(" "));//true
console.log(reg7.test("1alla2aksjkdksj3aljska4"));//true

let reg8 = /\w/;

console.log(reg8.test("1234"));//true
console.log(reg8.test("gahsghaghgahsg"));//true
console.log(reg8.test(" "));//false
console.log(reg8.test("1alla2aksjkdksj3aljska4"));//true

let reg9 = /\W/;

console.log(reg9.test("1234"));//false
console.log(reg9.test("gahsghaghgahsg"));//false
console.log(reg9.test(" "));//true
console.log(reg9.test("1alla2aksjkdksj3aljska4"));//false

let reg10 = /\s/;

console.log(reg10.test("1234"));//false
console.log(reg10.test("gahsghaghgahsg"));//false
console.log(reg10.test(" "));//true
console.log(reg10.test("1alla2aksjkdksj3aljska4"));//false


let numSem123 =/[ˆ123]/;

console.log(numSem123.test("123")); //true
console.log(numSem123.test("14")); //true
console.log(numSem123.test("1")); //true
console.log(numSem123.test("ab")); //false
console.log(numSem123.test("ajhsjahjhdj")); //false



// método Exec
let textExec = /\d+/.exec("O número 100");

console.log(textExec);
console.log(textExec.index);

let testExec_2 = /\d+/;

console.log(testExec_2.exec("Tem número aqui"))

// Método match
console.log(("Tem número aqui").match(testExec_2))
console.log(("O número 100").match(testExec_2))

let testMatch = "O número é 100".match(/\d+/);
console.log(testMatch)



// Choice pattern

function dataInput(){

    const data = new Date();

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth()).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const min =  String(data.getMinutes()).padStart(2, '0');
    const dataAtual = `${dia}/${mes}/${ano} ${hora}:${min}`;

   return dataAtual;

}

dataInput();





