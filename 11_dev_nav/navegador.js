// acessando o html com o DOM

console.log(document.body) // acessa todo o documento HTML

console.log(document.body.childNodes); // acessa os nós
console.log(document.body.childNodes[1]); // acessa o nó específico
console.log(document.body.childNodes[7]);

// encontrando elementos por TAG - documente.getElementByTagName("h2")

console.log(document.getElementsByTagName("h2"));
console.log(document.getElementsByTagName("ul"));
console.log(document.getElementsByTagName("li"));

console.log(document.getElementById("algum_id"));
console.log(document.getElementsByClassName("lista"));