// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){
    arr = str.split(' ')
    ans = []
    for (word of arr){
      if (/[\.!?]/.test(word)) ans.push(word)
      else {
        temp = word.slice(1) + word[0] + 'ay'
        ans.push(temp)
        }
    }
    return (ans.join(' '))
  }