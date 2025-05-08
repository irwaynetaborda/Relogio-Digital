const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

// Intervalo que executa a função 'time' a cada segundo
const relogio = setInterval(function time() {
    // Obtém a data e hora atual
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()


    // Adiciona um zero à esquerda se o número for menor que 10 (para manter o formato 00)
    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s

    // Atualiza o conteúdo dos elementos HTML com os valores formatados
    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s
})