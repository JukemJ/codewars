function infected(s) {
    let infected = s.split('X').map(x=>x.includes('1') ? x.length : 0).reduce((a,b)=>a+b,0)
    let people = s.split('').filter(x => x != 'X').length
    return 100 * infected / people || 0
  }