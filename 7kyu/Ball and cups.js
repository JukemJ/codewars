function cupAndBalls(b, arr){
    for(let swap of arr){
      if(swap[0] == b) b = swap[1]
      else if(swap[1] == b) b = swap[0]
    }
    return b
  }