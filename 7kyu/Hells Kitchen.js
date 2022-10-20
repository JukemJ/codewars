function gordon(a){
    let vowels = 'eiou'
    return a.split(' ').map(x=>x.split('').map(y => y == 'a' ? '@' : vowels.includes(y) ? '*' : y.toUpperCase()).join('')).map(z => z+'!!!!').join(' ')
  }