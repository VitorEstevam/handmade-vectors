var v1 = -1
var v2 = -1

function setup() {
    createCanvas(800, 400);
    background(150, 150, 150);

    lines = []
    l = new Line(new Vertex(50, 50), new Vertex(150, 150))
}

function draw() {
    lines.forEach(line => {
        line.draw()
    });
}

function mouseClicked() {
    pos = new Vertex(mouseX, mouseY)
    if (lines.length == 0) {
        if (v1 == -1) { 
            v1 = pos 
        }
        else if (v2 == -1) { 
            v2 = pos
            lines.push(new Line(v1, v2))
            v1 = pos
        }
    } else {
        v2 = pos
        lines.push(new Line(v1, v2)) 
        v1 = pos
    }
    return false; 
}