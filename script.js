function escolherPrato(pratoSelecionado){
    let prato = document.querySelector(".conteudo-prato .selecionado");
    if (prato !== null){
        prato.classList.remove("selecionado");
    }
    pratoSelecionado.classList.add("selecionado");
    tresSelecionados();
}

function escolherBebida(bebidaSelecionada){
    let bebida = document.querySelector(".conteudo-bebida .selecionado");
    if (bebida !== null){
        bebida.classList.remove("selecionado");
    }
    bebidaSelecionada.classList.add("selecionado");
    tresSelecionados()
}

function escolherSobremesa(sobremesaSelecionada){
    let sobremesa = document.querySelector(".conteudo-sobremesa .selecionado");
    if (sobremesa !== null){
        sobremesa.classList.remove("selecionado");
    }
    sobremesaSelecionada.classList.add("selecionado");
    tresSelecionados()
}

function tresSelecionados(){
    let check1 = document.querySelector(".conteudo-prato .selecionado");
    let check2 = document.querySelector(".conteudo-bebida .selecionado");
    let check3 = document.querySelector(".conteudo-sobremesa .selecionado");
    let botao = document.querySelector(".botao");

    if (check1 !== null && check2 !== null && check3 !== null){
        botao.classList.add("pedido-feito");
        botao.classList.remove("desativar");
        botao.innerHTML = "Fechar pedido";
    }
}


let pratoPrincipal
let refri
let doce
let pratoPrincipalPreco
let refriPreco
let docePreco
let preco1
let preco2
let preco3
let total
let confirmar

function confirmarPedido(){

    confirmar = document.querySelector(".confirmar")
    confirmar.classList.remove("escondido");


    //Passando informações do prato selecionado pra div de confirmação 
    pratoPrincipal = document.querySelector(".conteudo-prato .selecionado h1").innerHTML;
    pratoPrincipalPreco = document.querySelector(".conteudo-prato .selecionado h3").innerHTML;
    let confirmacaopratoPrincipal = document.querySelector(".pratoprincipal h1");
    let confirmacaoPreco = document.querySelector(".pratoprincipal h2");
    confirmacaopratoPrincipal.innerHTML = pratoPrincipal;
    confirmacaoPreco.innerHTML = pratoPrincipalPreco.replace("R$ ","");

    //Passando informações da bebida selecionado pra div de confirmação 
    refri = document.querySelector(".conteudo-bebida .selecionado h1").innerHTML;
    refriPreco = document.querySelector(".conteudo-bebida .selecionado h3").innerHTML;
    let confirmacaoRefri = document.querySelector(".refri h1");
    let confirmacaoPrecoRefri = document.querySelector(".refri h2");
    confirmacaoRefri.innerHTML = refri;
    confirmacaoPrecoRefri.innerHTML = refriPreco.replace("R$ ","");

    //Passando informações da sobremesa selecionado pra div de confirmação 
    doce = document.querySelector(".conteudo-sobremesa .selecionado h1").innerHTML;
    docePreco = document.querySelector(".conteudo-sobremesa .selecionado h3").innerHTML;
    let confirmacaoDoce = document.querySelector(".doce h1");
    let confirmacaoPrecoDoce = document.querySelector(".doce h2");
    confirmacaoDoce.innerHTML = doce;
    confirmacaoPrecoDoce.innerHTML = docePreco.replace("R$ ","");


    // Tratamento da String de preço, para poder fazer a soma
    preco1 = confirmacaoPreco.innerHTML;
    confirmacaoPreco = preco1.replace("R$ ","");
    preco1 = confirmacaoPreco.replace(",", ".");

    preco2 = confirmacaoPrecoRefri.innerHTML;
    confirmacaoPrecoRefri = preco2.replace("R$ ","");
    preco2 = confirmacaoPrecoRefri.replace(",", ".");
    
    preco3 = confirmacaoPrecoDoce.innerHTML;
    confirmacaoPrecoDoce = preco3.replace("R$ ","");
    preco3 = confirmacaoPrecoDoce.replace(",", ".");
    
    total = Number(preco1) + Number(preco2) + Number(preco3);
    let confirmacaoTotal = document.querySelector(".total h2");
    total=total.toFixed(2);
    confirmacaoTotal.innerHTML = "R$ "+ total.replace(".", ",");
    desativar()
}

function fecharPedido(){

    pratoPrincipal = document.querySelector(".conteudo-prato .selecionado h1");
    refri = document.querySelector(".conteudo-bebida .selecionado h1");
    doce = document.querySelector(".conteudo-sobremesa .selecionado h1");
    pratoPrincipalPreco = document.querySelector(".conteudo-prato .selecionado h3");
    refriPreco = document.querySelector(".conteudo-bebida .selecionado h3");
    docePreco = document.querySelector(".conteudo-sobremesa .selecionado h3");


    // Tratamento da String de preço, para poder fazer a soma
    preco1=pratoPrincipalPreco.innerHTML;
    pratoPrincipalPreco = preco1.replace("R$ ","");
    preco1 = pratoPrincipalPreco.replace(",", ".");

    preco2=refriPreco.innerHTML;
    refriPreco = preco2.replace("R$ ","");
    preco2 = refriPreco.replace(",", ".");
    
    preco3=docePreco.innerHTML;
    docePreco = preco3.replace("R$ ","");
    preco3 = docePreco.replace(",", ".");
    
    total = Number(preco1) + Number(preco2) + Number(preco3);

    let nome = prompt ("Qual o seu nome?");
    let endereco = prompt("Qual o endereço?");
    
    let mensagem = `Olá, gostaria de fazer o pedido:\n - Prato: ${pratoPrincipal.innerHTML}\n - Bebida: ${refri.innerHTML}\n - Sobremesa: ${doce.innerHTML}\n Total: R$ ${total.toFixed(2)}\n \n Nome: ${nome} \n Endereço: ${endereco}`
   window.open("https://wa.me/5521999999999?text=" + encodeURIComponent(mensagem));
}

function cancelar(){
    confirmar = document.querySelector(".confirmar")
    confirmar.classList.add("escondido");
    reativar()
}

function desativar(){

    let prato = document.querySelector(".conteudo-prato");
    prato.classList.add("desativar");

    let bebida = document.querySelector(".conteudo-bebida");
    bebida.classList.add("desativar");

    let sobremesa = document.querySelector(".conteudo-sobremesa");
    sobremesa.classList.add("desativar");


}

function reativar (){
    let prato = document.querySelector(".conteudo-prato");
    prato.classList.remove("desativar");

    let bebida = document.querySelector(".conteudo-bebida");
    bebida.classList.remove("desativar");

    let sobremesa = document.querySelector(".conteudo-sobremesa");
    sobremesa.classList.remove("desativar");
}