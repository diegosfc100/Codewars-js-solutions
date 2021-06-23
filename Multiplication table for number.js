/* Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. */


function multiTable(n) {
    return `1 * ${n} = ${n*1}\n2 * ${n} = ${n*2}\n3 * ${n} = ${n*3}\n4 * ${n} = ${n*4}\n5 * ${n} = ${n*5}\n6 * ${n} = ${n*6}\n7 * ${n} = ${n*7}\n8 * ${n} = ${n*8}\n9 * ${n} = ${n*9}\n10 * ${n} = ${n*10}`
  }


  
//Alternative
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }
