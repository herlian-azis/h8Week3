function palindrome(kata) {
  // you can only write your code here!
  
  if (kata.substring(0, 1) == kata.substring(kata.length-1, kata.length) && kata.substring(1, 2) == kata.substring(kata.length-2, kata.length-1)){
      return true
  }else
    return false
 }
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false