/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list. */

const invert = (array) => {
    let res = [];
    for (let num of array) {
      Math.sign(num) >= 0 ? res.push(-num) : res.push(Math.abs(num));
    }
    return res;
  };


//Alternative
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }


//Alternative
function invert(array) {
    return array.map(i => 0 - i);
 }

 
//Alternative
const invert = array => array.map(num => -num);
