class Umbrella{
    constructor(x,y){
       var b_options={
            'restitution':0.1,
            'isStatic':true
        }
    this.body = Bodies.circle(x,y,110,b_options);
    this.radius = 110;
    Matter.Bodies.circle;
    this.image = loadImage("images/Walking Frame/walking_1.png");
    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        pop();
    }
}