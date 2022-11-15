import p5 from "p5";

var numA = 14;
var numB = 9;
var scale = 50;

numA *= scale;
numB *= scale;

var rectWidth = numB;
var xPos = 0;
var yPos = 0;

const sketch = (p: p5) => {

    p.setup = () => {
        p.createCanvas(p.windowHeight, p.windowHeight);
        p.background(220);
        euclidean(p);
    };

    p.draw = () => {
        //p.ellipse(p.windowWidth / 2, p.windowHeight / 2, 80, 80);
    };
};

new p5(sketch);

function euclidean(p: p5) {
    var i = 0;
    while (rectWidth > 0) {
        i++;
        if (i % 2 == 1) {
            while (xPos + rectWidth <= numA) {
                p.rect(xPos, yPos, rectWidth, rectWidth);
                xPos += rectWidth;
            }
            rectWidth = numA - xPos;
        } else {
            while (yPos + rectWidth <= numB) {
                p.rect(xPos, yPos, rectWidth, rectWidth);
                yPos += rectWidth;
            }
            rectWidth = numB - yPos;
        }
    }
}