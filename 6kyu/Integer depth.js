function computeDepth (x){
    let set = new Set()
    let count = 0
    while(set.size < 10){
      count++
      for(let digit of (x * count).toString()) set.add(+digit)
    }
    return count
  }