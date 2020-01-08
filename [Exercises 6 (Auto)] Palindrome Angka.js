 function angkaPalindrome(num) {
    // you can only write your code here!
    var number1 = num + 1;   
    var reverse = '';   
    while(true){
    var i = String(number1);
    reverse = i.split('').reverse().join('');
    if(number1 === Number(reverse)){
        return number1
    }
    number1++
    } 
}
 

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001