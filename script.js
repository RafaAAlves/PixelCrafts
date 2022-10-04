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

let botao2;
let botao3;
let botao4;
let randomButton = document.getElementById('button-random-color')
randomButton.addEventListener('click', function () {
    for(index = 1; index < 4; index += 1) {
        let cor = document.getElementsByClassName('color')[index]
        cor.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`
        botao2 = document.getElementsByClassName('color')[1].style.backgroundColor
        botao3 = document.getElementsByClassName('color')[2].style.backgroundColor
        botao4 = document.getElementsByClassName('color')[3].style.backgroundColor
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

    document.getElementsByClassName('color')[0].className = 'color selected'
    let paleta = document.getElementById('color-palette')
    paleta.addEventListener('click', function(event){
        if (document.getElementsByClassName('selected').length < 1) {
        event.target.className = 'color selected'
    }   else if (document.getElementsByClassName('selected')[0].className == event.target.className) {
        event.target.className = 'color'
    }   else {
        document.getElementsByClassName('selected')[0].className = 'color'
        event.target.className = 'color selected'
    }

})












    for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1){
    let selectedColor = document.getElementsByClassName('selected')[0]
    let pixelButton = document.getElementsByClassName('pixel')[index]
    pixelButton.addEventListener('click', function(event){
        event.target.style.backgroundColor = selectedColor
    }) 
        if (selectedPixel !== undefined){
    let selectedColor = selectedPixel.style.backgroundColor 
    let pixelButton = document.getElementsByClassName('pixel')[index]
    pixelButton.addEventListener('click', function(event){
        event.target.style.backgroundColor = selectedColor
      })
    }
  }



    
if(localStorage.length > 0){
window.onload = function () {
document.getElementsByClassName('color')[1].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[0],
document.getElementsByClassName('color')[2].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[1],
document.getElementsByClassName('color')[3].style.backgroundColor = JSON.parse(localStorage.getItem('colorPalette'))[2]
}}
