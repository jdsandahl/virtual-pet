const MAXIMUM_FITNESS = 10;
const FITNESS_MSG_THRESHOLD = 3;

const MINIMUM_HUNGER = 0;
const HUNGER_MSG_THRESHHOLD = 5;

const MAX_CLEANLINESS = 10;
const CLEANLINESS_MSG_THRESHOLD = 7;

const DEATH_ERROR_MSG = "Your pet is no longer alive :(";
const DEFAULT_NAME = "Fido";

class Pet {
  constructor(name = DEFAULT_NAME) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.cleanliness = MAX_CLEANLINESS;
    this.children = [];
  }

  get isAlive() {
    return (
      this.age < 30 &&
      this.hunger < 10 &&
      this.fitness > 0 &&
      this.cleanliness > 0
    );
  }

  get deathCheck() {
    if (!this.isAlive) {
      throw new Error(DEATH_ERROR_MSG);
    }
  }

  growUp() {
    this.deathCheck;

    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    this.cleanliness -= 2;
  }

  walk() {
    this.deathCheck;

    this.fitness =
      this.fitness + 4 <= MAXIMUM_FITNESS ? this.fitness + 4 : MAXIMUM_FITNESS;

    this.cleanliness -= 3;
  }

  feed() {
    this.deathCheck;

    this.hunger =
      this.hunger - 3 >= MINIMUM_HUNGER ? this.hunger - 3 : MINIMUM_HUNGER;

    this.cleanliness -= 1;
  }

  washHands() {
    this.deathCheck;

    this.cleanliness =
      this.cleanliness + 2 <= MAX_CLEANLINESS
        ? this.cleanliness + 2
        : MAX_CLEANLINESS;
  }

  takeBath() {
    this.deathCheck;

    this.cleanliness =
      this.cleanliness + 4 <= MAX_CLEANLINESS
        ? this.cleanliness + 4
        : MAX_CLEANLINESS;
  }

  checkUp() {
    this.deathCheck;

    const status = [];

    const hungerMsg = 
      this.hunger >= HUNGER_MSG_THRESHHOLD && status.push("I am hungry");
    
    const fitnessMsg =
      this.fitness <= FITNESS_MSG_THRESHOLD && status.push("I need a walk");

    const cleanlinessMsg = 
      (this.cleanliness <= CLEANLINESS_MSG_THRESHOLD && status.push("I need a bath")) 
        || (this.cleanliness < MAX_CLEANLINESS && status.push("I should wash my hands"));

     return this.statusMessage(status);
  }

  statusMessage (status){
    const message = status.slice(0, status.length - 1).join(", ");

    return status.length > 1
      ? `${message} AND ${status[status.length - 1]}`
      : status.length === 1
      ? `${status}`
      : "I feel great!";
  }

  adoptChild(child) {
    this.children.push(child);
  }

  haveBaby(name = DEFAULT_NAME) {
    const child = new Pet(name);

    this.children.push(child);
  }
}
module.exports = Pet;
