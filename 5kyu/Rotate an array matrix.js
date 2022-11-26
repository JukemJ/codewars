function rotate(matrix, direction) {
    let ans = []
    if(direction == 'clockwise'){
      for(let i = 0; i < matrix[0].length; i++){
        let arr = []
        for(let j = matrix.length - 1; j >= 0; j--){
          arr.push(matrix[j][i])
        }
        ans.push(arr)
      }
    }
    
    else{
      for(let i = matrix[0].length - 1; i >= 0; i--){
        let arr = []
        for(let j = 0; j < matrix.length; j++){
          arr.push(matrix[j][i])
        }
        ans.push(arr)
      }
    }
    return ans
    
  }