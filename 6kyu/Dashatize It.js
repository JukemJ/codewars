// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'
function dashatize(num) {
    let arr = String(num).split('')
    for (let i = 0; i < arr.length; i++){
      if (+arr[i] % 2 == 1){
        if(arr[i+1] != '-') arr.splice(i+1,0,'-')
        if(arr[i-1] != '-') arr.splice(i,0,'-')
      }
    }
    if(arr[0] == '-')arr.shift()
    if(arr[arr.length - 1] == '-')arr.pop()
    return arr.join('')
  }