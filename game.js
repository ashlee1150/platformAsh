
let hero = new Hero()
let shapes = []

ERASE()
hero.draw()

window.addEventListener("keydown", event => {
	if (event.code === 'KeyS') {
	console.log
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
	CTX.fillStyle = color

	let x = Math.random() * CANVAS.width
	let y = Math.random() * CANVAS.height
	let width = Math.random() * CANVAS.width
	let height = Math.random() * CANVAS.height

  	let s = new Shape(x, y, width, height)
  	shapes.push(s)
  }
  if (event.code === "ArrowRight") {
  	hero.moveRight()
  }
  ERASE()

  shapes.forEach(s => s.draw())

  hero.draw()
})









 /* 
let hero = new Hero()
let world = [
	new Ground(2, 2, 18, 2),
	new Ground(8, 5, 2, 1),
	new Ground(12, 7, 6, 1),
	new Ground(22, 6, 4, 1),
]

let keyPressed = {}
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})
window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})

function loop() {
  if(keyPressed['Space']) {
    hero.jump()
  }
  if(keyPressed['ArrowLeft']) {
    hero.moveLeft()
  }
  if(keyPressed['ArrowRight']) {
  hero.moveRight()
  }

  // change state
 hero.step()
  // draw all
  erase()
  world.forEach(g => g.draw())
  hero.draw()

  setTimeout(() => loop(), 1000 / 60)
}
*/
