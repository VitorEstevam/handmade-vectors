class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(x, y, col) {
        var finalX = x + this.x;
        var finalY = y + this.y;
        stroke(col);
        line(x, y, finalX, finalY);
        stroke(0,0,0);
        circle(x, y, 10);
        circle(finalX, finalY, 10);
    }
}


class Line{ // will be the responsible to draw my vector. 
            // By here i wish be able to modify the vector changing de vertices positions
            // OO for the win
    //pos
    //cor
    //vector
}