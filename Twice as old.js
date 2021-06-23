/* Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)
Сalculate how many years ago the father was twice as old as his son 
(or in how many years he will be twice as old). */

function twiceAsOld(dad, son) {
    const oldSon = son * 2;
    return Math.abs(dad - oldSon);
  }



//Alternative
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
