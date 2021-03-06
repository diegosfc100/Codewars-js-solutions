/* Write a function to convert a name into initials. This kata strictly takes two words
with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

function abbrevName(name){
  const newArr =  name.split(' ');
  const result = `${newArr[0].substr(0,1)}.${newArr[1].substr(0,1)}`
  return result.toUpperCase();
}



//Alternative
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
