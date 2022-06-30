function generateRange(min, max, step){
    let ans = []
    for(min; min <= max; min += step) ans.push(min)
    return ans
  }