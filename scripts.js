function ComidaSelecionada(ComidaClick) {
    const comidinha = document.querySelector(".comidas");
    if (comidinha !== null) {
        comidinha.classList.toggle("comidas");
    }

    ComidaClick.classList.toggle("comidas");
    AtivaBotao();
}


function BebidaSelecionada(BebidaClick) {
    const bebidinha = document.querySelector(".bebidas");
    if (bebidinha !== null) {
        bebidinha.classList.toggle("bebidas");
    }

    BebidaClick.classList.toggle("bebidas");
    AtivaBotao();
}

function SobremesaSelecionada(SobremesaClick) {
    const sobremesinha = document.querySelector(".sobremesas");
    if (sobremesinha !== null) {
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
  
    if (comidinha !== null) {
      i += 1;
    }
    if (bebidinha !== null) {
      i += 1;
    }
    if (sobremesinha !== null) {
      i += 1;
    }
    if (i === 3) {
      //troca botão de finalizar pedido
      botao.innerHTML = "Fechar Pedido";
      botao.classList.remove("Botao-Pedido");
      botao.classList.add("Fechar-Pedido");
     }
  }

function FinalizaPedido (){
    let valorComida = document.querySelector(".comidas > .preco > strong").innerHTML;
    let valorBebida = document.querySelector(".bebidas > .preco > strong").innerHTML;
    let valorSobremesa = document.querySelector(".sobremesas > .preco > strong").innerHTML;
    const ComidaSelect = document.querySelector(".comidas > .produto").innerHTML;
    const BebidaSelect = document.querySelector(".bebidas > .produto").innerHTML;
    const SobremesaSelect = document.querySelector(".sobremesas > .produto").innerHTML;

    valorComid = Number (valorComida.replace(",","."));
    valorBebid = Number (valorBebida.replace(",","."));
    valorSobremes = Number (valorSobremesa.replace(",","."));

    let Total = (Number (valorComid) + Number (valorBebid) + Number (valorSobremes));
    Total = Total.toFixed (2);
    let MensagemWpp = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${ComidaSelect.}
    - Bebida: ${BebidaSelect}
    - Sobremesa: ${SobremesaSelect}
    Total: ${Total}`);

    window.open(`https://wa.me/5521994114784?text=${MensagemWpp}`, "_self");

}




/*
criar mensagem
fazer calculos da mensagem
fazer link do wpp
associar ao botão
*/