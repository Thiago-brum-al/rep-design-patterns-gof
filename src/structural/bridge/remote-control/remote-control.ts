import type { DeviceImplementation } from "../device/device.imp";

export class RemoteControl {
    constructor(
        protected device: DeviceImplementation
    ){} 

    togglePower(): void {
        this.device.setPower(!this.device.getPower());
        console.log(`${this.device.getName} - Power Status: ${this.device.getPower()}`);
    }
}