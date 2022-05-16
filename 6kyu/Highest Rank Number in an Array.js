// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let obj = {}
    for(let number of arr){
      if(obj.hasOwnProperty(number)) obj[number]++
      else obj[number] = 1
    }
    let num = Object.keys(obj)[0]
    let max = 0
    for(let number in obj){
      if(obj[number] >= max){
        max = obj[number]
        num = number
        }
    }
    return +num
  }