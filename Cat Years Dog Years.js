/* I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */

var humanYearsCatYearsDogYears = function(H) {
    let cat;
    let dog;
    if(H === 1 ){
      dog = 15, cat = 15;
    }else if ( H === 2){
      dog = 24, cat = 24;
    }else if ( H >= 3){
      cat = 24 + 4 * (H - 2), dog = 24 + 5 * (H - 2); 
    }
       
    return [H, cat, dog];
  }



//Alternative
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }
