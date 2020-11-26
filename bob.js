class Bob
{
    constructor(x)
    {
        var options={
            restitution:1,// restitution increased to work as pendullum
            friction:0.3,
            density:1.2

        }
        this.body=Bodies.circle(x,400,20,options)
        
       
        World.add(world,this.body)
    }

    display()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        fill("magenta")
        ellipseMode(RADIUS)
        ellipse(0,0,20,20)
        pop()
    }
}