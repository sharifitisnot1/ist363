class Circle {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.isRising = true;
        this.color = null;
        this.colorFrom = color(0, 14, 84);
        this.colorTo = color(247, 105, 0);
        this.lerpAmount = 0;
    }

    draw() {
        fill(this.color);
        circle(this.x, this.y, this.diameter);
    }

    update() {
        this.lerpAmount = map(this.diameter, minDiameter, maxDiameter, 0, 1);
        this.color = lerpColor(this.colorFrom, this.colorTo, this.lerpAmount);

        if (this.isRising) {
            this.y -= 2;
        } else {
            this.y += 2;
        }

        if (this.y <= (this.diameter / 2)) {
            this.isRising = false;
        }
        if (this.y >= (canvas.height - this.diameter / 2)) {
            this.isRising = true;
        }
    }
}

        
        
        



 