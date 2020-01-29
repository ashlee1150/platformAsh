//set the canvas "resolution" to match the screen
let canvas = document.getElementById("display")
console.log(canvas)
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
//create 2d context object for drawing on the canvas
let ctx = canvas.getContext("2d") //2d game

//draw the rectangle 
//console so we can see in inspect thingy 
console.log(ctx)
ctx.fillStyle = "pink"
ctx.fillRect(0, 0, canvas.width, canvas.height)



ctx.fillStyle = "purple"
ctx.fillRect(0,0,400, 100)