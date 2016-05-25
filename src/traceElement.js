'use strict';
class TraceElement {
  constructor (x,y){
    this.position = [x,y];
  }
  move (gameSpeed) {
    this.position[0] += -gameSpeed*4;
  }
}
module.exports = TraceElement;
