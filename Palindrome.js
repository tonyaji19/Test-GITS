function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}
console.log(checkPalindrom("kakak"));
console.log(checkPalindrom("Tony"));