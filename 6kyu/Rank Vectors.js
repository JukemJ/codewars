function ranks(a) {
    let obj = {}
    let arr = []
    let rankNum = 1
    for(let num of a.slice(0).sort((a,b)=> b-a)){
      if(!obj[num]){
        obj[num] = rankNum
      }
      rankNum++
    }
    for(let num of a) arr.push(obj[num])
    return arr
    
  }