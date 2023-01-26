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
