const MAXIMUM_FITNESS = 10;
const FITNESS_THRESHOLD = 3;

const MINIMUM_HUNGER = 0;
const HUNGER_THRESHHOLD = 5;

const MAX_CLEANLINESS = 10;
const CLEANLINESS_THRESHOLD = 7; 

const DEFAULT_FEELING = "I feel great!";

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
  this.cleanliness = MAX_CLEANLINESS;
}

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
  this.cleanliness -= 2;
};

Pet.prototype.walk = function() {
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
  this.cleanliness -= 3;
};

Pet.prototype.feed = function() {
  if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
  this.cleanliness -= 1;
};

Pet.prototype.washHands = function() {
  if (this.cleanliness + 2 <= MAX_CLEANLINESS) {
    this.cleanliness += 2;
  } else {
    this.cleanliness = MAX_CLEANLINESS;
  }
};

Pet.prototype.takeBath = function() {
  if (this.cleanliness + 4 <= MAX_CLEANLINESS) {
    this.cleanliness += 4;
  } else {
    this.cleanliness = MAX_CLEANLINESS;
  }
};

Pet.prototype.checkUp = function() {
  const status = [];

  if (this.hunger >= HUNGER_THRESHHOLD) {
    status.push("I am hungry");
  }

  if (this.fitness <= FITNESS_THRESHOLD) {
    status.push("I need a walk");
  }

  if (this.cleanliness <= CLEANLINESS_THRESHOLD) {
    status.push("I need a bath");
  } else if (this.cleanliness < MAX_CLEANLINESS) {
    status.push("I should wash my hands");
  }

  const message = status.slice(0, status.length - 1).join(", ");

  return status.length > 1
    ? `${message} AND ${status[status.length - 1]}`
    : status.length === 1
    ? `${status}`
    : DEFAULT_FEELING;
};

module.exports = Pet;
