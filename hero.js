
//let heroSprite = new Sprite("jumpman.png")
let heroStand = new Sprite ("../images/heros/pink/alienPink_stand.png")
let heroJump = new Sprite ("../images/heros/pink/alienPink_jump.png")

class Hero {
  constructor() {
    this.x = GRIDSIZE
    this.y = GRIDSIZE
    this.width = GRIDSIZE
    this.height = GRIDSIZE * 2
    this.dy = 0
    this.airborne = true
  }
  jump(){
    if (this.airborne){
      return
    }
    this.dy = - GRIDSIZE/2
    this.airborne = true
  }
  moveUp() {
    this.y = this.y - GRIDSIZE/10
  }
  moveDown() {
    this.y = this.y + GRIDSIZE/10
  }
  moveLeft() {
    this.x = this.x - GRIDSIZE/10
  }
  moveRight() {
    this.x = this.x + GRIDSIZE/10
  }
  step(){
    //accelerations
    this.dy = this.dy + GRIDSIZE/55
    if (this.dy > GRIDSIZE){
      this.dy = GRIDSIZE-1
    }
    //velocity
    this.y = this.y + this.dy
    if(this.y > CANVAS.height){
      this.y = CANVAS.height
      this.airborne = false
    }
  }
  draw() {
    CTX.fillStyle = 'black'
    CTX.beginPath()
    CTX.arc(
      this.x,
      this.y,
      this.width,
      0,
      2 * Math.PI,
    )
    CTX.fill()
    let imageToDraw = heroStand
    if (this.airborne){
      imageToDraw = heroJump
    }

    imageToDraw.draw(
      this.x - this.width/2,
      this.y - this.height,
      this.width,
      this.height)
  }
}
