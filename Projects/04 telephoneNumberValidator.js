/*
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1(555) 555-5555
1 (555) 555-5555
*/
function isValid(phoneNumber) {
  const regExp = /^(1\s?)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;
  return regExp.test(phoneNumber);
}
module.exports = isValid;
