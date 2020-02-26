
class Shape {
 constructor(x, y, width, height, color) {
 this.x = x
 this.y = y
 this.width = width
 this.height = height

 	let colorIndex = Math.random()
	//let color = "red"
	if (colorIndex > 0.10 && 0.30) {
		color = "blue"
    }
	if (colorIndex < 0.10) {
		color = "green"
	}
	if (colorIndex > 0.30 && 0.6) {
		color = "red"
    }
    if (colorIndex > 0.60 ) {
		color = "cyan"
    }
 }
 draw() {

	CTX.fillStyle = color

 	CTX.fillRect(
    this.x,
    this.y, 
    this.width, 
    this.height
  )
 }
}
