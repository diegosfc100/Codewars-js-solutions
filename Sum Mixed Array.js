/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }


//Alternative
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }


//Alternative
function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
  }