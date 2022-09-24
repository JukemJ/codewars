function sc(screws){
    let time = screws.length * 2 - 1
    for(let i = 1; i < screws.length; i++){
      if(screws[i] != screws[i-1]) time += 5
    }
    return time
  }