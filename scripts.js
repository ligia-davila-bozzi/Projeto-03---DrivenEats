function ComidaSelecionada(ComidaClick) {
    const comidinha = document.querySelector(".comidas");
    if (comidinha !== null){
        comidinha.classList.toggle("comidas");
    }

    ComidaClick.classList.toggle("comidas");
}

function BebidaSelecionada(BebidaClick) {
    const bebidinha = document.querySelector(".bebidas");
    if (bebidinha !== null){
        bebidinha.classList.toggle("bebidas");
    }

    BebidaClick.classList.toggle("bebidas");
}

function SobremesaSelecionada(SobremesaClick) {
    const sobremesinha = document.querySelector(".sobremesas");
    if (sobremesinha !== null){
        sobremesinha.classList.toggle("sobremesas");
    }

    SobremesaClick.classList.toggle("sobremesas");
}