
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  }
  return array.reduce((min, current) => {
      return min < current ? min : current;
  });
};

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.reduce((max, current) => {
        return max > current ? max : current;
    });
};

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let summa = array.reduce((sum, current) => {
        return sum + current;
    });
    return summa / array.length;
};
