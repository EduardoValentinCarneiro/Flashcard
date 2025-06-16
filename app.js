let perguntas = []
let contador = 0

function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)

        if (respostaEstaVisivel) {
            contador++
            document.getElementById('contador').textContent = `Cartões vistos: ${contador}`
            localStorage.setItem('flashcardContador', contador)
            document.getElementById('somVirar').play()
        } else {
            document.getElementById('somVoltar').play()
        }
    }

    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao)
}

function carregarCartoes(lista) {
    document.getElementById('container').innerHTML = ''
    lista.forEach(({ categoria, pergunta, resposta }) => {
        criaCartao(categoria, pergunta, resposta)
    })
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

function filtrarPorCategoria(categoria) {
    if (categoria === 'todas') {
        carregarCartoes(perguntas)
    } else {
        const filtradas = perguntas.filter(p => p.categoria === categoria)
        carregarCartoes(filtradas)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    contador = Number(localStorage.getItem('flashcardContador')) || 0
    document.getElementById('contador').textContent = `Cartões vistos: ${contador}`

    document.getElementById('embaralhar').addEventListener('click', () => {
        document.getElementById('somEmbaralhar').play()
        embaralharArray(perguntas)
        carregarCartoes(perguntas)
    })

    document.getElementById('filtroCategoria').addEventListener('change', e => {
        filtrarPorCategoria(e.target.value)
    })
})
