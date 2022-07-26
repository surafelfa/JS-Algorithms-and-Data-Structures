function reverseString(str) {
    let placeholder, arr = str.split('');
    for(let i = 0, j = arr.length-1; i < j; i++, j--){
      placeholder = arr[i];
      arr[i] = arr[j];
      arr[j] = placeholder;
    }
    return arr.join('');
  }
  
  reverseString("hello");