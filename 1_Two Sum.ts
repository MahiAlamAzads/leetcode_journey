function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i <= nums.length - 1; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([1, 2, 3, 4], 4));
