/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

[22, -6, 32, 82, 9, 25] => [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68] */


function multipleOfIndex(array) {
    return array.filter((num, index) => num % index === 0);
  }


//Alternative
function multipleOfIndex(arr) {
    let arr1 = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] % i == 0) {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  }