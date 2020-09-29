import Constructor from "./Constructor";
import DriverModel from "./Driver";

export default interface RaceData {
	Circuit?: Circuit;
	date?: Date;
	raceName?: string;
	round?: string;
	season?: string;
	time?: string;
	url?: string;
	Results?: Results[];
}

export interface Circuit {
	Location: Location;
	circuitId: string;
	circuitName: string;
	url: string;
}

export interface Location {
	country: string;
	lat: string;
	locality: string;
	long: string;
}

export interface Results {
	number: string;
	position: string;
	positionText: string;
	points: string;
	Driver: DriverModel;
	Constructor: Constructor;
	grid: string;
	laps: string;
	status: string;
	Time: Time;
	FastestLap: FastestLap;
}

export interface Time {
	millis: string;
	time: string;
}

export interface FastestLap {
	rank: string;
	lap: string;
	Time: Time;
	AverageSpeed: AverageSpeed;
}

export interface AverageSpeed {
	units: string;
	speed: string;
}
