function solve(arr){
    let ans = []
    arr = arr.sort((a,b)=>a-b)
    let even = arr.length % 2 == 0
    while (arr.length){
      ans.push(arr.pop())
      ans.push(arr.shift())
    }
    return even ? ans : ans.slice(0,ans.length-1)
  };