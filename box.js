class Box  {
    constructor(x, y, width, height){
      var box_options ={
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,box_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        
       
        if(this.body.speed<3){
            rectMode(CENTER);
            fill("magenta");
            rect(position.x, position.y, this.width, this.height);
            
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