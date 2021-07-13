class Ground {
    constructor(){
        var opt  = {
            isStatic : true
        }
    this.body = Bodies.rectangle(650,400,1300,10,opt);
    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill (200);
        rect (650,400,1300,10);
    }

}