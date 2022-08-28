function present(x, y){
    switch (x){
      case 'goodpresent': return x.split('').map(x=>String.fromCharCode(x.charCodeAt(0)+ y)).join('')
      case 'bang': return x.split('').reduce((a,b)=>a + b.charCodeAt(0) - y, 0)
      case 'badpresent': return 'Take this back!'
      case 'dog': return `pass out from excitement ${y} times`
      default: return x.split('').sort().join('')
    }
  }