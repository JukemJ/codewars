function solution(start, finish) {
    let jumps = 0
    while(start < finish){
      if(start + 3 <= finish) start += 3
      else start++
      jumps++
    }
    return jumps
  }