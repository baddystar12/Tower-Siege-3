class Polygon {
    constructor(x,y,radius){
        var polygon_options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.image = loadImage("hexagon.png");
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,this.radius/2, polygon_options);
        World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        imageMode(CENTER);
        image(this.image, position.x, position.y, this.radius, this.radius);
    }
}