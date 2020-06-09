class Colourball {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.4,
            
        }

        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(100,255),random(100,255), random(100,255));
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0, this.radius, this.radius);
        pop();
      }
}