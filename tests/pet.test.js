const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });

  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });

  it("has an initial hunger of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.hunger).toEqual(0);
  });

  it("has an initial fitness of 10", () => {
    const pet = new Pet("Fido");

    expect(pet.fitness).toEqual(10);
  });

  it('has an initial cleanliness of 10', () => {
    const pet = new Pet("Fido");

    expect(pet.cleanliness).toEqual(10);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("increments hunger property by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("decrements fitness property by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  it("decrements cleanliness by 2", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.cleanliness).toEqual(8);
  });
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.walk();
    
    expect(pet.fitness).toEqual(8);
  });

  it('increase fitness by 4 to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();
    
    expect(pet.fitness).toEqual(10);
  });

  it('decreases cleanliness by 3', () => {
    const pet = new Pet('Fido');

    pet.cleanliness = 8;
    pet.walk();

    expect(pet.cleanliness).toEqual(5);
  });

  it('decreases cleanliness by 3', () => {
    const pet = new Pet('Fido');

    pet.cleanliness = 8;
    pet.walk();

    expect(pet.cleanliness).toEqual(5);
  });
});

describe('feed', () => {
  it('decrease hunger by 3', () => {
    const pet = new Pet('Fido');

    pet.hunger = 6;
    pet.feed();

    expect(pet.hunger).toEqual(3);
  });

  it('decrease hunger by 3 to a minimum of 0', () => {
    const pet = new Pet('Fido');

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
});

describe('washHands', () => {
  it('increase cleanliness by 2', () =>{
    const pet = new Pet('Fido');

    pet.cleanliness = 7;
    pet.washHands();

    expect(pet.cleanliness).toEqual(9);
  });

  it('increase cleanliness by 2 to a max of 10', () =>{
    const pet = new Pet('Fido');

    pet.cleanliness = 9;
    pet.washHands();

    expect(pet.cleanliness).toEqual(10);
  });
});