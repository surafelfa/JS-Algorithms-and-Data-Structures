function isPalindrome(string) {
  const newString = string.toLowerCase().replace(/[\W_]+/g, "");
  const revString = [...newString].reverse().join("");
  return newString == revString;
}

module.exports = isPalindrome;
