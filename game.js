window.addEventListener("keydown",event=>{
	let colorIndex = Math.random()*100
	
	let color = "red"
	if (colorIndex < 33){
		color = "blue"
	}if (colorIndex > 33 && colorIndex < 66){
		color = "green"
	}if (colorIndex>66){
		color = "purple"
	}
	ctx.fillStyle = color
	let x = Math.random() * canvas.width //changes to print to the edge of the screen 
	let y = Math.random() * canvas.height //changes to print to edge of the screen cuz of canvas shit
	let width = Math.random()* canvas.width
	let height = Math.random()* canvas.height
	new Shape(x,y,width,height).draw()
})