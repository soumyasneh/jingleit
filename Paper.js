class paper {
 
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':1.5,
          'density':0.14,
          isStatic:false
      }
      this.body = Matter.Bodies.circle(x, y, radius , options);
      this.width=100;
      this.height=100;
      this.body.isSensor=false;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(rgb(233,116,81));
      ellipse(0, 0,this.width,this.height);
      pop();
    }
  };
 
  