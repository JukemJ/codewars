function compareVersions (version1, version2) {
    version1 = version1.split('.').map(x=>+x)
    version2 = version2.split('.').map(x=>+x)
    while (version1.length < version2.length) version1.push(0)
    while (version2.length < version1.length) version2.push(0)
    for (let i = 0; i < version1.length; i++){
      if(version1[i] > version2[i]) return true
      if(version1[i] < version2[i]) return false
    }
    return true
}