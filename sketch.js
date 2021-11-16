function drawResultVector(coords,vectors) {
    var result = vectors.reduce(reducer = (previousVector, currentVector) => currentVector.sum(previousVector))
    last = begin.sum(coords)
    result.color = color(200,0,0)
    result.draw(last)
}
function drawVectors(coords, vectors) {
    if (begin == -1) return
    last = begin.sum(coords)
    last.draw(color(255, 255, 255))
    for (let index = 0; index < vectors.length; index++) {
        var vector = vectors[index]
        var percent = index / vectors.length
        col = lerpColor(color(0, 255, 0), color(0, 0, 255), percent)
        vector.draw(last)
        last = last.sum(vector.coords)
    }

    if(vectors.length > 1 && showResult)
        drawResultVector(coords,vectors)
}

function setup() {
    createCanvas(800, 400);

    begin = -1
    v1 = -1
    v2 = -1
    vectors = []
    vectors2 = []
    showResult = false
}

function draw() {
    background(100, 100, 100)
    line(400, 0, 400, 400)

    drawVectors(new Coords(0, 0), vectors)
    drawVectors(new Coords(400, 0), vectors2)

    fill(255,255,255)
    stroke(0,0,0)
    text("CLICK, to add points\nT to show/hide result\nSPACE to shuffle\nR to reload",670,350)
}

function mouseClicked() {
    pos = new Coords(mouseX, mouseY)
    if (v1 == -1) {
        v1 = pos
        begin = pos
    }
    else {
        v2 = pos
        var vec = new Vector(v2.sub(v1))
        
        var col = brightRandomColor()
        vec.color = col
        vectors.push(vec)
        vectors2 = [...vectors]
        v1 = v2
    }

    return false;
}

function keyPressed() {
    if (key == ' ') { 
        vectors2.sort(() => Math.random() - Math.random());
    }
    if (key == 'r'){
        setup();
    }
    if(key == 't'){
        showResult = !showResult
    }
}
