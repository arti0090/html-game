function Circle(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function (){
        ctx = myGameArea.context;
        ctx.beginPath();
        ctx.arc(this.x, this.y,this. r, 0, 360);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}