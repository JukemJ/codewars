function splitTheBill(x) {
    let average = Object.values(x).reduce((a,b)=>a+b,0) / Object.values(x).length
    for(let dude in x) x[dude] = +(x[dude] - average).toFixed(2)
    return x
  }