class Plinko{
    constructor(x,y){
        var option={
            isStatic:true,
           
        }
        this.r=10;
        this.body=Bodies.circle(x,y,this.r,option);
        //this.image = loadImage("paper.png")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS)
        fill("white");
        ellipse(0,0,this.r,this.r)
        pop();
    }
}