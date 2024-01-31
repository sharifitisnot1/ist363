const canvas ={
    width:800,
    height: 800

}
const totalCircles = 100;
const minDiameter = 10;
const maxDiameter = 100;
const margin = 50; 
const circles = [];






function setup() {
   
    createCanvas(canvas.width, canvas.height);

    
    noStroke();

   
    for (let i = 0; i < totalCircles; i++) {
        
        const circleSettings = {
            x: random(margin, canvas.width - margin),
            y: random(margin, canvas.height - margin),
            diameter: random(minDiameter, maxDiameter),
        };
        
        const myCircle = new Circle(circleSettings.x, circleSettings.y, circleSettings.diameter);

    
        circles.push(myCircle);
    }
}
   


function draw() {
    background(0);

    //noLoop();
    noStroke();
    for (let i =0; i < circles.length; i++) {
        circles[i].update();
        circle[i].draw();

    }

       }
