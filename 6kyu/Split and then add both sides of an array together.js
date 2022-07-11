function splitAndAdd(arr, n) {
    for(let j = 0; j < n; j++){
      let slice1 = arr.slice(0,Math.floor(arr.length/2)).reverse()
      let slice2 = arr.slice(Math.floor(arr.length/2)).reverse()
      let arr2 = []
      for(let i = 0; i < slice2.length; i++){
        if(i==slice1.length)arr2.push(slice2[i])
        else arr2.push(slice1[i] + slice2[i])
        }
      arr = arr2.reverse()
      }
    return arr
  }