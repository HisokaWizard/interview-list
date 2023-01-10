const removeElement = function (nums, val) {
  if (!nums || nums.length === 0) return 0;
  let finalItemCount = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      finalItemCount--;
      i--;
    }
  }

  console.log(nums);
  return finalItemCount;
};

console.log(
  removeElement(
    [4, 5, 6, 7, 4, 4, 4, 4, 4, 4, 4, 0, 3, 1, -4, -2, -7777, 33, 34, 5, 4, 55, 66, 5, 6, 7],
    4,
  ),
);
