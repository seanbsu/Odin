const leapYears = function(year) {
    isCentury = year % 100 === 0
    isYearDivisibleByFour = year % 4 === 0 
    isYearDivisibleByFourHundred = year % 400 === 0
    if(isYearDivisibleByFour &&
      (!isCentury || isYearDivisibleByFourHundred)){
            return true
        }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
