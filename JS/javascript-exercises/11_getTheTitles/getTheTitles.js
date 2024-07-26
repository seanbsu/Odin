const getTheTitles = function(bookArray) {
    let titleArray = [];
    for (let book of bookArray) {
        titleArray.push(book.title);
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
