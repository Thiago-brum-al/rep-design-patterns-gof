export class SmartHouseLight {
    private isOn: boolean = false;
    private intensity: number = 50;

    constructor(
        public name: string
    ){};

    get powerStatus(): "on" | "off" {
        return this.isOn ? "on" : "off";
    };

    on(): "on" {
        this.isOn = true;
        console.log(`${this.name} - on`);
        return 'on';
    };

    off(): "off" {
        this.isOn = true;
        console.log(`${this.name} - off`);
        return 'off';
    };

    increaseIntensity(): number {
        if(this.intensity >= 100) return this.intensity;
        this.intensity += 1;
        return this.intensity;
    };

    decreaseIntensity(): number {
        if(this.intensity <= 0) return this.intensity;
        this.intensity -= 1;
        return this.intensity;
    };
}