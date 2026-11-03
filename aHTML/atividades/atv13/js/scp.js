const nome = document.querySelector("#nome");
const botao = document.querySelector("#mostrar");
const resultado = document.querySelector("#resultado");
botao.addEventListener("click", () => {
    resultado.textContent = nome.value;
});