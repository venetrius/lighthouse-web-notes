# W1D2 morning lecture

## HandsOn Practice: Write a Node program

* Takes unlimited number of command line arguments
* Prints out the sum of whole numbers

``` js
  function sumOnlyWholeNumbers(args){
    var sum = 0;
    for(let item of args){
      let number = Number(item);
      if(number !== NaN && number % 1 === 0){
        sum += number;
      }
    }
    return sum;
  }


  var args = process.argv.split(2);
  console.log(sumOnlyWholeNumbers(args));

```