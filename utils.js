function drawArrow(Coords, len, angle){
    cx = Coords.x
    cy = Coords.y
    push()
    translate(cx, cy);
    rotate(radians(angle));
    line(10,0,len, 0);
    line(len, 0, len - 8, -8);
    line(len, 0, len - 8, 8);
    pop()
}

function drawArrowByCoords(c1,c2, col){
    if(col != undefined) stroke(col)

    var deltaX = c2.x - c1.x;
    var deltaY = c2.y - c1.y;

    var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
    var radius = Math.sqrt( Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) 
    radius -= 10

    drawArrow(c1,radius,angle)
    
    stroke(0,0,0)
}


function brightRandomColor(){
    colorMode(HSB, 100);
    var c= color(random(10,90), 80,100)
    colorMode(RGB,260)

    return c
}