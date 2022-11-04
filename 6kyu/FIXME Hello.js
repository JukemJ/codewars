class Dinglemouse {

    constructor() {
      this.name = this.age = this.sex = 0
      this.arr = []
    }

    setAge(age) {
      this.age = age
      if(!this.arr.includes('age')) this.arr.push('age')
      return this
    }

    setSex(sex) {
      this.sex = sex
      if(!this.arr.includes('sex')) this.arr.push('sex')
      return this
    }

    setName(name) {
      this.name = name
      if(!this.arr.includes('name')) this.arr.push('name')
      return this
    }

    hello() {
      let str = ''
      for(let i = 0; i < 3; i++){
        switch (this.arr[i]){
          case 'name': 
            str += ` My name is ${this.name}.`
            break
          case 'sex': 
            str += ` I am ${this.sex == 'M' ? "male" : "female"}.`
            break
          case 'age': 
            str += ` I am ${this.age}.`
            break
        }
      }
      return `Hello.${str}`
    }
}