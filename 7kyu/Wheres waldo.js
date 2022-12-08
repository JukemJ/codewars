function findWaldo(crowd) {
    let x = 0
    let y = 0
    let obj = {}
    for(let i = 0; i < crowd.length; i++){
      for(let j = 0; j < crowd[i].length; j++){
        obj[crowd[i][j]] ? obj[crowd[i][j]]++ : obj[crowd[i][j]] = 1
      }
    }
    for(let char in obj) if (obj[char] == 1) var waldo = char
    return [crowd.findIndex(x => x.includes(waldo)),crowd[crowd.findIndex(x => x.includes(waldo))].indexOf(waldo)]
  }