// regex que só aceita letra maiúsculas 

let regexMaiusculas = /[A-Z]/;

console.log(regexMaiusculas.test('coração'));
console.log(regexMaiusculas.test('FLOR'));


// regex que só aceita strings terminadas com ID 

let regexFimId = /\w+ID\b/;
console.log(regexFimId.test('raimundaID'));
console.log(regexFimId.test('raimunda'));
console.log(regexFimId.test('raimundaid'));
console.log(regexFimId.test('ID'));

// regex Choice pattern

let regexMarca = /Marca: (Nike|Adidas|Pulma|Asics)/;

console.log(regexMarca.test("Marca: Nike"))
console.log(regexMarca.test("Marca: Vip"))
console.log(regexMarca.test("Marca:"))
console.log(regexMarca.test("Puma"))

// regex válida endereço de IP

let regexIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(regexIP.test('127.0.0.1'));
console.log(regexIP.test('12.00.001'));
console.log(regexIP.test('ahahjahjhjas'));

// regex para validar nome de usuários no sistema 

let regexValidarUser = /(?=.{3,16}$)[a-z0-9-_]/; 

console.log(regexValidarUser.test("matheus_123"))
console.log(regexValidarUser.test("13"))
console.log(regexValidarUser.test("te"))