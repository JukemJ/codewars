function numberOfPairs(gloves){
    let obj = {}
    let pairs = 0
    for (let glove of gloves){
      if(Object.keys(obj).includes(glove)){
        if (obj[glove] == 1){
          pairs++
          obj[glove] = 0
        }
        else obj[glove] = 1
      }
      else obj[glove] = 1
    }
    return pairs
  }