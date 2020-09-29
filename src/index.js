exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;
  
  let minValue = Number.MAX_VALUE
  array.forEach(element => {
    if (minValue > element) {
      minValue = element
    }
  });    
  return minValue;
}

exports.max = function max (array) {
if (typeof array === 'undefined' || array.length == 0) return 0;

let maxValue = Number.MIN_VALUE
array.forEach(element => {
  if (maxValue < element) {
    maxValue = element
  }
  });
  return maxValue
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length == 0) return 0;

  let sum = 0
  array.forEach(element => {
    sum += element  
  });  
  return sum / array.length 
}
