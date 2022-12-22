function stringTransformer(str) {
    return str.split('').map(x => x.toUpperCase() === x ? x.toLowerCase() : x.toUpperCase()).join('').split(' ').reverse().join(' ')
  }