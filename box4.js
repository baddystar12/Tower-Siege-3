class Box4 {
    constructor(x, y, width, height){
      var box4_options ={
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,box4_options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        if(this.body.speed<9){
            rectMode(CENTER);
            fill("#eba400");
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
  
