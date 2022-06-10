// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    let ans = []
    input = input.split('\n')
    for(let word of input){
      let temp = ''
      for(let i = 0; i < word.length; i++){
        if(markers.includes(word[i])){
          ans.push(word.slice(0,i).trim())
          break
        }
        else temp += word[i]
      }
      if (temp === word) ans.push(word)
      temp = ''
    }
    return(ans.join('\n'))
  };