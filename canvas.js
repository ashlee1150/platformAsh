let canvas = document.getElementById("display")
console.log(canvas)
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext("2d") //2d game
console.log(ctx)
ctx.fillStyle = "pink"
ctx.fillRect(0, 0, canvas.width, canvas.height)



ctx.fillStyle = "purple"
ctx.fillRect(0,0,400, 100)