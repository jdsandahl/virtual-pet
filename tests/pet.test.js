const Pet = require("../src/pet");

let pet;
let parent;

beforeEach(() => {
  pet = new Pet("Fido");
  parent = new Pet("Dave");
});

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    expect(pet.name).toEqual("Fido");
  });

  it("sets the name to 'Fido' by default if no name provided", () => {
    expect(pet.name).toEqual("Fido");
  });

  it("has an initial age of 0", () => {
    expect(pet.age).toEqual(0);
  });

  it("has an initial hunger of 0", () => {
    expect(pet.hunger).toEqual(0);
  });

  it("has an initial fitness of 10", () => {
    expect(pet.fitness).toEqual(10);
  });

  it("has an initial cleanliness of 10", () => {
    expect(pet.cleanliness).toEqual(10);
  });

  it("has initially an empty array for children", () => {
    expect(parent.children).toEqual([]);
  });
});

describe("growUp", () => {
  beforeEach(() => {
    startingAge = pet.age;
    startingFitness = pet.fitness;
    startingHunger = pet.hunger;
    startingCleanliness = pet.cleanliness;
  });

  it("increments the age by 1", () => {
    pet.growUp();
    expect(pet.age).toEqual(startingAge + 1);
  });

  it("increments hunger property by 5", () => {
    pet.growUp();
    expect(pet.hunger).toEqual(startingHunger + 5);
  });

  it("decrements fitness property by 3", () => {
    pet.growUp();
    expect(pet.fitness).toEqual(startingFitness - 3);
  });

  it("decrements cleanliness by 2", () => {
    pet.growUp();
    expect(pet.cleanliness).toEqual(startingCleanliness - 2);
  });

  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    pet.fitness = 4;

    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it("increase fitness by 4 to a maximum of 10", () => {
    pet.fitness = 8;

    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it("decreases cleanliness by 3", () => {
    pet.cleanliness = 8;

    pet.walk();
    expect(pet.cleanliness).toEqual(5);
  });

  it("decreases cleanliness by 3", () => {
    pet.cleanliness = 8;

    pet.walk();
    expect(pet.cleanliness).toEqual(5);
  });

  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
});

describe("feed", () => {
  it("decrease hunger by 3", () => {
    pet.hunger = 6;

    pet.feed();
    expect(pet.hunger).toEqual(3);
  });

  it("decrease hunger by 3 to a minimum of 0", () => {
    pet.hunger = 2;

    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it("decreases cleanliness by 1", () => {
    pet.cleanliness = 8;

    pet.feed();
    expect(pet.cleanliness).toEqual(7);
  });

  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
});

describe("washHands", () => {
  it("increase cleanliness by 2", () => {
    pet.cleanliness = 7;

    pet.washHands();
    expect(pet.cleanliness).toEqual(9);
  });

  it("increase cleanliness by 2 to a max of 10", () => {
    pet.cleanliness = 9;

    pet.washHands();
    expect(pet.cleanliness).toEqual(10);
  });

  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.washHands()).toThrow("Your pet is no longer alive :(");
  });
});

describe("takeBath", () => {
  it("increase cleanliness by 4", () => {
    pet.cleanliness = 4;

    pet.takeBath();
    expect(pet.cleanliness).toEqual(8);
  });

  it("increase cleanliness by 4, to a max of 10", () => {
    pet.cleanliness = 8;

    pet.takeBath();
    expect(pet.cleanliness).toEqual(10);
  });

  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.takeBath()).toThrow("Your pet is no longer alive :(");
  });
});

describe("checkUp", () => {
  it("returns 'I need a walk' when fitness <= 3", () => {
    pet.fitness = 3;
    expect(pet.checkUp()).toBe("I need a walk");
  });

  it("returns 'I am hungry' when hunger >= 5", () => {
    pet.hunger = 5;
    expect(pet.checkUp()).toBe("I am hungry");
  });

  it("If both fitness and hunger outside their threshold, returns I am hungry AND I need a walk", () => {
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
  });

  it(" returns 'I should wash my hands' when cleanliness < 10", () => {
    pet.cleanliness = 9;
    expect(pet.checkUp()).toBe("I should wash my hands");
  });

  it("returns 'I need a bath' when cleanliness <= 7", () => {
    pet.cleanliness = 7;
    expect(pet.checkUp()).toBe("I need a bath");
  });

  it("When hungry, unfit and slightly unclean returns I am hungry, I need a walk AND I should wash my hands", () => {
    pet.fitness = 3;
    pet.hunger = 5;
    pet.cleanliness = 9;
    expect(pet.checkUp()).toBe(
      "I am hungry, I need a walk AND I should wash my hands"
    );
  });

  it("When hungry, unfit and dirty returns I am hungry, I need a walk AND I need a bath", () => {
    pet.fitness = 3;
    pet.hunger = 5;
    pet.cleanliness = 7;
    expect(pet.checkUp()).toBe("I am hungry, I need a walk AND I need a bath");
  });

  it("If all status are within their thresholds, returns I feel great!", () => {
    expect(pet.checkUp()).toBe("I feel great!");
  });

  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
  });
});

describe("isAlive", () => {
  it("returns false if fitness <= 0", () => {
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
  });

  it("returns false if hunger >= 10, age >= 30, cleanliness <= 0", () => {
    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
  });

  it("returns false if age >= 30", () => {
    pet.age = 31;
    expect(pet.isAlive).toEqual(false);
  });

  it("returns false if cleanliness <= 0", () => {
    pet.cleanliness = -1;
    expect(pet.isAlive).toEqual(false);
  });

  it("returns true if all properties are below/above their respective thresholds", () => {
    pet.fitness = 5;
    pet.hunger = 5;
    pet.age = 5;
    pet.cleanliness = 5;

    expect(pet.isAlive).toEqual(true);
  });
});

describe("adoptChild", () => {
  it("adopts an already existing pet and adds it a list of children", () => {
    const child = new Pet("Amelia");

    parent.adoptChild(child);
    expect(parent.children).toEqual([
      {
        age: 0,
        children: [],
        cleanliness: 10,
        fitness: 10,
        hunger: 0,
        name: "Amelia"
      }
    ]);
  });
});

describe("haveBaby", () => {
  it("creates a child, gives it a name and adds it to the list of children", () => {
    parent.haveBaby("Amelia");
    expect(parent.children[0].name).toEqual("Amelia");
  });
});
