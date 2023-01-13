// acessando o html com o DOM

console.log(document.body) // acessa todo o documento HTML

console.log(document.body.childNodes); // acessa os nós
console.log(document.body.childNodes[1]); // acessa o nó específico
console.log(document.body.childNodes[7]);

// encontrando elementos por TAG - documente.getElementsByTagName("h2")

console.log(document.getElementsByTagName("h2"));
console.log(document.getElementsByTagName("ul"));
console.log(document.getElementsByTagName("li"));

// encontrando elementos por ID - documente.getElementByID("algum_id")
console.log(document.getElementById("algum_id"));
// encontrando elementos por ID - documente.getElementsByClassName("alguma_class")
console.log(document.getElementsByClassName("lista"));


// Encontrando elementos com querySelector

console.log(document.querySelector("ul.lista li"));
console.log(document.querySelector("#algum_id"));

// alterando HTML com insertBefore

let add_el = document.createElement("h1");

let el = document.querySelector("h2")
let pai = el.parentNode;

let texto = document.createTextNode("DOOOOOMMMMM");

add_el.appendChild(texto);
pai.insertBefore(add_el, el)
console.log(document.getElementsByTagName("h1"));

