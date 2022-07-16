let ans = 'On the First day of Christmas\nMy true love sent to me\nA partridge in a pear tree.\n\nOn the Second day of Christmas\nMy true love sent to me\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Third day of Christmas\nMy true love sent to me\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Fourth day of Christmas\nMy true love sent to me\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Fifth day of Christmas\nMy true love sent to me\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Sixth day of Christmas\nMy true love sent to me\nSix geese a-laying,\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Seventh day of Christmas\nMy true love sent to me\nSeven swans a-swimming,\nSix geese a-laying,\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Eighth day of Christmas\nMy true love sent to me\nEight maids a-milking,\nSeven swans a-swimming,\nSix geese a-laying,\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Ninth day of Christmas\nMy true love sent to me\nNine ladies dancing,\nEight maids a-milking,\nSeven swans a-swimming,\nSix geese a-laying,\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Tenth day of Christmas\nMy true love sent to me\nTen lords a-leaping,\nNine ladies dancing,\nEight maids a-milking,\nSeven swans a-swimming,\nSix geese a-laying,\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Eleventh day of Christmas\nMy true love sent to me\nEleven pipers piping,\nTen lords a-leaping,\nNine ladies dancing,\nEight maids a-milking,\nSeven swans a-swimming,\nSix geese a-laying,\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.\n\nOn the Twelfth day of Christmas\nMy true love sent to me\nTwelve drummers drumming,\nEleven pipers piping,\nTen lords a-leaping,\nNine ladies dancing,\nEight maids a-milking,\nSeven swans a-swimming,\nSix geese a-laying,\nFive gold rings,\nFour calling birds,\nThree French hens,\nTwo turtle doves, and\nA partridge in a pear tree.'
let lyrics = [
    'Twelve drummers drumming,',
    'Eleven pipers piping,',
    'Ten lords a-leaping,',
    'Nine ladies dancing,',
    'Eight maids a-milking,',
    'Seven swans a-swimming,',
    'Six geese a-laying,',
    'Five gold rings,',
    'Four calling birds,',
    'Three French hens,',
    'Two turtle doves, and',
    'A partridge in a pear tree'
  ]
  let a = ''
let days = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh','Twelfth']
for(let i=0;i<12;i++)a+=(`On the ${days[i]} day of Christmas\nMy true love sent to me\n${lyrics.slice(11-i).join('\n')}.\n\n`);
console.log(a.trim(),3)
// On the First day of Christmas
// My true love sent to me
// A partridge in a pear tree.

//console.log(lyrics.split(',').reverse())