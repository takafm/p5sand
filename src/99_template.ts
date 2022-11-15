import p5 from "p5";

const sketch = (p: p5) => {

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
        p.background(220);
        p.ellipse(p.windowWidth / 2, p.windowHeight / 2, 80, 80);
    };
};

new p5(sketch);