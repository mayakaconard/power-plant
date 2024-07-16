// plant.test.js

import Plant from '../PlantModule/plant';

describe('Plant class', () => {
    test('Creating a new Plant instance', () => {
        const plant = new Plant('Sunflower');
        expect(plant.name).toBe('Sunflower');
        expect(plant.health).toBe(100); // Default health
        expect(plant.age).toBe(0); // Default age
    });

    test('Testing grow() method', () => {
        const plant = new Plant('Rose');
        plant.grow();
        expect(plant.age).toBe(1);
    });

    test('Testing takeDamage() method', () => {
        const plant = new Plant('Tulip');
        plant.takeDamage(20);
        expect(plant.health).toBe(80); // Health reduced by 20
    });
});