function mult(x, y, z) {
  return x * y * z;
}

function recursMul(product, num, ...nums) {
  if (nums.length === 0) return product * num;

  return product * recursMul(num, ...nums);
}

recursMul(3, 4, 5); // 60

recursMul(3, 4, 5, 6); // Oops!
