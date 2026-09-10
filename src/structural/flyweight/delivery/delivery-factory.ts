import type { DeliveryFlyweightProtocol } from "./delivery-flyweight";
import { DeliveryLocation } from "./delivery-location";
import type { DeliveryLocationData, DeliveryLocationDictionary } from "./delivery-types";

export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = {};

    private createId(data: DeliveryLocationData): string {
        return Object.values(data).map(item => item.replaceAll(/\s+/g, '').toLowerCase()).join("_");
    }
    
    makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweightProtocol {
        const id = this.createId(intrinsicState);
        if(id in this.locations) return this.locations[id]!;
        this.locations[id] = new DeliveryLocation(intrinsicState);
        return this.locations[id];
    }

    getLocations(): DeliveryLocationDictionary {
        return this.locations;
    }
}