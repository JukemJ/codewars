function solve(x, y) {
    let map = new Map([['1','1'],['6','9'],['8','8'],['9','6'],['0','0']])
    let arr = []
    for(x; x < y; x++){
      x = x.toString()
      if(x.split('').reverse().map(x=>map.get(x)).join('') == x) arr.push(x)
    }
    return arr.length
  };