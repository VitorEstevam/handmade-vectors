class Coords {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    sum(ver2) {
        return new Coords(this.x + ver2.x, this.y + ver2.y)
    }

    sub(ver2) {
        return new Coords(this.x - ver2.x, this.y - ver2.y)
    }

    draw(col) {
        if(color != undefined)fill(col)
        circle(this.x, this.y, 10)
        fill(255, 255, 255)
    }
}

class Vector {
    constructor(Coords) {
        this.coords = Coords
    }

    sum(vec) {
        return new Vector(this.coords.sum(vec.coords))
    }

    draw(begin, col){
        if(col != undefined) stroke(col)

        var end = begin.sum(this.coords)
        drawArrowByCoords(begin, end, col)
        begin.draw(color(0,255,0))
        end.draw(color(255,0,0))

        stroke(0,0,0)
    }
}