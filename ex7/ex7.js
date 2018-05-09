// code here! :)
function valFn(v) {
  return function() {
    return v;
  };
}

function add(x, y) {
  return x + y;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

function addn(fns) {
  // reduce:
  return fns.reduce(function reducer(composedFn, fn) {
    return function() {
      return add2(composedFn, fn);
    };
  })();
}
