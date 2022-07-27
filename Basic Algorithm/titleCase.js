function titleCase(str) {

    let arr = str.toLowerCase().split(' '), arr2;
    for(let i = 0; i < arr.length; i++){
      arr2 = arr[i].split('');
      arr2[0] = arr2[0].toUpperCase();
      arr[i] = arr2.join('');
    }
    //console.log(arr.join(' '));
    return arr.join(' ');
  }
  
  titleCase("sHoRt AnD sToUt");