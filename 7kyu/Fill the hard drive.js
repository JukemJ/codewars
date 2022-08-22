function save(sizes, hd) {
    while(sizes.reduce((a,b)=>a+b,0) > hd) sizes.pop()
    return sizes.length
  }