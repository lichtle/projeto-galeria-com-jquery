$(document).ready(function () {
  $("#open-form-btn").click(function () {
    $("form").slideDown();
  });

  $("#cancel-btn").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (event) {
    event.preventDefault();

    const newImageUrl = $("#image-url").val(); // A função val() serve para capturar a entrada dada no input. Se dermos um console.log na variável newImage, veremos que o retorno é a entrada dada no input (url da imagem a ser inserida)
    const novoItem = $('<li style="display: none"></li>'); // Criando um list item no jQuery e armazenando-o em uma variável. Para adicionar o efeito de fade-in, ele deve começar com display none

    $(`<img src="${newImageUrl}" />`).appendTo(novoItem); // Criando um elemento no jQuery e inserindo-o no elemento (li) previamente criado acima

    $(` <div class="overlay-image-link">
          <a href="${newImageUrl}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
          </a>
        </div>`).appendTo(novoItem); // Copiando e colando (do HTML) a div contendo o link de ampliar a imagem. Iserimos no href o valor capturado no input. Também inserimos esse item dentro da li criada acima

    $(novoItem).appendTo("ul"); // Com a variável novoItem populada (ou seja, com a li populada), a inserimos dentro do elemento ul do HTML

    $(novoItem).fadeIn(1000); // Fazendo com que o li criado acima, previamente com display none, apareça suavemente utilizando a animação de fadeIn. Podemos alterar o tempo padrão do efeito adicionando o número em milisegundos dentro do parênteses da função. 1000 ms = 1 segundo

    $("#image-url").val(""); // Limpando o input após a inserção da imagem. O novo valor deve ir dentro do parênteses da função val e estar entre aspas
  });
});
