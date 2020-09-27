import { Device } from "./device.interface";

export class Home {

	constructor(public readonly devices: Map<string, Device>) {
		this.devices = new Map();
		devices.forEach(device => this.devices.set(device.name, device))
	}

	public getDevice(name: string) {
		return this.devices.get(name);
	}
}