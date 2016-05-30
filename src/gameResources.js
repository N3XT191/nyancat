'use strict'
var _ = require('lodash');
class GameResources {
  constructor(config) {
    this.config = config;
    this.loaders = {
      images: this.loadImage,
      sounds: this.loadAudio,
      fails: this.loadAudio
    };
  }

  load(){
    var promisedData = _.mapValues(this.config, (sources, type) => {
      return _.mapValues(sources, this.loaders[type]);
    });
    var results = {};
    _.forEach(promisedData, (promiseObject, type) => {
      results[type] = {};
      _.forEach(promiseObject, (promise, name) => {
        promise.then(value => results[type][name] = value);
      });
    });
    var allPromises = _.flatten(_.map(promisedData, promiseObject => _.values(promiseObject)));
    return Promise.all(allPromises).then(() => {
      _.assign(this, results);
      console.log(results);
      return results;
    });
  }

  loadImage(path){
    var image = new Image();
    return new Promise(function(resolve) {
      image.onload = function(){
        resolve(image);
      };
      image.src = path;
    });
  }

  loadAudio(path){
    return Promise.resolve(new Audio(path));
  }
}
module.exports = GameResources;
