function sortArray(array) {
    let odd = array.filter(x => x % 2 != 0).sort((a,b) => a-b)
    let even = array.filter(x => x % 2 == 0)
    let ans = []
    for(let num of array) ans.push(num % 2 == 0 ? even.shift() : odd.shift())
    return ans
  }
  