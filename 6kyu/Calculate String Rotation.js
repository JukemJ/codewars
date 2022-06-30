function shiftedDiff(first,second){
    let count = 0
    let limit = first.length
    while (first != second && count < limit){
      count++
      first = first[first.length - 1] + first.slice(0,first.length - 1)
      console.log(first)
    }
    return first === second ? count : -1
  }