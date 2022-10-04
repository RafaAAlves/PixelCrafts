function paletaCores (cor2, cor3, cor4) {
    
    for(index = 0; index < 4; index += 1){
    let cor = document.createElement('li')
    let paleta = document.getElementById('color-palette')
    let cores = ['black', cor2, cor3, cor4]
    cor.className = 'color'
    cor.style.margin = '2px'
    cor.style.backgroundColor = cores[index]
    cor.style.border = 'black solid 1px'
    cor.style.width = '30px'
    cor.style.height = '30px'
    cor.style.display = 'inline-block'
    paleta.appendChild(cor)
    }
} paletaCores ('red', 'green', 'blue')