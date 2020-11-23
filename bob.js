class Bob
{
    constructor(x)
    {
        var options={
            restitution:1,// restitution increased to work as pendullum
            friction:0.3,
            density:1.2

        }
        this.body=Bodies.circle(300,400,20,options)
        this.x=x
        this.y=650
        this.radius=20
        World.add(world,this.body)
    }

    display()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        fill("magenta")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}