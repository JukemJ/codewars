function arrayDiffVeryFast(a, b) {
    let set = new Set(b)
    return a.filter(x => !set.has(x))
  }