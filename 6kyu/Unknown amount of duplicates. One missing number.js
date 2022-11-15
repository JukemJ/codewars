function findDupsMiss(arr) {
    let dupes = []
    arr = arr.sort((a,b) => a-b)
    let miss = arr[0]
    let set = new Set()
    for(let i = 0 ; i < arr.length; i++){
      set.has(arr[i]) ? dupes.push(arr[i]) : set.add(arr[i])
      if(miss == arr[i]) miss++
    }
    return [miss,dupes]
  }