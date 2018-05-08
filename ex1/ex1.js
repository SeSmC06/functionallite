function foo(x) {
  y++;
  z = x * y;
}

var y = 5,
  z;

foo(20);
z; // 120

foo(25);
z; // 175

function bar(x, y) {
  y = y + 1;
  var z;

  foo(x);

  return [y, z];
  function foo(x) {
    z = x * y;
  }

  // foo returns z
}
