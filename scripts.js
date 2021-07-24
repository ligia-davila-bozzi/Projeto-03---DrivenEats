function ComidaSelecionada(ComidaClick) {
    const comidinha = document.querySelector(".comidas");
    if (comidinha !== null){
        comidinha.classList.toggle("comidas");
    }

    ComidaClick.classList.toggle("comidas");
    AtivaBotao();
}


function BebidaSelecionada(BebidaClick) {
    const bebidinha = document.querySelector(".bebidas");
    if (bebidinha !== null){
        bebidinha.classList.toggle("bebidas");
    }

    BebidaClick.classList.toggle("bebidas");
    AtivaBotao();
}

function SobremesaSelecionada(SobremesaClick) {
    const sobremesinha = document.querySelector(".sobremesas");
    if (sobremesinha !== null){
        sobremesinha.classList.toggle("sobremesas");
    }

    SobremesaClick.classList.toggle("sobremesas");
    AtivaBotao();
}

function AtivaBotao() {
    const comidinha = document.querySelector(".comidas");
    const bebidinha = document.querySelector(".bebidas");
    const sobremesinha = document.querySelector(".sobremesas");
    const botao = document.querySelector(".Botao-Pedido");
    let i = 0;
    
    if (comidinha !== null){
        i += 1;
    }
    if (bebidinha !== null){
        i += 1;
    }
    if (sobremesinha !== null){
        i += 1;
    }
    if(i === 3){
        //troca botão de finalizar pedido
        botao.innerHTML = "Fechar Pedido";
        botao.classList.remove("Botao-Pedido");
        botao.classList.add("Fechar-Pedido");
    }
}