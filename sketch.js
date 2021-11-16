function drawResultVector(vectors) {
    var result = vectors.reduce(reducer = (previousVector, currentVector) => currentVector.sum(previousVector))
    result.draw(begin, color(255,0,0))
}

function setup() {
    createCanvas(400, 400);
    background(150, 150, 150);

    begin = -1
    v1 = -1
    v2 = -1
    vectors = [] 
}

function draw() {
    background(150, 150, 150)

    if(begin != -1){ 
        begin.draw(color(255,255,255))
    }

    last = begin
    vectors.forEach(vector => {
        vector.draw(last)
        last = last.sum(vector.coords)
    });

    if(vectors.length >0){
        drawResultVector(vectors)
    }
}

function mouseClicked() {
    pos = new Coords(mouseX, mouseY)
    if(v1 == -1){
        v1 = pos
        begin = pos
    }
    else{
        v2 = pos
        var vec = new Vector(v2.sub(v1))
        vectors.push(vec)
        v1 = v2
    }
    return false;
}

