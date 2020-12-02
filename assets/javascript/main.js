/*
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.isGoodBoy = true;
  }
  sit() {
    // sitting code goes here
  }
  fetch() {
    // fetching code goes here
  }
}
// create an instance of the Dog class
const fluffy = new Dog("Fluffy", "Toy Poodle");
*/
class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    // Increases the traveler's food by 2.
    this.food += 2;
  }
  eat() {
    // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
    if (this.food >= 1) {
      this.food -= 1;
    } else if (this.food <= 0){
      this.isHealthy = false;
    } else {
      this.isHealthy = false;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = []; // which is initially an empty array
  }
  getAvailableSeatCount() {
    // Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    let availableSeats = 0;
    //let numTravelers = 0;
    //if (join(traveler)) {
    //  numTravelers += 1;
    //}
    availableSeats = this.capacity //- numTravelers;
    return availableSeats;
  }
  join(traveler) {
    // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    if (this.capacity >= 1) {
      this.passengers.push(traveler);
      this.capacity -= 1;
    } else {
      console.log("There isn't any more room in this wagon");
    }
  }
  shouldQuarantine() {
    // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    for (let i=0; this.passengers.length > i; i++ ) {
      console.log(this.passengers[i])
      if (this.passengers[i].isHealthy === false){
        return true;
      }
    }
  }
  totalFood() {
    // Returns the total amount of food among all passengers in the wagon.
    let foodTotal = 0;
    for (let i=0; this.passengers.length > i; i++) {
      if (this.passengers[i].food > 0) {
        foodTotal = foodTotal + this.passengers[i].food;
      }
    }
    return foodTotal;
  }
}
