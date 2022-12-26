function merryChristmas(funcs){
    let map = funcs.map(x => x())
    let ans = []
    for(let letter of 'Merry Christmas!') ans.push(funcs[map.indexOf(letter)].name)
    return ans.join()
    
    
  }