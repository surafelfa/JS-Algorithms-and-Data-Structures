function findLongestWordLength(str) {
    let arr = str.split(' ');
    let maxStr = -1;
    arr.forEach((value, index)=>{
      if(maxStr < value.length){
        maxStr = value.length;
      }
    });
    console.log(maxStr)
    return maxStr;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");