const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const color = document.getElementById("color")
const sizeLine = document.getElementById("size")
const dif = canvas.getBoundingClientRect()

function drawCanva(num1, num2) {
    ctx.lineTo(num1, num2)
    ctx.stroke()
}

function noDraw() {
    ctx.closePath()
    ctx.beginPath()
}

color.addEventListener("input", ()=>{
    ctx.strokeStyle = color.value
})
sizeLine.addEventListener("input", ()=>{
    ctx.lineWidth = sizeLine.value
})

canvas.addEventListener("mousedown", ()=>{
    drawCanva(x, y)
})

canvas.addEventListener("mousemove", (e)=>{
    x = e.clientX - dif.left
    y = e.clientY - dif.top
    if (e.buttons === 1) {
        drawCanva(x, y)
    }
})

canvas.addEventListener("mouseleave", noDraw)
canvas.addEventListener("mouseup", noDraw)
