const removeFromArray = function() 
{
    let arr = arguments[0];
    for(let i =1; i < arguments.length; i++){
        // arguments[0].splice(arguments[0].indexOf(arguments[i]),1);
       arr =  arr.filter(item => item !== arguments[i])
    }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
