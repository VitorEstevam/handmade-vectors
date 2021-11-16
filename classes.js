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
        fill(col)
        circle(this.x, this.y, 10)
        fill(0, 0, 0)
    }
}

class Vector {
    constructor(Coords) {
        this.Coords = Coords
    }

    sum(vec) {
        return new Vector(this.Coords.sum(vec.Coords))
    }
}

function lineFromVector(vect, begin) {
    result = new Line(begin, begin.sum(vect.Coords))
    return result
}
class Line {
    constructor(begin, end) {
        this.begin = begin
        this.end = end
        this.vector = new Vector(end.sub(begin))
    }

    draw(col) {
        this.begin.draw(color(0, 255, 0))
        this.end.draw(color(255, 0, 0))
        drawArrowByCoords(this.begin, this.end, col)
    }
}