function titleCase(str) {
  return str.toLowerCase()
  .replace(/(^|\s)\S/g, char => char.toUpperCase());
  }
  
  titleCase("sHoRt AnD sToUt");