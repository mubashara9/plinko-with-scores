class Particle{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,option);
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        noStroke();
        ellipseMode(RADIUS)
        fill(this.color);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}