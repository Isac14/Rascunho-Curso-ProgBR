function loaded(){
    let t = document.getElementById('titulo')

    t.onmouseover = mudarTexto 
    t.onmouseout = voltarTexto
}

function mudarTexto(){
    this.innerHTML = 'MOUSE NO ELEMENTO'
}

function voltarTexto(){
    this.innerHTML = 'MOUSE FORA DO ELEMENTO'
}