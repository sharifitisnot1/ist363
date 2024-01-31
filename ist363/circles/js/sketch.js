let canvasWidth = 800;
let canvasHeight = 800;

function setup() {
    createCanvas(800,800);

    background(0);

}
function draw() {
    noLoop();

    noStroke();

    // fill(0,0,255);

    // circle(200,300,100);

    // fill(0,255,0);

    // circle(310,300,100);
    // circle(420,300,100);
    // circle(530,300,100);

   
    let circleDiameter = 50;
    let circleGap = 10;
    let totalCircles = 10;
    let totalRows =10;
    let startX = (canvasWidth - (circleDiameter * totalCircles) - (circleGap * totalCircles -1)) /2;
    let startY = (canvasHeight- (circleDiameter * totalCircles) - (circleGap * totalRows -1)) /2;
    let circleX = startX
    let circleY = startY;
    fill(255,0,0)
    for(let j =0; j < 10; j++) {
    for(let i = 0; i < 10; i++) {
        let randomDiameter = random(5,80);
        let randomRed = random(0,255);
        let randomBlue = random(0,255);
        let randomGreen = random(0,255);
        let randomAlpha = random(0,255);

        fill (randomRed,randomGreen,randomBlue,randomAlpha);
        circle(circleX,circleY,randomDiameter);
        circleX += (circleDiameter + circleGap);
  

    }
    circleX = startX;

    circleY += (circleDiameter + circleGap);
}

}
