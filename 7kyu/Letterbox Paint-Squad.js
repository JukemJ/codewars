var paintLetterboxes = function(start, end) {
    let ans = [0,0,0,0,0,0,0,0,0,0]
    for(start; start <= end; start++){
      for(let digit of start.toString()) ans[digit]++
    }
    return ans
  }