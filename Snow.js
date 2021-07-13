class Snow {
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r);
        this.r = r;
        World .add(world,this.body);
        this.image1 = loadImage("snow4.webp");
        //this.image1.scale = 5;
        this.image2 = loadImage("snow5.webp");
        Matter.Body.setVelocity(this.body,{x : random (0.5,2), y : 0});
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed < 1 && pos.y>350){
            World.remove(world,this.body);
            image(this.image2,pos.x,pos.y,this.r*2,this.r*2);
            //tint(255,100);
            
        }
        else{
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        image(this.image1,0,0,this.r*2,this.r*2);
        pop ();
        }

    }
}