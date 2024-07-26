const sumAll = function(lower, upper) {
    
    if(lower < 0 || upper<0){
        return 'ERROR';
    }
    if(!Number.isInteger(lower) ||!Number.isInteger(upper)){
        return 'ERROR';
    }
    sum = 0;
    if(lower>upper){
        temp = lower;
        lower= upper;
        upper = temp;
    }
    for(let i = lower; i<= upper; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
