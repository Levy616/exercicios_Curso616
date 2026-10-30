const caixa1 = document.querySelector("#caixatxt1");
        const caixa2 = document.querySelector("#caixatxt2");
        const botao1 = document.querySelector("#bt1");
        const botao2 = document.querySelector("#bt2");
        const botaolimpar = document.querySelector("#limpar");
        const botao3 = document.querySelector("#bt3");

        botao1.addEventListener("click", () => {
            // alert("o botão 1 foi clicado")
            caixa1.textContent ="Vale mais um pássaro na mão..."
        })
        botao2.addEventListener("click", () => {
            // alert("o botão 2 foi clicado")
            caixa2.textContent ="Antes só do que mal acompanhado"
        })
        botaolimpar.addEventListener("click", () => {
            caixa1.textContent=""
            caixa2.textContent=""
        })
        botao3.addEventListener("click", () => {
           caixa1.textContent ="Vale mais um pássaro na mão..."
           caixa2.textContent ="Antes só do que mal acompanhado"
            // alert("o botão ambos foi clicado")
        })