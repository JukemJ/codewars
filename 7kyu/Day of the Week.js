function dayOfTheWeek(str){
    str = str.split('/')
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let date = new Date(str[2],str[1] - 1,str[0])
    return days[date.getDay()]
  }