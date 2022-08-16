function calculateHypotenuse(a,b){
    if(Number.isInteger(a) && Number.isInteger(a) && a > 0 && b > 0){
      return +Math.hypot(a,b).toFixed(3)
    }
    throw 'error'
  }