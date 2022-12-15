const alpha = 'abcdefghijklmnopqrstuvwxyz'
function findTheNumberPlate(customerID){
  let begin = 0
  let middle = 0
  let end = 0
  let right = 1
  while (customerID){
    right++
    if(right == 1000){
      begin++
      right = 1
    }
    if(begin == 26){
      middle++
      begin = 0
    }
    if(middle == 26){
      end++
      middle = 0
    }
    customerID--
  }
  if(right < 10) right = '00' + right
  else if(right < 100) right = '0' + right
  return `${alpha[begin]}${alpha[middle]}${alpha[end]}${right}`
}