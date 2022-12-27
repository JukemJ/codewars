function daysUntilChristmas(days) {
    let christmas = new Date(days.getFullYear(),11,25)
    if(christmas.getTime() < days.getTime()) christmas.setFullYear(christmas.getFullYear()+1)
    return (christmas.getTime() - days.getTime()) / 86400000
  }