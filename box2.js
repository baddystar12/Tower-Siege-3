class Box2 {
    constructor(x, y, width, height){
      var box2_options ={
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,box2_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        this.visibility = 255;
        if(this.body.speed<9){
            fill("#42ffa1");
            rectMode(CENTER);
           rect(position.x, position.y, this.width, this.height);
        }
        else{
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility-5;
            pop();
        }
    }
    score(){
        if(this.visibility<0&&this.visibility>=-105){
            score++;
        }
    }
  }
  
