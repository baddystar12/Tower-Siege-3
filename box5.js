class Box5 {
    constructor(x, y, width, height){
      var box5_options ={
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,box5_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(position.x, position.y, this.width, this.height);
        if(this.body.speed<3){
            rectMode(CENTER);
            rect();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility-5;
            tint(255, this.visibility);
            pop();
        }
    }
  }
  