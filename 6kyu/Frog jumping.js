function solution(a) {
    let frog = 0
    let jumps = 0
    let set = new Set()
    while (frog >= 0 && frog < a.length){
      if(set.has(frog)) return -1
      set.add(frog)
      frog += a[frog]
      jumps++
    }
    return jumps
  }