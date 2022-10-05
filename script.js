let board = [];


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
    if (index > 0){
        cor.id = 'color' + index
    }
    }
} paletaCores ('red', 'green', 'blue')

let botao2;
let botao3;
let botao4;
let randomButton = document.getElementById('button-random-color')
randomButton.addEventListener('click', function () {
    for(index = 1; index < 4; index += 1) {
        let cor = document.getElementById('color' + index)
        cor.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`
        botao2 = document.getElementById('color1').style.backgroundColor
        botao3 = document.getElementById('color2').style.backgroundColor
        botao4 = document.getElementById('color3').style.backgroundColor
        localStorage.setItem('colorPalette', JSON.stringify([botao2, botao3, botao4]))
    }
})


    for (index = 0; index < 25; index += 1) {
        let pixel = document.createElement('li')
        let quadro = document.getElementById('pixel-board')

        pixel.className = 'pixel'
        pixel.style.backgroundColor = 'white'
        pixel.style.border = '1px solid black'
        pixel.style.display = 'inline-block'
        pixel.style.width = '40px'
        pixel.style.height = '40px'
        pixel.style.textAlign = 'center'
        quadro.appendChild(pixel)
    }

    let selectedColor = 'black'
    document.getElementsByClassName('color')[0].className = 'color selected'
    let paleta = document.getElementById('color-palette')
    paleta.addEventListener('click', function(event){
        if (document.getElementsByClassName('selected').length == 0) {
        event.target.className = 'color selected'
        selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor
    }   else if (document.getElementsByClassName('selected')[0].className == event.target.className) {
        event.target.className = 'color'
        this.getElementsByClassName('color')[0].className = 'color selected'
        selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor
    }   else if (document.getElementsByClassName('selected')[0].className !== event.target.className){
        document.getElementsByClassName('selected')[0].className = 'color'
        event.target.className = 'color selected'
        selectedColor = document.getElementsByClassName('selected')[0].style.backgroundColor
    }

})

    let apagador = document.getElementById('clear-board')
    apagador.addEventListener('click', function(){
      for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
        document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white'
        board[index] = 'white'
        localStorage.setItem('pixelBoard', JSON.stringify(board))
    }  
    })

    let quadro = document.getElementById('pixel-board')
    let size = document.getElementById('board-size')
    let sizeButton = document.getElementById('generate-board')


    // Mudar tamanho do quadro

    sizeButton.addEventListener('click', function () {

        if (size.value === '') {
            window.alert('Board inválido!')
        }   
            else if (size.value < 5) {
            for(index = 0; index < document.getElementsByClassName('pixel').length; index += 0,1) {
                quadro.removeChild(document.getElementsByClassName('pixel')[index])
            }
            quadro.style.width = `${5 * 42}px`
            for (index = 0; index < 25; index += 1) {
                let pixel = document.createElement('li')
                let quadro = document.getElementById('pixel-board')
        
                pixel.className = 'pixel'
                pixel.style.backgroundColor = 'white'
                pixel.style.border = '1px solid black'
                pixel.style.display = 'inline-block'
                pixel.style.width = '40px'
                pixel.style.height = '40px'
                pixel.style.textAlign = 'center'
                quadro.appendChild(pixel)
                localStorage.setItem('boardSize', 5)
            }

            for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1){
                let pixelButton = document.getElementsByClassName('pixel')[index]
                pixelButton.addEventListener('click', function(event){
                    event.target.style.backgroundColor = selectedColor 
                    for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
                        board[index] = document.getElementsByClassName('pixel')[index].style.backgroundColor }
                        localStorage.setItem('pixelBoard', JSON.stringify(board))
                    })} 
        } 
            else if (size.value > 50) {
                for(index = 0; index < document.getElementsByClassName('pixel').length; index += 0,1) {
                    quadro.removeChild(document.getElementsByClassName('pixel')[index])
                }
                quadro.style.width = `${50 * 42}px`
                for (index = 0; index < 2500; index += 1) {
                    let pixel = document.createElement('li')
                    let quadro = document.getElementById('pixel-board')
            
                    pixel.className = 'pixel'
                    pixel.style.backgroundColor = 'white'
                    pixel.style.border = '1px solid black'
                    pixel.style.display = 'inline-block'
                    pixel.style.width = '40px'
                    pixel.style.height = '40px'
                    pixel.style.textAlign = 'center'
                    quadro.appendChild(pixel)
                    localStorage.setItem('boardSize', '50')
                }
    
                for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1){
                    let pixelButton = document.getElementsByClassName('pixel')[index]
                    pixelButton.addEventListener('click', function(event){
                        event.target.style.backgroundColor = selectedColor 
                        for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
                            board[index] = document.getElementsByClassName('pixel')[index].style.backgroundColor }
                            localStorage.setItem('pixelBoard', JSON.stringify(board))
                        })} 
            }
        
        
            else {
            for(index = 0; index < document.getElementsByClassName('pixel').length; index += 0) {
        quadro.removeChild(document.getElementsByClassName('pixel')[index])
    }

        quadro.style.width = `${size.value * 42}px`
        for (index = 0; index <= size.value * size.value; index += 1) {
        let pixel = document.createElement('li')
        let quadro = document.getElementById('pixel-board')

        pixel.className = 'pixel'
        pixel.style.backgroundColor = 'white'
        pixel.style.border = '1px solid black'
        pixel.style.display = 'inline-block'
        pixel.style.width = '40px'
        pixel.style.height = '40px'
        pixel.style.textAlign = 'center'
        quadro.appendChild(pixel)
        localStorage.setItem('boardSize', size.value)

        
        for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1){
            let pixelButton = document.getElementsByClassName('pixel')[index]
            pixelButton.addEventListener('click', function(event){
                event.target.style.backgroundColor = selectedColor 
                for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
                    board[index] = document.getElementsByClassName('pixel')[index].style.backgroundColor }
                    localStorage.setItem('pixelBoard', JSON.stringify(board))
                })}} 
    }
})








    // Pintar

    for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1){
    let pixelButton = document.getElementsByClassName('pixel')[index]
    pixelButton.addEventListener('click', function(event){
        event.target.style.backgroundColor = selectedColor 
        for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
            board[index] = document.getElementsByClassName('pixel')[index].style.backgroundColor }
            localStorage.setItem('pixelBoard', JSON.stringify(board))
        })} 
    

    



// Seleciona as cores salvas do localStorage na paleta
if(localStorage.getItem('colorPalette') !== null){
window.onload = function () {
document.getElementsByClassName('color')[1].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[0],
document.getElementsByClassName('color')[2].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[1],
document.getElementsByClassName('color')[3].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[2]
}}



// Seleciona o tamanho do quadro salvo no localStorage
if(localStorage.getItem('boardSize') !== null) {
    window.onload = function () {
        for(index = 0; index < document.getElementsByClassName('pixel').length; index += 0) {
            quadro.removeChild(document.getElementsByClassName('pixel')[index])
        }
        quadro.style.width = `${JSON.parse(localStorage.getItem('boardSize')) * 42}px`

        for (index = 0; index < JSON.parse(localStorage.getItem('boardSize')) * JSON.parse(localStorage.getItem('boardSize')); index += 1) {
            let pixel = document.createElement('li')
            let quadro = document.getElementById('pixel-board')
    
            pixel.className = 'pixel'
            pixel.style.backgroundColor = 'white'
            pixel.style.border = '1px solid black'
            pixel.style.display = 'inline-block'
            pixel.style.width = '40px'
            pixel.style.height = '40px'
            pixel.style.textAlign = 'center'
            quadro.appendChild(pixel)
        }
    
    for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1){
        let pixelButton = document.getElementsByClassName('pixel')[index]
        pixelButton.addEventListener('click', function(event){
            event.target.style.backgroundColor = selectedColor 
            for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
                board[index] = document.getElementsByClassName('pixel')[index].style.backgroundColor }
                localStorage.setItem('pixelBoard', JSON.stringify(board))
            })} 
}}

// Seleciona as cores salvas do localStorage no quadro
    if(localStorage.getItem('pixelBoard') == null) {
for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {    
    board[index] = 'white' 
    localStorage.setItem('pixelBoard', JSON.stringify(board))
    document.getElementsByClassName('pixel')[index].style.backgroundColor = JSON.parse(localStorage.getItem('pixelBoard'))[index]
}} else {
    for (index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
        document.getElementsByClassName('pixel')[index].style.backgroundColor = JSON.parse(localStorage.getItem('pixelBoard'))[index]
    }
}
