function driver(data) {
    let ans = ''
    let months = {'Jan':'01', 'Feb':'02', 'Mar': '03', 'Apr':'04', 'May': '05', 'Jun':'06', 'Jul':'07', 'Aug':'08', 'Sep':'09',
                  'Oct':'10', 'Nov':'11', 'Dec':'12'}
    if(data[2].length < 5){
      ans += data[2].toUpperCase()
      while(ans.length < 5) ans += '9'
    }
    else ans += data[2].slice(0,5).toUpperCase()
    ans += data[3][data[3].length - 2]
    let month = months[data[3].split('-')[1].slice(0,3)]  
    if(data[4] == 'F'){
      let temp = month.split('')
      temp[0] = +temp[0] + 5
      month = temp.join('')
      }
    ans += `${month}${data[3].slice(0,2)}${data[3].slice(-1)}${data[0][0]}`
    data[1].length == 0 ? ans += '9' : ans += data[1][0]
    ans += '9AA'  
    return ans
  }