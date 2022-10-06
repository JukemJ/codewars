function isLeapYear(duration, year) {
    let two = 0
    while(!Number.isInteger(duration)){
      duration *= 2
      two++
    }
    return year % Math.pow(2,two) == 0
  }