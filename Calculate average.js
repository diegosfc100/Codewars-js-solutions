/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function find_average(array) {
    return array.reduce((a,b) => a + b) / array.length;
}



//Alternative
function find_average(array) {
    var sum=0;
    const length=array.length;
    for (i=0;i<length;i++){
    sum+=array[i];
    }
    return sum/length;
  }