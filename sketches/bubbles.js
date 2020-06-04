let bubbles = [];
let numBalls = 12;
let counter = 0;

function setup() {
  let cnvbg = createCanvas(windowWidth, windowHeight);
//   cnvbg.style('display', 'block');
  

  cnvbg.parent('cnvbg');

  // Starts in the middle
  for (let i = 0; i < numBalls; i++) {
    bubbles[i] = new Bubble(
      random(width),
      random(height / 2, height),
      random(30, 70),
      i,
      bubbles
    );
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);


//   if (keyCode == ENTER) {
    bubbles.forEach(bubble => {
      bubble.intercept();
      bubble.update();
      bubble.show();

    });
  }
// }

  class Bubble {
    constructor(x, y, rad, idin, oin) {
      this.x = x; //width / 2;
      this.y = y; //height;
      this.rad = rad;
      this.alpha = 255;
      this.r = 255;
      this.g = 192;
      this.b = 203;
      this.vx = 0;
      this.vy = 0;
      this.id = idin;
      this.others = oin;
      this.generatebubble = false;

    }

    show() {
      if (this.generatebubble) {
        noStroke();
        // this.r=255;
        // this.g=192;
        // this.b=203;
        // 255,192,203
        fill(`rgba(${this.r},${this.g},${this.b},${this.alpha/255})`);
        ellipse(this.x, this.y, this.rad, this.rad);
      } else {

        fill(0);
      }
    }

    update() {

      this.x += random(-1, 1);
      // Moving up at a constant speed
      this.y = this.y - 1;
      this.alpha--;
      console.log(this.alpha);

      // Reset to the bottom
      if (this.y < 0 || this.alpha < 0) {
        this.y = height;
        this.alpha = 255;
      }
    }


    intercept() {
      for (let i = this.id + 1; i < numBalls; i++) {
        // console.log(others[i]);
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].rad / 2 + this.rad / 2;
        //   console.log(distance);
        //console.log(minDist);
        if (distance < minDist) {
          //         if intercept, dont generate it 
          this.generatebubble = false;

        } else {
          this.generatebubble = true;
        }
      }
    }
  }