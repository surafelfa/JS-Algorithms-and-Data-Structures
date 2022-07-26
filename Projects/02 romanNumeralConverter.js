const arabicToRoman = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
  }
  //returns the number of digits
  function numLength(number){
    let length = 0;
    while(number != 0){
      number = parseInt(number/10);
      ++length;
    }
    //console.log(length);
    return length;
  }
  
  function addZeros(length){
    let zeros = 1;
    for(let i = 1; i < length; i++){
      zeros *= 10;
    }
    //console.log(zeros);
    return zeros;
  }
  function convertToRoman(number) {
    let toRoman = '', value;
    for(let i = numLength(number); i > 0; i--){
      value  = (parseInt(number/addZeros(i))) * addZeros(i);
      if(value == 0){
        //do nothing
      }else{
        toRoman += arabicToRoman[value];
      }
      number = number - value;
    }
    //console.log(toRoman);
    return toRoman;
  }
  
  convertToRoman(68);