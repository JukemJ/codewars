function sc(array){
    let max = 0
    for(let i = 0; i < array.length-1; i++){
      for(let j = i+1; j < array.length; j++){
        let num = Math.max(array[i] + array[j],
                           array[i] - array[j],
                           array[i] * array[j],
                           array[j] - array[i])
        if(array[j] != 0) num = Math.max(array[i] / array[j],num)
        if(array[i] != 0) num = Math.max(array[j] / array[i],num)
        if(num > max) max = num
      }
    }
    return max
  }