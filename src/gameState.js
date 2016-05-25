'use strict';
var BoundingBox = require('./boundingBox'),
  Ship = require('./ship'),
  moment = require('moment');
class GameState {
  constructor (boundingBoxStart, boundingBoxEnd){
    this.boundingBox = new BoundingBox(boundingBoxStart, boundingBoxEnd);
    this.ship = new Ship(200,200, this.boundingBox);
    this.obstacles = [];
    this.projectiles = [];
    this.trail = [];
    this.beginTime = moment();
    this.shootsLeft = 3;
  }
  cleanse() {
    for (var i = 0; i < this.trail.length; i++){
      if (!this.boundingBox.isInside(this.trail[i].position))
        this.trail.splice(i,1);
    }
    for (var j = 0; j < this.obstacles.length; j++){
      if (!this.boundingBox.isInside(this.obstacles[j].position))
        this.obstacles.splice(j,1);
    }
    for (var k = 0; k < this.projectiles.length; k++){
      if (!this.boundingBox.isInside(this.projectiles[k].position))
        this.projectiles.splice(k,1);
    }
  }
  addShoot(x) {
    this.shootsLeft += x;
  }
}
module.exports = GameState;
