namespace AbstractNamespace {
    abstract class Vehicle {
        protected constructor(protected wheelCount: number) {
        }

        abstract updateWheelCount(newWheelCount: number): void;
    }

    class Motorcycle extends Vehicle {
        constructor() {
            super(2);
        }

        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }

    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }

        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`);
        }
    }

    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    const autoMobile = new Automobile();
    autoMobile.updateWheelCount(3);
}