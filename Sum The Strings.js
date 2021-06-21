/* Create a function that takes 2 nonnegative integers in form of a string as an input,
and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"

Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
 */

function sumStr(a,b) {
    (a =='') ? a = 0 : a = a;
    (b =='') ? b = 0 : b = b
    const sum = parseInt(a) + parseInt(b);
    return sum.toString();
  }


//Alternative
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }


//Alternative
function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
  }