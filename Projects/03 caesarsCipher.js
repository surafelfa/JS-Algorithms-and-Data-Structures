function ROT13(encoded) {
  let decoded = "",
    char,
    ASCII;
  for (let i = 0; i < encoded.length; i++) {
    char = encoded.charAt(i);
    if (/[A-Z]/.test(char)) {
      ASCII = encoded.charCodeAt(i);
      ASCII <= 77
        ? (decoded += String.fromCharCode(ASCII + 13))
        : (decoded += String.fromCharCode(ASCII - 13));
    } else {
      decoded += char;
    }
  }
  return decoded;
}
module.exports = ROT13;
