class Shape{
	constructor(x,y,width, height){
		this.x = x //variables or fields hehe
		this.y = y
		this.width = width
		this.height = height
	
	}
	draw(){
		let colorindex = '#'+Math.floor(Math.random()*16777215).toString(16)
		CTX.fillStyle = colorindex
		CTX.fillRect(this.x,this.y,this.width,this.height) //refering to fields in constructor instead of typing
	}
}
