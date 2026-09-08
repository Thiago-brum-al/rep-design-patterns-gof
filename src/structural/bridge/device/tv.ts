import type { DeviceImplementation } from "./device.imp";

export class Tv implements DeviceImplementation {

    private power = false;
    private volume = 10;
    private name = 'Philco';

    getName(): string {
        return this.name;
    }

    getPower(): boolean {
        return this.power;
    }

    getVolume(): number {
        return this.volume;
    }

    setPower(powerStatus: boolean): void {
        this.power = powerStatus;
    }

    setVolume(volume: number): void {
        if(volume < 0 || volume > 100) return;
        this.volume = volume;
    }
}