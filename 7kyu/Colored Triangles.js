function triangle(row) {
    while(row.length > 1){
      let ans = ''
      for(let i = 0; i < row.length - 1; i++) ans += combine(row[i],row[i+1])
      row = ans
    }
    return row
  }
  
  function combine(color1,color2){
    if(color1 == color2) return color1
    switch(color1){
      case 'B': return color2 == 'G' ? 'R' : 'G'
      case 'G': return color2 == 'B' ? 'R' : 'B'
      case 'R': return color2 == 'G' ? 'B' : 'G'
    }
  }