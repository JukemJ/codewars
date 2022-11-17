function nextNumb(val) {
    if(val >= 9999999999) return 'There is no possible number that fulfills those requirements'
    while(!unique(val) || val % 2 == 0 || val % 3 != 0)  val++
    return val
  }
  
  function unique(num){
    let set = new Set(num.toString().split(''))
    //console.log(set)
    return num.toString().length == set.size
  }