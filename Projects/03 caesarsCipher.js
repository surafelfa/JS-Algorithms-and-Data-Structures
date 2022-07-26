const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charIndex;
function rot13(str) {
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if(/[^A-Z]/.test(arr[i])){
      //do noting if char at index i is different from A-Z.
    }else{
      charIndex = alphabets.indexOf(arr[i])+13;
      if(charIndex > 25){
        charIndex -=26
      }
      arr[i] = alphabets.charAt(charIndex);
    }
  }
  //console.log(arr.join(''));
  return arr.join('');
}
rot13("SERR PBQR PNZC");