function largestOfFour(arr) {
    let maxArr = [], maxNum;
    for(let i = 0; i < arr.length; i++){
      maxNum = arr[i][0];
      for(let j = 1; j < arr[i].length; j++){
        if(maxNum < arr[i][j]){
          maxNum = arr[i][j];
        }
      }
      maxArr.push(maxNum);
    }
    return maxArr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);