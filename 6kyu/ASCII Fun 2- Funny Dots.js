function dot(n,m){
    return Array(m+1).fill(Array(n+1).fill('+').join('-'.repeat(3))).join(`\n${Array(n+1).fill('|').join(' o ')}\n`)
    
  }