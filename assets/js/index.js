
const colores = ['bluesky', 'darkred', 'brown', 'black', 'orange', 'purple', 'darkblue']
function randomColor (length){
    return Math.floor(Math.random() * length)
}
const btn =document.getElementById('btn')
btn.onclick = function (){
    document.body.style.backgroundColor = colores[randomColor(colores.length)]
}