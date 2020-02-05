//set the canvas "resolution" to match the screen
let CANVAS = document.getElementById("display")
console.log(CANVAS)
CANVAS.width = document.body.clientWidth
CANVAS.height = document.body.clientHeight
//create 2d context object for drawing on the canvas
let CTX = CANVAS.getContext("2d") //2d game
function ERASE(){
	//draw the rectangle 
	//console so we can see in inspect thingy 
	console.log(CTX)
	CTX.fillStyle = "pink"
	CTX.fillRect(0, 0, CANVAS.width, CANVAS.height)



	CTX.fillStyle = "purple"
	CTX.fillRect(0,0,400, 100)
}