function pyramidHeight(n) {
    let blocks = 0
    let levels = 0
    for (let i = 1; blocks <= n; i++){
      blocks += i*i
      levels++
    }
    return levels - 1
  }