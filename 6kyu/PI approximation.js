function iterPi(epsilon) {
    let n = 1
    let pi = 0
    for(var i = 0; Math.abs(Math.PI - pi * 4) > epsilon; i++){
      i % 2 === 0 ? pi += 1/n : pi -= 1/n
      n += 2
    }
    return [i,+(pi*4).toFixed(10)]
  }