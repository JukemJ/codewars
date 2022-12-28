function smaller(nums) {
  
    return nums.map((x,i,arr) => nums.slice(i+1).filter(z => z < nums[i]).length)
  }