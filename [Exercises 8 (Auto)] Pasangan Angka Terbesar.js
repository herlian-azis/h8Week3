function pasanganTerbesar(num) {
  // you can only write your code here!
  var arr = num.toString().split('')
  var hasil = [];
  for (var i = 0; i < arr.length - 1; i++) {
    hasil[i] = Number(arr[i] + arr[i + 1]);
}
hasil1 = Math.max.apply(Math, hasil)
return hasil1
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99