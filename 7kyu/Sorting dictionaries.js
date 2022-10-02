function sortDict(dict) {
    let arr = []
    for(let key in dict) arr.push([Number.isInteger(+key + 1) ? +key : key,dict[key]])
    return arr.sort((a,b) => b[1] - a[1])
  }
  