const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAX_CLEANLINESS = 10;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINIMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
  this.cleanliness = MAX_CLEANLINESS;
};

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
  this.cleanliness -= 2;
};

Pet.prototype.walk = function() {
  if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
      this.fitness += 4;
  } else {
      this.fitness = MAXIMUM_FITNESS;
  }
  this.cleanliness -= 3;

};

Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
};

Pet.prototype.washHands = function() {
    if ((this.cleanliness + 2) <= MAX_CLEANLINESS) {
        this.cleanliness += 2;
    } else {
        this.cleanliness = MAX_CLEANLINESS;
    }
}

module.exports = Pet;
