function moveZeros(arr) {
    let ans = []
    let zero = 0
    for(let ele of arr){
      ele === 0 ? zero ++ : ans.push(ele)
    }
    return ans.concat(Array(zero).fill(0))
  }