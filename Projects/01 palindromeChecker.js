function palindrome(str) {
    let alphanumericString = str.replace(/[^A-z0-9]+|_+/g,"");
    let lowerCaseString = alphanumericString.toLowerCase();
    let pal = true;
    for(let i = 0, j = lowerCaseString.length-1; i < j && pal; i++, j--){
      if(lowerCaseString[i] !== lowerCaseString[j]){
        pal = false;
      }
    }
    return pal;
  }