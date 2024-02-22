// // console.log("ready");

// const numbers = ["1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"];

// const filteredNumbers = numbers.filter((number) => {
//   return number > 10;
// });

// console.log(filteredNumbers);

// const people = [
//   { name: "John", age: 25 },
//   { name: "Bill", age: 30 },
//   { name: "Dave", age: 22 },
//   { name: "Jill", age: 35 },
//   { name: "Katie", age: 28 },
//   { name: "Martha", age: 27 },
// ];

// const filteredPeople = people.filter((person) => {
//   return person.age < 30;
// });

// console.log(filteredPeople);

// const cars = [
//   { make: "Ford", model: "Fusion", year: 2019 },
//   { make: "Chevrolet", model: "Malibu", year: 2018 },
//   { make: "Ford", model: "Focus", year: 2017 },
//   { make: "Chevrolet", model: "Cruze", year: 2016 },
//   { make: "Ford", model: "Taurus", year: 2015 },
//   { make: "Chevrolet", model: "Impala", year: 2014 },
// ];

// const filterCars = cars.filter((car) => {
//   return car.make === "Ford";
// });

const filterGames = (data, monthIndex) => {
  const filteredGames = data.filter((game) => {
    const dateObject = new Date(game.date);
    return dateObject.getMonth() === monthIndex;
  });
  console.log({ filteredGames });
};

fetch("js/schedule.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    filterGames(data, 1);
  });
