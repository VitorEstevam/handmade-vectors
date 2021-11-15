class Vector {
    constructor(vertex) {
        this.vertex = vertex
    }
}

class Vertex{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    sum(ver2){
        return new Vertex(this.x + ver2.x, this.y + ver2.y)
    }

    sub(ver2){
        return new Vertex(this.x - ver2.x, this.y - ver2.y)
    }

    draw(col){
        fill(col)
        circle(this.x, this.y, 10)
        fill(0,0,0)
    }
}

class Line { 
    constructor(begin, end) {
        this.begin = begin
        this.end = end
        this.vector = new Vector(end.sub(begin))
    }

    draw() {
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
        this.begin.draw(color(0,255,0))
        this.end.draw(color(255,0,0))

        text(JSON.stringify(this.vector), this.end.x, this.end.y)
    }

}