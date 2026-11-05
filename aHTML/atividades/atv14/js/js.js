const nomeC = document.querySelector("#nome");
const emailC = document.querySelector("#email");
const form = document.querySelector("#formulario");
const msg = document.querySelector("#mensagem");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const NOME = nomeC.value.trim();
    msg.textContent = `Tudo certo! ${NOME}... \n
  Seu formulário está em analise! Tenha um bom dia.`;
  
});
