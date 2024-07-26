const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  if(arr.length === 0){
    return 0;
  }
	 let sum = 0;
  for(num of arr){
    sum+=num;
  }
  return sum;
};

const multiply = function(arr) {
  if(arr.length === 0){
    return 0;
  }
  let sol = 1;
  for(num of arr){
    sol*=num;
  }
  return sol;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  if(num < 0){
    return 'ERROR'
  }
  if( num === 0){
    return 1;
  }
  let sol = 1;
  for(let i =1; i <= num; i++){
    sol*=i;
  }
  return sol
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
