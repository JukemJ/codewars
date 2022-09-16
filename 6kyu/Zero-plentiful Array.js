function zeroPlentiful(arr){
    let count = 0
    let zeroArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 0) count++ 
      else{  
        if(count > 0) zeroArr.push(Array(count).fill(0))
        count = 0
      }
    }
    if(count > 0) zeroArr.push(Array(count).fill(0))
    return zeroArr.every(x=>x.length > 3) ? zeroArr.length : 0
  }