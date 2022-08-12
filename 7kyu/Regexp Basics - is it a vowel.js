String.prototype.vowel = function() {
    const vowels = ['a','e','i','o','u']
    if(this.length < 1)return false
    return vowels.includes(this.toLowerCase())
  };