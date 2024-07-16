// abilities.js
const Abilities = {
    photosynthesis: {
        applyAbility(plant) {
            plant.health += 10;
        }
    },
    poisonResistance: {
        applyAbility(plant) {
            plant.takeDamage(-5); // Heal the plant instead of taking damage
        }
    }
    // Add more abilities here
};

export default Abilities;