function minMinMax(array) {
    let arr = array.sort((a,b) => a - b)
    let small = arr[0]
    let big = arr[arr.length - 1]
    let min = arr[0] + 1
    while (arr.includes(min)) min++
    return [small, min, big]
  }