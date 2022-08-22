var isMonotone = function(arr){
    return arr.slice(0,arr.length-1).every((x,i)=>x <= arr[i+1])
  }