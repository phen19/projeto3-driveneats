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

function fecharPedido(){
    let pratoPrincipal = document.querySelector(".conteudo-prato .selecionado h1");
    let refri = document.querySelector(".conteudo-bebida .selecionado h1");
    let doce = document.querySelector(".conteudo-sobremesa .selecionado h1");
    let pratoPrincipalPreco = document.querySelector(".conteudo-prato .selecionado h3");
    let refriPreco = document.querySelector(".conteudo-bebida .selecionado h3");
    let docePreco = document.querySelector(".conteudo-sobremesa .selecionado h3");

    let preco1=pratoPrincipalPreco.innerHTML;
    pratoPrincipalPreco = preco1.replace("R$ ","");
    preco1 = pratoPrincipalPreco.replace(",", ".");

    let preco2=refriPreco.innerHTML;
    refriPreco = preco2.replace("R$ ","");
    preco2 = refriPreco.replace(",", ".");
    
    let preco3=docePreco.innerHTML;
    docePreco = preco3.replace("R$ ","");
    preco3 = docePreco.replace(",", ".");
    
    let total = Number(preco1) + Number(preco2) + Number(preco3);

    let nome = prompt ("Qual o seu nome?");
    let endereco = prompt("Qual o endereço?");

    
   let mensagem = `Olá, gostaria de fazer o pedido:\n - Prato: ${pratoPrincipal.innerHTML}\n - Bebida: ${refri.innerHTML}\n - Sobremesa: ${doce.innerHTML}\n Total: ${total.toFixed(2)}\n \n  Nome: ${nome} \n Endereço: ${endereco}`
    alert(mensagem)
    window.open("https://wa.me/5521999999999?text=" + encodeURIComponent(mensagem));
}