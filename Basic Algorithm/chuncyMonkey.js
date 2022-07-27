/*
A function that splits an array (first argument) into 
groups the length of size (second argument) and returns 
them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    let _2Darr= [];
    while(arr.length != 0){
     _2Darr.push(arr.splice(0,size));
   }
    return _2Darr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);