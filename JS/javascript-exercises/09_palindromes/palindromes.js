// const palindromes = function (string) {
//     stringArray = [];
//     for(let i=0; i<string.length; i++){
//         let charCode = string.charCodeAt(i);
//         if ((charCode > 47 && charCode < 58) ||  (charCode > 96 && charCode < 123) ||    (charCode > 64 && charCode < 91)
//         ){
//             stringArray.push(string[i]);
//          }   
//     }
//     formattedString = stringArray.join('').toLowerCase();
//     reversedString = stringArray.reverse().join('').toLowerCase();
//     return formattedString == reversedString; 
// };
const palindromes = function (string) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = string
      .toLowerCase()
      .split('')
      .filter((character) => alphanumerical.includes(character))
      .join('');
  
    // Create a new reversed string for comparison
    const reversedString = cleanedString.split('').reverse().join('');
  
    // Return the outcome of the comparison which will either be true or false
    return cleanedString === reversedString;
  };


// Do not edit below this line
module.exports = palindromes;
