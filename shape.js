class Shape{
	constructor(x,y,width, height){
		this.x = x //variables or fields hehe
		this.y = y
		this.width = width
		this.height = height
	
	}
	draw(){
		ctx.fillRect(this.x,this.y,this.width,this.height) //refering to fields in constructor instead of typing
	}
}
