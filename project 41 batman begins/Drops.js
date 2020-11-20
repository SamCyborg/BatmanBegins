class Drop{
    constructor(x,y){
       var options={
           'restitution': 0.5,
           'friction': 0.001
       }
    this.body = Bodies.rectangle(x,y,3,20,options);
    this.width = 3;
    this.height = 20;
    this.image = loadImage("images/raindrops/rain1.png")
    World.add(world, this.body);
    }
    display(){
    var pos = this.body.position; 
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    fill("blue");
    image(this.image,0,0,this.width,this.height);
    pop();
   }

   update(){
     if(this.body.position.y>800){
        Matter.Body.setPosition(this.body,{x: random(0,800),
        y: random(-10,0)
        });
      }
   }

}