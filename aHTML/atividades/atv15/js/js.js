
const formulario = document.querySelector("#form-lista"); // Localiza o formulário para escutar o envio.
const campoItem = document.querySelector("#item"); // Localiza o campo onde o usuário digita.
const listaItens = document.querySelector("#lista-itens"); // Localiza a lista que receberá os novos itens.
const mensagem = document.querySelector("#mensagem"); // Localiza a área que exibirá mensagens.

formulario.addEventListener("submit", (evento) => { // Executa esta função ao clicar em Adicionar ou pressionar Enter.
    evento.preventDefault(); // Impede o navegador de recarregar a página ao enviar o formulário.

    const texto = campoItem.value.trim(); // Lê o campo e remove espaços em branco do começo e do fim.

    if (texto === "") { // Verifica se o campo está vazio ou contém apenas espaços.
        mensagem.textContent = "Digite um item antes de adicionar."; // Informa que é necessário escrever algo.
        campoItem.focus(); // Devolve o cursor ao campo para facilitar a correção.
        return; // Encerra a função sem criar um item vazio.
    } // Encerra a verificação de entrada vazia.

    const novoItem = document.createElement("li"); // Cria um novo elemento li na memória do navegador.
    novoItem.textContent = texto; // Coloca o texto digitado dentro do novo elemento.
    listaItens.append(novoItem); // Insere o li no final da lista visível na página.

    mensagem.textContent = `Item "${texto}" adicionado à lista.`; // Confirma que o item foi incluído.
    formulario.reset(); // Limpa o campo depois de adicionar o item.
    campoItem.focus(); // Deixa o cursor pronto para digitar o próximo item.
}); // Encerra o evento de envio do formulário.

