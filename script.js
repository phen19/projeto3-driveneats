function escolherPrato(pratoSelecionado){
    let prato = document.querySelector(".conteudo-prato .selecionado");
    if (prato !== null){
        prato.classList.remove("selecionado");
    }
    pratoSelecionado.classList.add("selecionado");
}

function escolherBebida(bebidaSelecionada){
    let bebida = document.querySelector(".conteudo-bebida .selecionado");
    if (bebida !== null){
        bebida.classList.remove("selecionado");
    }
    bebidaSelecionada.classList.add("selecionado");

}

function escolherSobremesa(sobremesaSelecionada){
    let sobremesa = document.querySelector(".conteudo-sobremesa .selecionado");
    if (sobremesa !== null){
        sobremesa.classList.remove("selecionado");
    }
    sobremesaSelecionada.classList.add("selecionado");
}

function tresSelecionados(){
    let check1 = document.querySelector(".conteudo-prato .selecionado");
    let check2 = document.querySelector(".conteudo-bebida .selecionado");
    let check3 = document.querySelector(".conteudo-sobremesa .selecionado");
    let botao = document.querySelector(".botao");

    if (check1 !== null && check2 !== null && check3 !== null){
        botao.classList.add("pedido-feito");
        botao.innerHTML = "Fechar pedido";
    }
}
