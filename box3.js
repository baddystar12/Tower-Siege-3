class Box3 {
    constructor(x, y, width, height){
      var box3_options ={
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,box3_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        if(this.body.speed<3){
            rectMode(CENTER);
            fill("#b7ff00");
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
  
