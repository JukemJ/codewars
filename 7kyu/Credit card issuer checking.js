function getIssuer(number) {
    let str = number.toString()
    if(str.length == 16){
      if(str.slice(0,4) == '6011') return 'Discover'
      if(str[0] == 4) return 'VISA'
      if(str[0] == 5){
        switch(str[1]){
          case '1': return 'Mastercard'
          case '2': return 'Mastercard'
          case '3': return 'Mastercard'
          case '4': return 'Mastercard'
          case '5': return 'Mastercard'
        }
      }
    }
    if(str.length == 13 && str[0]== 4)return 'VISA'
    if(str.length == 15 && (str.slice(0,2) == '34' || str.slice(0,2) == '37')) return 'AMEX'
    return 'Unknown'
  }