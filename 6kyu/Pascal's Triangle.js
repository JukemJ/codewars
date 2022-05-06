function pascalsTriangle(n) {
    let ans = [1]
    for(let i = 0; i < n-1; i++){
      let temp = [1]
      for(let j = 0; j < i; j++){
        temp.push(ans[i][j] + ans[i][j+1])
      }
      temp.push(1)
      ans.push(temp)
    }
    return(ans.flat())
  }