const fibonacci = function(num) {
    num = Number(num)
    if(num === 0){
        return 0;
    }
    if(num < 0){
        return 'OOPS'
    }
    let i = 1, secondPrev = 0, prev =1, fibNum = 1;
    while(i<num){
        fibNum = secondPrev + prev;
        secondPrev = prev;
        prev = fibNum
        i++;
    }
    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
