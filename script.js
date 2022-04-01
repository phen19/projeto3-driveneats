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

