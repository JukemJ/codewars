function christmasTree(height) {
    let ans = []
    for(let i = 1; i <= height; i++){
      ans.push(' '.repeat(height - i) + '*'.repeat(2*i - 1) + ' '.repeat(height - i))
    }
    return ans.join('\n')
  }