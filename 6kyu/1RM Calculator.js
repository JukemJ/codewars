function calculate1RM(w, r){
    if(r == 1) return w
    if(r == 0) return 0
    let a = w * (1 + r / 30)
    let b = 100 * w / (101.3 - 2.67123 * r)
    let c = w * Math.pow(r,0.1)
    return Math.round(Math.max(a,b,c))
  }