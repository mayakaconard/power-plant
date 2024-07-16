// game.test.js
import game from '../GameModule/game';

describe('Game logic', () => {
    beforeEach(() => {
        // Reset game state before each test
        game.plants = [];
    });

    test('Creating a new plant', () => {
        const plant = game.createPlant('Lily');
        expect(game.plants.length).toBe(1);
        expect(game.plants[0]).toBe(plant);
    });

    test('Applying abilities to plants', () => {
        const plant = game.createPlant('Violet');
        game.applyAbility(plant, 'photosynthesis');
        expect(plant.health).toBe(110);
    });
});
