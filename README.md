# Carrinho de Compras

## Descrição
Este é um projeto simples de carrinho de compras, desenvolvido em HTML, CSS e JavaScript. O carrinho permite que o usuário selecione produtos, especifique a quantidade desejada e os adicione ao carrinho. O valor total da compra é atualizado dinamicamente conforme os produtos são adicionados. Além disso, é possível limpar o carrinho.

## Estrutura de Arquivos
- **index.html:** O arquivo HTML principal contendo a estrutura da página.
- **style.css:** O arquivo CSS que define o estilo da página.
- **js/app.js:** O arquivo JavaScript contendo a lógica do carrinho de compras.

## Funcionalidades

### Seleção de Produtos
- O usuário pode selecionar um produto no menu suspenso (`<select>`) no formulário.
- A seleção do produto é detectada pelo evento `change` no menu suspenso, e as informações do produto (nome e valor) são armazenadas nas variáveis `nomeProduto` e `valorProduto`.

### Adição de Produtos ao Carrinho
- O botão "Adicionar" permite ao usuário adicionar produtos ao carrinho.
- A função `adicionar` é chamada quando o botão "Adicionar" é clicado.
- O valor total da compra é calculado multiplicando a quantidade escolhida pelo valor do produto.
- Se a quantidade for zero ou se nenhum produto for selecionado, o usuário é alertado.
- Se houver um produto selecionado e uma quantidade válida, o produto é adicionado à lista do carrinho, e o valor total é atualizado.

### Limpeza do Carrinho
- O botão "Limpar" permite ao usuário limpar todos os itens do carrinho.
- A função `limpar` é chamada quando o botão "Limpar" é clicado.
- A lista do carrinho é esvaziada, e o valor total é resetado para zero.

## Como Executar
1. Baixe todos os arquivos deste repositório.
2. Abra o arquivo `index.html` em um navegador da web para visualizar a página.

## Melhorias Futuras
- Implementar funcionalidades adicionais, como remoção de itens individuais do carrinho.
- Aprimorar o design da interface do usuário.
- Adicionar animações para uma experiência mais interativa.

Espero que este projeto seja útil como exemplo simples de um carrinho de compras e que possa ser expandido com mais funcionalidades e melhorias.
