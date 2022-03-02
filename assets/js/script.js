/*SELECIONANDO UL(LISTA)
estou buscando opções p/ selecionar dentro de uma lista de opções*/
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

/*ADICIONANDO ESCUTADOR DE EVENTOS
é um evento que vai "escutar" um click e chamar a função p/ identificar as opçoes*/
listaOpcoes.addEventListener("click", indentificarOpcoes)

/*EXECUTANDO AÇÃO DEPOIS DO CLICK*/
function indentificarOpcoes(event){
    const elemento = event.target /*mostra com precisão onde foi clicado*/

    if(elemento.tagName == "LI"){ /*verifica se é um li*/
        const id = elemento.id /*pego o id*/

        /*selecionando a seção utilizando o id (escolha do usuário)*/
        const secaoEscolha = document.querySelector(`div[data-identificador="${id}"]`) /*interpolação de estring*/
        
        /*removendo classe mostrar*/
        removeClasseMostrar()

        /*liste as classes e adicione uma nova classe p/ esse elemento*/
        secaoEscolha.classList.add("mostrar")
    }
}

/*função p/ remover a classe da div*/
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container  div")
    for(let i=0; i<divs.length; i++){
        divs[i].classList.remove("mostrar")
    }
}