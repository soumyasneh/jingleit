class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0,
            length: 400
        }
        this.pointB=pointB;
        this.Sling = Matter.Constraint.create(options);
        World.add(world, this.Sling);
    }
    
    display(){
         
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(rgb(127,255,212));
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
    }
    
}