import type { SmartHouseCommand } from "./smart-house-command";
import type { SmartHouseLight } from "./smart-house-light";

export class LightIntenstyCommand implements SmartHouseCommand {

    constructor(
        private readonly light: SmartHouseLight
    ){};

    execute(): void {
        const intensity = this.light.increaseIntensity();
        console.log(`${this.light.name} - Intensity: ${intensity}`);
    };

    undo(): void {
        const intensity = this.light.decreaseIntensity();
        console.log(`${this.light.name} - Intensity: ${intensity}`);
    };
};