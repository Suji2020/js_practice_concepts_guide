function add(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(add(1, 2, 3)); // 6