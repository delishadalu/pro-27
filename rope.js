class Rope
{
    constructor(a,b,c)
    {
        this.offsetX=c;
       
        var options={
            bodyA:a,
            bodyB:b,
            // reduced the length, so that the bob falls straight down.
            length:250,
            stiffness:1,
            pointB: {x:this.offsetX,y:0}
        }
        this.rope= Constraint.create(options)
        
        World.add(world,this.rope)
    }

    display()
    {
        strokeWeight(3)
        /*offset value to be given in the second body.
        second body should be the roof*/
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.offsetX,this.rope.bodyB.position.y)
    }
}