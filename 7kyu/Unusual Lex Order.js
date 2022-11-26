function unusualLexOrder(arr){
    return arr.sort((a,b) => a.split('').reverse().join('')
                    .localeCompare(b.split('').reverse().join('')))
  }