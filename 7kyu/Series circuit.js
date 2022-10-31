function voltage(arr,total){
    let sum = arr.reduce((a,b) => a+b,0)
    return arr.map(x => +(x / sum * total).toFixed(2))
  }