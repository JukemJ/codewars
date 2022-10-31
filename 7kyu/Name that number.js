function nameThatNumber(num) {
    let numbers =['zero','one','two','three','four','five','six','seven','eight','nine','ten',
                  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',
                  'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    return num <= 20 ? numbers[num] : num %10 == 0 ? `${numbers[Math.floor(num/10)+18]}` :
                                                     `${numbers[Math.floor(num/10)+18]} ${numbers[num%10]}`
  }