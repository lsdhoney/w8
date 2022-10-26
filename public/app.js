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

    r=random(255);
    g=random(255);
    b=random(255);
    size=random(50);


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
    noStroke();
    fill(obj.r,obj.g,obj.b);
    ellipse(obj.x,obj.y,obj.size);
}