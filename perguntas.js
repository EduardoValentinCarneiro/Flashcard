perguntas = [
    { categoria: 'Programação', pergunta: 'O que é Python?', resposta: 'Uma linguagem de programação' },
    { categoria: 'Geografia', pergunta: 'Qual a capital da França?', resposta: 'Paris' },
    { categoria: 'Programação', pergunta: 'O que é uma função?', resposta: 'Um bloco de código reutilizável' },
    { categoria: 'Língua Inglesa', pergunta: 'Como se diz oi em Inglês?', resposta: 'Hi (rai)' },
    { categoria: 'História', pergunta: 'Quando ocorreu a Revolução Francesa?', resposta: '1789' },
    { categoria: 'Ciência', pergunta: 'Qual planeta é conhecido como planeta vermelho?', resposta: 'Marte' },
    { categoria: 'Matemática', pergunta: 'Quanto é 7 x 8?', resposta: '56' },
    { categoria: 'Esportes', pergunta: 'Qual país sediou a Copa do Mundo de 2022?', resposta: 'Catar' }
]

let categoriasUnicas = [...new Set(perguntas.map(p => p.categoria))]
let select = document.getElementById('filtroCategoria')

categoriasUnicas.forEach(cat => {
    let opt = document.createElement('option')
    opt.value = cat
    opt.textContent = cat
    select.appendChild(opt)
})

carregarCartoes(perguntas)
