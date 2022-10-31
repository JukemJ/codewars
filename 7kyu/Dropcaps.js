function dropCap(n) {
    return n.split(' ').map(x=> x.length > 2 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x)
                .join(' ')
  }