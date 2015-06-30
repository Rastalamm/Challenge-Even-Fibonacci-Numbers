/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */


function _sumFibs( maxFibValue ) {

  var fibArr = [1,1];
  var count = 0
  var sum = 0;

  while(fibArr[count] <= maxFibValue){
      var newNum = fibArr[count] + fibArr[count + 1];

      if(newNum <= maxFibValue){
          fibArr.push(newNum);
      }

      if(fibArr[count] % 2 === 0 ){
          sum += fibArr[count];
          console.log('the sum', sum);
      }

      count++

  }

  return sum;
}


// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;


  //define your base case, validate your input
  var fibArr = [1,1];
  var count = 0
  var highest = 0;


  while(fibArr[count] <= maxFibValue){
      var newNum = fibArr[count] + fibArr[count + 1];

      if(newNum <= maxFibValue){
          fibArr.push(newNum);
      }

      count++

  }
  highest = fibArr[fibArr.length-1];

  return highest;
};

module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
