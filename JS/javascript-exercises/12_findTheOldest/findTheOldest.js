const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

// Example usage and test case:
const people = [
    { name: 'Carly', yearOfBirth: 2018 },
    { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 },
    { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }
];

console.log(findTheOldest(people)); // Output: "Ray"


// Do not edit below this line
module.exports = findTheOldest;
