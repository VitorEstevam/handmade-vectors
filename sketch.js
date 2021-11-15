function createVectors() {
    vectors = [];
    for (let i = 0; i < 4; i++) {
        posX = random(-50, 50)* (i + 1);
        posY = random(-50, 50)* (i + 1);
        vectors.push(new Vector(posX, posY));
    }
    return vectors;
}

function drawVectors(vectors, x, y) {
    for (let i = 0; i < vectors.length; i++) {
        percent = i/(vectors.length-1);
        col = lerpColor(color(0,255,0),color(255,0,0), percent);

        vec = vectors[i];
        vec.draw(x, y, col);

        x = x + vec.x;
        y = y + vec.y;

    } 
}

function setup() {
    createCanvas(800, 400);
    background(150, 150, 150);

    vectors = createVectors();
    vectors2 = [...vectors];
    vectors2.sort( () => 0.5 - Math.random());
}

function draw() {
    drawVectors(vectors, 200, 200);
    drawVectors(vectors2, 600, 200); 
}