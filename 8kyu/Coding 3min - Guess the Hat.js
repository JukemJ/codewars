function sc(exchange){
    let ball = '2'
    for(let swap of exchange){
      if(swap.split('-').includes(ball)){
        if(swap.split('-').indexOf(ball) == 0) ball = swap.split('-')[1]
        else ball = swap.split('-')[0]
      }
    }
    return ball
  }