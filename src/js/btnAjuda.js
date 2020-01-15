; (function () {
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click", function () {
        fetch("https://ceep.herokuapp.com/cartoes/instrucoes")
            .then(function (response) {
                if (!response.ok) {throw newError(response.errorMessage)}
                    return response.json()
            })
            .then(function (objeto){
                const ajudas = objeto.instrucoes;

                // const ajudas = [
                //     { conteudo: "Bem-vindo ao Ceep!", cor: "#f05450" },
                //     { conteudo: "Clique no botão Linhas para mudar o layout.", cor: "#92c4ec" },
                //     { conteudo: "Para criar um cartão, digite o texto e clique no botão Salvar.", cor: "#EBEF40" }
                // ]

                ajudas.forEach(function (ajuda) {
                    adicionaCartaoNoMural(ajuda)
                })
            })
    })
    
    btnAjuda.classList.remove('no-js')
})()