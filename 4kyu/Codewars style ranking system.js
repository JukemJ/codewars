class User{
    constructor(){
      this.rankArr = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]
      this.index = 0
      this.rank = this.rankArr[this.index]
      this.progress = 0
    }
    incProgress(num){
      if(num < -8 || num > 8 || num == 0)throw 'error'
      let diff = this.rankArr.indexOf(num) - this.rankArr.indexOf(this.rank)
      if(diff == 0) this.progress += 3
      else if(diff == -1) this.progress++
      else this.progress += 10 * diff * diff
      this.rankUp()
      
    }
    rankUp(){
      while(this.progress >= 100 && this.index < this.rankArr.length){
        this.index++
        this.rank = this.rankArr[this.index]
        this.progress -= 100
      }
      if (this.rank == 8) this.progress = 0
    }
  }