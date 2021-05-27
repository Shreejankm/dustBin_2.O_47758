class DustBin{
    constructor(x,y,width,height){
        var prop = {
            isStatic:true,
            friction:600
        }
        this.body = Bodies.rectangle(x,y,30,30,prop);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbin.png");

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        
    }
}