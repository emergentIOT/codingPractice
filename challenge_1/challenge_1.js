let stars = [];
var i;
function setup() {
    //createCanvas(400, 400);
    createCanvas(900, 900);
    //stars = new Star[100];

    for(i=0; i<1000; i++ ) {
        stars[i] = new Star();
    }
    
}
  
function draw() {
    background(0);
    translate(width/2, height/2);
    for (i=0; i<stars.length; i++){
        stars[i].update();
        stars[i].show();
    }
}

    /**
    * Class for the object: Star
    */
    class Star {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);

    }

    update() {
        this.z = this.z - 6;
        if( this.z < 1 ) {
            this.z = random(width);
        }
    }

    show() {
        fill(255);
        noStroke();
        this.sx = map(this.x/this.z, 0 , 1, 0, width);
        this.sy = map(this.y/this.z, 0, 1, 0, height);
        ellipse(this.sx, this.sy, 8, 8);
    }

}