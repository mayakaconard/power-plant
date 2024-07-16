// plant.js
class Plant {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.age = 0;
    }

    grow() {
        this.age++;
    }

    takeDamage(amount) {
        this.health -= amount;
    }

    // Add more methods as needed
}

export default Plant;