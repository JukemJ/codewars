function sc(width,length,gaps){
    let ans = (width * 2 + (length - 2) * 2) / (gaps + 1)
    return Number.isInteger(ans) ? ans : 0
  }