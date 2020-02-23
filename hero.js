
let heroSprite = new Sprite("jumpman.png")

class Hero {
  constructor() {
    this.x = 100
    this.y = 100
    this.width = 100
    this.height = 100
  }
  moveUp() {
    this.y = this.y - 10
  }
  moveDown() {
    this.y = this.y + 10
  }
  moveLeft() {
    this.x = this.x - 10
  }
  moveRight() {
    this.x = this.x + 10
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

    heroSprite.draw(this.x, this.y, this.width, this.height)
  }
}
