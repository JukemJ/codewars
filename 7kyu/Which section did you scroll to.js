function getSectionIdFromScroll(scrollY,sizes){
    let pixels = 0
    for(let i = 0; i < sizes.length; i++){
      pixels += sizes[i]
      if(pixels > scrollY) return i
    }
    return -1
  }