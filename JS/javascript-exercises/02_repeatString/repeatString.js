const repeatString = function(str,timesRepeating) {
    if(timesRepeating < 0){
        return'ERROR';
    }
    let i = 0;
    let newString='';
    while(i < timesRepeating){
        newString+=str;
        i++;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
