function sc(apple){
    for(let i = 0; i < apple.length; i++){
      if(apple[i].includes('B')) return [i,apple[i].indexOf('B')]
    }
  }