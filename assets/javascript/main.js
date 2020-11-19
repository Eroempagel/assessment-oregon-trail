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

class Traveler {
  constructor(name, food) {
    this.name = name;
    this.food = food;
    this.isHealthy = true;
  }
  hunt() {
    // Increases the traveler's food by 2.
  }
  eat() {
    // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
  }
}

class Wagon {
  constructor(capacity, passengers) {
    this.capacity = capacity;
    this.passengers = passengers;
    this.isHealthy = true;
  }
  getAvailableSeatCount() {
    // Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
  }
  join(traveler) {
    // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
  }
  shouldQuarantine() {
    // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
  }
  totalFood() {
    // Returns the total amount of food among all passengers in the wagon.
  }
}
