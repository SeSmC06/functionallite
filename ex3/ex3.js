function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
function double(x) {
  return x * 2;
}
function half(x) {
  return x / 2;
}

function compose(...args) {
  // right to left
  return function composed(result) {
    for (let i = args.length - 1; i >= 0; i--) {
      result = args[i](result);
    }
    return result;
  };
}
function pipe(...args) {
  // left to right
  return function piped(result) {
    for (let i = 0; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  };
}

var f = compose(decrement, double, increment, half);
var p = pipe(half, increment, double, decrement);

f(3) === 4;
// true

f(3) === p(3);
// true
