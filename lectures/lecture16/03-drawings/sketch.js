function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("grey")
    circle(550, 500, 100);
    rect(145, 420, 30, 10);
    circle(250, 500, 100);


    // https://p5js.org/reference/#/p5/rect
    fill('silver')
    rect(175, 350, 450, 100);
    rect (175, 200, 350 , 150);
    fill('white')
    rect (225, 225 , 295, 90);
    fill("yellow")
    circle(600, 380, 30)


    // add your drawing here:
    https://p5js.org/reference/#/p5/point
     point(110, 20);

     https://p5js.org/reference/#/p5/text
     text("Here is some text", 200, 40);

     https://p5js.org/reference/#/p5/ellipse
     fill('red');
     ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}