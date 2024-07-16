// abilities.test.js

import Abilities from '../AbilitiesModule/abilities';
import Plant from '../PlantModule/plant';

describe('Abilities', () => {
    test('Testing photosynthesis ability', () => {
        const plant = new Plant('Daisy');
        Abilities.photosynthesis.applyAbility(plant);
        expect(plant.health).toBe(110); // Health increased by 10
    });

    test('Testing poisonResistance ability', () => {
        const plant = new Plant('Fern');
        plant.takeDamage(10); // Plant starts with 100 health
        Abilities.poisonResistance.applyAbility(plant);
        expect(plant.health).toBe(90); // Health restored by 10
    });

    // Add more tests for other abilities as needed
});