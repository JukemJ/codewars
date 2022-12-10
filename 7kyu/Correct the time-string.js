function timeCorrect(timestring) {
    if(timestring == null) return null
    if(!timestring.length) return ''
    timestring = timestring.split(':')
    let hr = +timestring[0]
    let min = +timestring[1]
    let sec = +timestring[2]
    if(isNaN(hr) || isNaN(min) || isNaN(sec)) return null
    if(sec > 59){
      min++
      sec -= 60
    }
    if(min > 59){
      hr++
      min -= 60
    }
    if(hr >= 24) hr = hr%24
    return `${hr < 10 ? '0'+hr:hr}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
  }