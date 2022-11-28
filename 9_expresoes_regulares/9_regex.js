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
