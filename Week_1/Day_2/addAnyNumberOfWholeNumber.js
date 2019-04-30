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


  var args = process.argv.slice(2);
  console.log(sumOnlyWholeNumbers(args));