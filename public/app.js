let socket = io();
let r;
let g;
let b;
let size;

socket.on('connect', ()=>{
    console.log('connected');
});

socket.on('data', (data)=>{
    console.log(data);

    drawObj(data);
});

//p5 code
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);

    r=random(100);
    g=random(255);
    b=random(172,220);
    size=random(50,150);


}

function mouseMoved(){
    // fill(0);
    // ellipse(mouseX, mouseY, 10);

    let mousePos = {
        x: mouseX,
        y: mouseY,
        r: r,
        g: g,
        b: b,
        size: size
    }

    socket.emit('data',mousePos);
}

function drawObj(obj){
    stroke(255,0,0);
    fill(255,183,obj.b,obj.r);
    //fill(obj.r,0,0);
    //ellipse(obj.x,obj.y,obj.size);
    beginShape();
    vertex(obj.x, obj.y);
    bezierVertex(obj.x - obj.size / 2, obj.y - obj.size / 2, obj.x - obj.size, obj.y + obj.size / 3, obj.x, obj.y + obj.size);
    bezierVertex(obj.x + obj.size, obj.y + obj.size / 3, obj.x + obj.size / 2, obj.y - obj.size / 2, obj.x, obj.y);
    endShape(CLOSE);
}