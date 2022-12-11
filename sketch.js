const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()

let size = 150;

const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: false,
  dimensions: [512, 512],
  bleed: 1 / 8,
};

const sketch = () => {
    noStroke();
    fill(0);

  return ({ context, width, height }) => {
   rectMode(CENTER);
    rect(width/5, height / 2, width/4);
    circle(width/2, height /2, width/4);
    triangle(width * 0.93,height * 0.62,  
      width * .80, height * 0.36, width * 0.65, height * 0.62);
      noFill();
      stroke(0);
  };
};

canvasSketch(sketch, settings);
