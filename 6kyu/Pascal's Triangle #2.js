function pascal(depth) {
    if(depth == 1) return [[1]]
    let arr = [[1],[1,1]]
    while (arr.length < depth){
      let bit = [1]
      for(let i = 0; i < arr[arr.length - 1].length - 1; i++){
        bit.push(arr[arr.length - 1][i] + arr[arr.length - 1][i+1])
      }
      bit.push(1)
      arr.push(bit)
    }
    return arr
  }