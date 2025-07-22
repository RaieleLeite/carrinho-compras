let listaProdutos = document.getElementById('lista-produtos');
let carrinhoTotal = document.getElementById('valor-total');

let carrinhoValor = 0;

function adicionar() {
    let produtos = document.getElementById('produto').value;
    let quantidadeProdutos = parseInt(document.getElementById('quantidade').value);
    let nomeProduto = produtos.split('-')[0].trim();
    let valorUnitario = parseFloat(produtos.split('R$')[1]);
    let subtotal = quantidadeProdutos * valorUnitario;



    if (quantidadeProdutos > 0) {
        adicionarProdutosCarrinho(quantidadeProdutos, nomeProduto, valorUnitario, subtotal);
        document.getElementById('quantidade').value = 0;
    } 
}

function adicionarProdutosCarrinho(quantidadeProdutos, nomeProdutoParametro, valorProduto, subtotal) {
    const section = document.createElement('section');
    section.classList.add('carrinho__produtos__produto');

    const spanQuantidade = document.createElement('span');
    spanQuantidade.classList.add('texto-azul');
    spanQuantidade.textContent = `${quantidadeProdutos}x `;

    const spanNomeProduto = document.createElement('span');
    spanNomeProduto.textContent = nomeProdutoParametro;

    const spanValor = document.createElement('span');
    spanValor.classList.add('texto-azul');
    spanValor.textContent = ` R$${valorProduto.toFixed(2)}`;

    section.append(spanQuantidade, spanNomeProduto, spanValor);
    listaProdutos.appendChild(section);

    carrinhoValor += subtotal;
    carrinhoTotal.textContent = `R$${carrinhoValor.toFixed(2)}`;
}

function limpar() {
    carrinhoValor = 0;
    listaProdutos.textContent = '';
    carrinhoTotal.textContent = `R$ 0,00`;
}
