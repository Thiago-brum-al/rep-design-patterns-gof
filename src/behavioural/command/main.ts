import { LightIntenstyCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

//Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

//Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomLightIntensityCommand = new LightIntenstyCommand(bedroomLight);

//Invoker
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addComand("btn-1", bedroomLightPowerCommand);
smartHouseApp.addComand("btn-2", bathroomLightPowerCommand);
smartHouseApp.addComand("btn-3", bedroomLightIntensityCommand);

smartHouseApp.executeCommand("btn-1");
smartHouseApp.undoCommand("btn-1");

smartHouseApp.executeCommand("btn-2");
smartHouseApp.undoCommand("btn-2");

for(let i = 0; i <= 100; i++){
    smartHouseApp.executeCommand("btn-3");
};

for(let i = 0; i <= 100; i++){
    smartHouseApp.undoCommand("btn-3");
};