var v1 = -1
var v2 = -1


function resultVector(vectors) {
    var result = vectors.reduce(reducer = (previousVector, currentVector) => currentVector.sum(previousVector))
    return result
}

function createResult(lines) {
    var vectors = lines.map((line) => { return line.vector })
    var result = resultVector(vectors)
    var resultLine = new lineFromVector(result, lines[0].begin)

    resultLine.draw(color(255, 0, 0))
}

function setup() {
    createCanvas(800, 400);
    background(150, 150, 150);

    lines = []
}

function draw() {


    background(150, 150, 150)
    lines.forEach(line => {
        line.draw()
    });

    if (lines.length > 0) {
        createResult(lines) 
    }
}

function mouseClicked() {
    pos = new Coords(mouseX, mouseY)
    v1 == -1 ? v1 = pos : v2 == -1 ? v2 = pos : () => { }
    if (v2 != -1) {
        v2 = pos
        lines.push(new Line(v1, v2))
        v1 = pos
    }
    return false;
}

