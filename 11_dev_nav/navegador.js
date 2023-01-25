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

// alterando a Dom com appendChild 

let p = document.createElement("p");
let el_2 = document.querySelector("h1")
let pai_2 = el_2.parentNode;

pai_2.appendChild(p)
console.log(document.getElementsByTagName("p"));


// alterando DOM replaceChild

let novoElemento = document.createElement("p");

let text0 = document.createTextNode("Protocolos");

novoElemento.appendChild(text0);

let heading = document.querySelector("#algum_id"); 

let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading)

// Criando nós de texto

let texto_1 = document.createTextNode(" Este é o texto");
let p_1 = document.getElementById("outro_id");

p_1.appendChild(texto_1);

// criando elementos 

let listaElemento = document.createElement("ul");

for( i = 0; i < 5; i++){
    let item = document.createElement("li");
    let texto = document.createTextNode("texto lista" + i);
    item.appendChild(texto);
    listaElemento.appendChild(item);
}

let container = document.getElementById("container-principal")

container.appendChild(listaElemento);


// Modificando e lendo atributos

let url = document.getElementById('link');
console.log(url.getAttribute('href'));

url.setAttribute("href","https://www.joiasvip.com.br/")
url.setAttribute("target","_blank")
console.log(url.getAttribute('href'));

// Verificando altura e largura do elemento

console.log(container.offsetWidth);
console.log(container.offsetHeight);

console.log(container.clientWidth) // desconsidera bordas
console.log(container.clientHeight) // desconsidera bordas

// Posição do elemento na tela

console.log(container.getBoundingClientRect())

let el_Css = document.getElementById("elemento_css");
console.log(el_Css.style)
el_Css.style.backgroundColor = "red";