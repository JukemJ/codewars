// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

function kebabize(str) {
    let temp = ''
    let ans = []
    for(let letter of str){
      if(letter.charCodeAt(0) < 58 || letter.charCodeAt(0) == 32)continue
      if(letter == letter.toUpperCase()) {ans.push(temp); temp = ''}
      temp += letter.toLowerCase()
    }
    ans.push(temp)
    if(ans[0] == '')ans.shift()
    return ans.join('-')
  }