'use strict';
class Projectile {
  constructor (x,y, color2){
    this.position = [x,y];
    this.color = color2;
  }
  move (gameSpeed) {
    this.position[0] += gameSpeed*12;
  }
}
module.exports = Projectile;
