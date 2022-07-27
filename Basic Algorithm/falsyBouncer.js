function bouncer(arr) {
    for(let i = 0; i < arr.length; ){
      if(!arr[i]){
        arr.splice(i,1);
        i=0;
      }
      else{
        i++
      }
    }
    console.log(arr)
    return arr;
  }
  
  bouncer([null, NaN, 1, false, 2, undefined, ""]);