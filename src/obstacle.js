'use strict';
class Obstacle {
  constructor (x,y){
    this.position = [x,y];
    this.height = Math.floor(27);
    this.width = Math.floor(30);
  }
  move (gameSpeed) {
    this.position[0] += gameSpeed*-2;
  }
}
module.exports = Obstacle;
