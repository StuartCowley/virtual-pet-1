// require Pet constructor function
const Pet = require('../src/virtual-pet.js');

let fido, bronson;
beforeEach(() => {
    fido = new Pet('Fido');
    bronson = new Pet('Bronson');
})

describe('Pet', () => {
    test('Returns an instance of Pet', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Pet);
    });
    test('Returns the pets name', () => {
        expect(fido.name).toBe('Fido');
        expect(bronson.name).toBe('Bronson');
    });
});

describe('growUp', () => {
    // age
    test('Returns the initial age (should be 0)', () => {
        expect(fido.age).toBe(0);
        expect(bronson.age).toBe(0);
    });
    test('growUp increases the age property by 1', () => {
        expect(fido.age).toBe(0);
        fido.growUp();
        expect(fido.age).toBe(1);
        fido.growUp();
        expect(fido.age).toBe(2);
    });

    // hunger
    test('Returns the initial hunger (should be 0)', () => {
        expect(fido.hunger).toBe(0);
        expect(bronson.hunger).toBe(0);
    });
    test('growUp increases the hunger property by 5', () => {
        expect(fido.hunger).toBe(0);
        fido.growUp();
        expect(fido.hunger).toBe(5);
        fido.growUp();
        expect(fido.hunger).toBe(10);
    });

    // fitness
    test('Returns the initial fitness (should be 10)', () => {
        expect(fido.fitness).toBe(10);
        expect(bronson.fitness).toBe(10);
    });
    test('growUp decreases the fitness property by 3', () => {
        expect(fido.fitness).toBe(10);
        fido.growUp();
        expect(fido.fitness).toBe(7);
        fido.growUp();
        expect(fido.fitness).toBe(4);
    });
});

describe('walk', () => {
    test('fitness property can not go above 10', () => {
        expect(fido.fitness).toBe(10);
        fido.walk();
        expect(fido.fitness).toBe(10);

        bronson.fitness = 9;
        bronson.walk();
        expect(bronson.fitness).toBe(10);
    });
    test('walk increases the fitness property by 4', () => {
        fido.fitness = 5;
        fido.walk();
        expect(fido.fitness).toBe(9);

        bronson.fitness = 2;
        bronson.walk();
        expect(bronson.fitness).toBe(6);
    });
});

describe('feed', () => {
    test('hunger property can not go below 0', () => {
        fido.hunger = 2;
        fido.feed();
        expect(fido.hunger).toBe(0);
    });
    test('feed decreases the hunger property by 3', () => {
        bronson.growUp();
        bronson.feed();
        expect(bronson.hunger).toBe(2);
        bronson.growUp();
        bronson.feed();
        expect(bronson.hunger).toBe(4);
    });
});
