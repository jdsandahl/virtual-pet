const MAXIMUM_FITNESS = 10;
const FITNESS_MSG_THRESHOLD = 3;

const MINIMUM_HUNGER = 0;
const HUNGER_MSG_THRESHHOLD = 5;

const MAX_CLEANLINESS = 10;
const CLEANLINESS_MSG_THRESHOLD = 7;

const DEATH_ERROR_MSG = "Your pet is no longer alive :(";

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
  this.cleanliness = MAX_CLEANLINESS;
}

Pet.prototype = {
  get isAlive() {
    return (
      this.age < 30 &&
      this.hunger < 10 &&
      this.fitness > 0 &&
      this.cleanliness > 0
    );
  }
};

Pet.prototype.growUp = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ERROR_MSG);
  }

  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
  this.cleanliness -= 2;
};

Pet.prototype.walk = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ERROR_MSG);
  }

  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
  this.cleanliness -= 3;
};

Pet.prototype.feed = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ERROR_MSG);
  }

  if (this.hunger - 3 >= MINIMUM_HUNGER) {
    this.hunger -= 3;
  } else {
    this.hunger = MINIMUM_HUNGER;
  }
  this.cleanliness -= 1;
};

Pet.prototype.washHands = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ERROR_MSG);
  }

  if (this.cleanliness + 2 <= MAX_CLEANLINESS) {
    this.cleanliness += 2;
  } else {
    this.cleanliness = MAX_CLEANLINESS;
  }
};

Pet.prototype.takeBath = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ERROR_MSG);
  }

  if (this.cleanliness + 4 <= MAX_CLEANLINESS) {
    this.cleanliness += 4;
  } else {
    this.cleanliness = MAX_CLEANLINESS;
  }
};

Pet.prototype.checkUp = function() {
  if (!this.isAlive) {
    throw new Error(DEATH_ERROR_MSG);
  }

  const status = [];

  if (this.hunger >= HUNGER_MSG_THRESHHOLD) {
    status.push("I am hungry");
  }

  if (this.fitness <= FITNESS_MSG_THRESHOLD) {
    status.push("I need a walk");
  }

  if (this.cleanliness <= CLEANLINESS_MSG_THRESHOLD) {
    status.push("I need a bath");
  } else if (this.cleanliness < MAX_CLEANLINESS) {
    status.push("I should wash my hands");
  }

  const message = status.slice(0, status.length - 1).join(", ");

  return status.length > 1
    ? `${message} AND ${status[status.length - 1]}`
    : status.length === 1
    ? `${status}`
    : "I feel great!";
};

module.exports = Pet;
