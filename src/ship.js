'use strict'
class Ship {
  constructor (x,y, boundingBox){
    this.position = [x,y];
    this.speed = [0,0]
    this.boundingBox = boundingBox;
  }
  move (elapsedTime, gameSpeed) {
    var positionChange = [gameSpeed*0.01*(elapsedTime)*this.speed[0],gameSpeed*0.01*(elapsedTime)*this.speed[1]];
    this.position = this.boundingBox.limit([
      this.position[0] + positionChange[0],
      this.position[1] + positionChange[1],
    ]);
  }
}
module.exports = Ship;
