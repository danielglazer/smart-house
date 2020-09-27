import { Query } from './query.interface';
import { Device } from './device.interface';
import { Home } from './home';
console.log("Hello from Smart Home!");

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const home = new Home(new Map<string, Device>());

function askForCommand() {
	console.log("To exit - enter exit");
	rl.question("Command: ", function (command: string) {
		if (command == "exit") {
			rl.close();
			process.exit();
		} else {
			const query: Query = { verb: command };
			askForDeviceName(query);
		}
	});
}

function askForDeviceName(query: Query) {
	rl.question("Device Name: ", function (deviceName: string) {
		const device = home.getDevice(deviceName);
		if (device) {
			console.log(`${deviceName} wasn't found`);
			rl.close();
		} else {
			query.device = deviceName;
			// handler(command.split(' '));
			askForCommand();
		}
	});
}

askForCommand();

// function handler(command: string[]) {
// 	// validate input
// 	const verb = command[0];
// 	switch (verb) {
// 		case 'get': break;
// 		case 'set': break;
// 		case 'toogle': break;
// 		default:

// 	}
// }

// function getHandler(){

// }

// get device_name property
// set device_name property value
// toggle device_name
