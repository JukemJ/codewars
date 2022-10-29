class vm{
    constructor(initial){
        this.versionArr = initial ? [initial.split('.').slice(0,3)] : [[0,0,1]]
        this.major = this.versionArr[this.versionIndex[0]]
        this.minor = this.versionArr[this.versionIndex[1]]
        this.patch = this.versionArr[this.versionIndex[2]]
    }

    major(){
        this.major++
        this.minor = 0
        this.patch = 0
        this.versionArr.push([this.major,this.minor,this.patch])
    }
    minor(){
        this.minor++
        this.patch = 0
        this.versionArr.push([this.major,this.minor,this.patch])
    }
    patch(){
        this.patch++
        this.versionArr.push([this.major,this.minor,this.patch])
    }
    rollback(){
        this.versionArr.pop()
    }
    release(){
        return this.versionArr[this.versionArr.length - 1]
    }
}