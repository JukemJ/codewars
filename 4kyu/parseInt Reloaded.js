function parseInt(string){
    if(string == 'one million') return 1000000
    
    let numbers = {'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9,
                    'ten':10, 'eleven':11, 'twelve':12, 'thirteen':13, 'fourteen':14, 'fifteen':15, 'sixteen':16,
                    'seventeen':17, 'eighteen':18, 'nineteen':19, 'twenty':20, 'thirty':30, 'forty':40,
                    'fifty':50, 'sixty':60, 'seventy':70, 'eighty':80, 'ninety':90, 'hundred':100, 'thousand':1000}
    string = string.split('thousand')
    let left = 0
    let right = 0
    
    for(let word of string[0].split(' ')){
        if(word.includes('-')) left += numbers[word.split('-')[0]] + numbers[word.split('-')[1]]
        if(Object.keys(numbers).includes(word)){
            if(word == 'hundred') left *= 100
            else left += numbers[word]
        }
    }
    if(string.length > 1){
        left *= 1000
        for(let word of string[1].split(' ')){
            if(word.includes('-')) right += numbers[word.split('-')[0]] + numbers[word.split('-')[1]]
            if(Object.keys(numbers).includes(word)){
                if(word == 'hundred') right *= 100
                else right += numbers[word]
            }
        }
    }
    return left + right
}





console.log('one', 1, parseInt('one'))
console.log('twenty', 20, parseInt('twenty'))
console.log('two hundred forty-six', 246, parseInt('two hundred forty-six'));
console.log('seven hundred eighty-three thousand nine hundred and nineteen', 783919, parseInt('seven hundred eighty-three thousand nine hundred and nineteen'))