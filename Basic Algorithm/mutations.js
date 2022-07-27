/*
Return true if the string in the first element of 
the array contains all of the letters of the string 
in the second element of the array.
*/
function mutation(arr) {
    let found = true, newArr = [arr[0].toLowerCase(), arr[1].toLowerCase()];
    for(let i = 0; i < arr[1].length && found; i++){
      if(newArr[0].indexOf(newArr[1][i]) == -1){
        found = false;
      }
    }
    return found;
  }
  
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);