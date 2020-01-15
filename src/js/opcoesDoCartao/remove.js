// IIFE / Começa com ; por conta da Minificação, que vai trocar nomes de função e deixar todo o código em uma linha para os browers
; (function () {
    // Seleciona elemento
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')
    // Adiciona um evento click sem usar onclick e criando função anônima
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            const cartao = btns[i].parentNode.parentNode
            cartao.classList.add("cartao--some")
            cartao.addEventListener("transitionend", function () {
                cartao.remove()
            })
        })
    }
})()