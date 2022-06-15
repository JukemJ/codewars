function multiTable(number) {
    let ans = ''
    for (let i = 1; i <= 10; i++){
      ans+= `${i} * ${number} = ${i*number}`
      if(i!= 10)ans += '\n'
    }
    return ans
  }