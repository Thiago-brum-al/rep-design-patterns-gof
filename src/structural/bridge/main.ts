import { Tv } from "./device/tv";
import type { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
    abstraction.togglePower();

    if(!('volumeUp' in abstraction)) return;

    abstraction.volumeUp(); // 20
    abstraction.volumeUp(); // 30
    abstraction.volumeUp(); // 40
};

const tv = new Tv();
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);