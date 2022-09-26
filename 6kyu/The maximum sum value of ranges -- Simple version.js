function maxSum(arr,ranges){
    let ans = []
    for(let range of ranges){
      let sum = 0
      for(range[0]; range[0] <= range[1]; range[0]++){
        sum += arr[range[0]]
      }
      ans.push(sum)
    }
    return Math.max(...ans)
    
    
  }