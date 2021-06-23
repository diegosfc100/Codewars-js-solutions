/* Write function RemoveExclamationMarks which removes all exclamation marks
from a given string. */


function removeExclamationMarks(s) {
    return s.split('!').join('');
  }



//Alternative
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }