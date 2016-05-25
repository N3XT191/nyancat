'use strict';
class BoundingBox {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
  }
  limit(originalPosition) {
    return [
      this._limitSingle(originalPosition[0],this.begin[0], this.end[0]),
      this._limitSingle(originalPosition[1],this.begin[1], this.end[1])
     ];
  }
  _limitSingle(value, low, high){
    return Math.max(low, Math.min(high, value));
  }
  isInside(position) {
    if (position[0] > this.begin[0] -50  && position[0] < this.end[0] && position[1] > this.begin[1]- 50  && position[1] < this.end[1]) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = BoundingBox;
