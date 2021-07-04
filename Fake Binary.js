/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 */

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


//Alternative
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
  }


//Alternative
function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
      x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
  }