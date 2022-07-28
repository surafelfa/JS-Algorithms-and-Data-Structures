/*
1. The input is a string with spaces and title-cased words

2. The output is a string with the spaces between words replaced by a hyphen (-)

3. The output should be all lower-cased letters

4. The output should not have any spaces
*/

function urlSlug(title) {
    return title.toLowerCase()
    .split(' ')
    .filter(value => /\w/.test(value))
    .join('-');
  
  }
  
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");