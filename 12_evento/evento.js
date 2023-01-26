// adicionar um evento

let btnSend = document.getElementById("btnSend");
let btnRemove = document.getElementById("btnSend");

function msg(e){
    console.log(e)
    console.log("você clicou")
   
}
btnSend.addEventListener("click", msg);

// removendo evento
btnRemove.addEventListener("click", function(){
    btnSend.removeEventListener("click", msg);
});

// propagaçao
let pPropagacao = document.querySelector(".propagacao");
let botaoPropagacao = document.querySelector(".botao");

pPropagacao.addEventListener("click", msg);

botaoPropagacao.addEventListener("click", function(e){
    console.log("click 2");
    e.stopPropagation();
});

// prevent default

let eventoDefault = document.querySelector("a");

eventoDefault.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Não será redirecionado");
})

//Eventos de tecla(Key event)

window.addEventListener("keydown", function(e){
    if(e.key == "v"){
        console.log("Apertou a letra v");
    }
});

window.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        console.log("Apertou o ENTER");
    }
});
// Evento mouse
let mouse_event = document.querySelector("button.mouse_evento");

function doubleClick(e){
    console.log("Ativou o double click");
};

mouse_event.addEventListener("dblclick", doubleClick);

// Movimento mouse

window.addEventListener("mousemove", function(e){
    console.log("Mouse na posição X:"+ e.x);
    console.log("Mouse na posição Y:" + e.y);
})

window.addEventListener("scroll", (e)=> {
    if(window.pageYOffset > 100){
        console.log("Chegou na posição")
    };
});

// Eventos por foco

let inputFoco = document.querySelector("input");

inputFoco.addEventListener("focus", function(){
    console.log("Foco no input");
});

inputFoco.addEventListener("blur", function(){
    console.log("Perdeu no input");
});

// evento de carregamento

window.addEventListener("load", (e)=>{
   alert("não se vá");
});

//debounce

window.addEventListener("mousemove", function(){
    timeout = this.setTimeout(() => console.log("Debounce!"), 500)
});
