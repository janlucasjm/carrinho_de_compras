const produtos = document.getElementById('produto');
const botaoAdicionar = document.querySelector('.botao-adicionar');
const carrinho = document.getElementById('lista-produtos');
let nomeProduto = '';
let valorProduto = 0;
let valorCarrinhoTotalProdutos = 1400;
let quantidade = document.getElementById('quantidade');
let campoTotalVenda = document.querySelector('.carrinho__total');

campoTotalVenda.innerHTML = `Total: R$${valorCarrinhoTotalProdutos},00`;

function alteraProduto() {
    produtos.addEventListener("change", ()=> {
        let produtoIndex = produtos.selectedIndex;
        
        if(produtoIndex == 1) {
            nomeProduto = 'Fone de ouvido';
            valorProduto = 100;

        }else if (produtoIndex == 2) {
            nomeProduto = 'Celular';
            valorProduto = 1400;

        } else if(produtoIndex == 3) {
            nomeProduto = 'Oculus VR';
            valorProduto = 5000;
        }
    })
}

alteraProduto();

function adicionar() {
    let qtde = parseInt(quantidade.value);
    let valorTotal = qtde * valorProduto; // valor do produto * valor da quantidade

    if(valorProduto == 0) {
        alert('Escolha um produto!')
    } else if (valorProduto > 0) {
        if (qtde == 0) {
            alert('Escolha a quantidade!')
        } else {
            valorCarrinhoTotalProdutos += valorTotal;
            let carrinhoProduto = `<section class="carrinho__produtos__produto"> <span class="texto-azul"> ${qtde}x </span> ${nomeProduto} <span class="texto-azul"> R$${valorTotal},00 </span> </section>`;

            campoTotalVenda.innerHTML = `Total: R$${valorCarrinhoTotalProdutos},00`;
            
            carrinho.innerHTML += carrinhoProduto;
        }
    }
}

function limpar() {
    carrinho.innerHTML = '';
    valorCarrinhoTotalProdutos = 0;
    campoTotalVenda.innerHTML = 'Total: R$0,00'
}



