const findTheOldest = function (people) {
  curYear = new Date().getFullYear();
  let oldestPerson = {
    age: 0,
  };
  people.forEach((person) => {
    let age;
    if ("yearOfDeath" in person) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = curYear - person.yearOfBirth;
    }
    person["age"] = age;
    if (age > oldestPerson.age) {
      oldestPerson = person;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
