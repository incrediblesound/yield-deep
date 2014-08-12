module.exports = function* readObj (obj, key){
  if (typeof obj !== 'object') {
    if (Array.isArray(obj)) {
      var l = 0, d = obj.length;
      for(l; l<d; l++) {
        yield* readObj(obj[k[i]], k[i]);
      }
    }
    else { yield {key: key, value: obj}; }
  } 
  else {
    var i = 0, k = Object.keys(obj);
    for(i; i < k.length; i++) {
      yield* readObj(obj[k[i]], k[i]);
    }
  }
  return;
};