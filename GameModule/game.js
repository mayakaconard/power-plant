// game.js
import Plant from '../PlantModule/plant.js';
import Abilities from '../AbilitiesModule/abilities.js';

const game = {
    plants: [],
    createPlant(name) {
        const newPlant = new Plant(name);
        this.plants.push(newPlant);
        return newPlant;
    },
    applyAbility(plant, abilityName) {
        if (Abilities[abilityName]) {
            Abilities[abilityName].applyAbility(plant);
        }
    }
    // Add more game logic as needed
};

export default game;