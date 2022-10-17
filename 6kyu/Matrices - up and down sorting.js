function upDownColSort(matrix) {
    let arr = []
    for(let num of matrix){
      for(let element of num){
        arr.push(element)
      }
    }
    arr = arr.sort((a,b)=>a-b)
    //console.log(arr)
    let ans = []
    let flip = false
    for(let i = 0; i < arr.length; i+=matrix.length){
      flip ? ans.push(arr.slice(i,i + matrix.length).reverse()) : ans.push(arr.slice(i,i+matrix.length))
      flip = !flip
    }
    let ans2 = []
    for(let i = 0; i < ans[0].length; i++){
      let temp = []
      for(let j = 0; j < ans.length; j++){
        //console.log(ans[j][i])
        temp.push(ans[j][i])
      }
      ans2.push(temp)
    }
    
    return ans2
    
  }