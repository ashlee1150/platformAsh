let hero = new Hero()
let shapes = []
ERASE()
hero.draw()
window.addEventListener("keydown",event=>{
	if (event.code === "KeyS"){
		//console.log(event.)
		let colorIndex = Math.random()*100
		
		let color = "red"
		if (colorIndex < 33){
			color = "blue"
		}if (colorIndex > 33 && colorIndex < 66){
			color = "green"
		}if (colorIndex>66){
			color = "purple"
		}
		CTX.fillStyle = color
		let x = Math.random() * CANVAS.width //changes to print to the edge of the screen 
		let y = Math.random() * CANVAS.height //changes to print to edge of the screen cuz of canvas shit
		let width = Math.random()* CANVAS.width
		let height = Math.random()* CANVAS.height
		let s = new Shape(x,y,width,height)
		shapes.push(s)

	}
	if (event.code === "ArrowRight"){
		hero.moveRight()
	}
	ERASE()
	//console.log(shapes)
	shapes.forEach(s => s.draw())
	hero.draw()
})


