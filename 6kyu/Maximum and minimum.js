function max(){
    let arr = Array.from(arguments)
    while(arr.some(x => Array.isArray(x))) arr = arr.flat()
    if(arr.some(x => isNaN(x+1))) return NaN
    if(!arr.length) return 0
    let num = +arr[0]
    for(let x of arr) if(+x > num) num = +x
    return +num
  }
  
  function min(){
    
    let arr = Array.from(arguments)
    if(!arr.length) return 0
    while(arr.some(x => Array.isArray(x))) arr = arr.flat()
    if(arr.some(x => isNaN(x+1))) return NaN
    if(!arr.length) return 0
    let num = +arr[0]
    for(let x of arr) if(+x < num) num = +x
    return +num
  }