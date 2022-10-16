function well(x){
    let good = 0
    for(let ideas of x){
      for(let idea of ideas){
        if(idea.toString().toLowerCase() == 'good') good++
      }
    }
    return good == 0 ? 'Fail!' : good > 2 ? 'I smell a series!' : 'Publish!'
  }