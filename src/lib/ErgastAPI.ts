import Constructor from "../models/Constructor";
import Driver from "../models/Driver";
import RaceData from "../models/Race";
import Race from "../models/Race";
import Standing from "../models/Standing";

export default class ErgastAPI {
	races(): Promise<Race[]> {
		return fetch(`http://ergast.com/api/f1/current.json`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				return response.MRData.RaceTable.Races;
			})
			.catch((error) => console.log(error));
	}

	standings(): Promise<Standing[]> {
		return fetch(`http://ergast.com/api/f1/current/driverStandings.json`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				return response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			})
			.catch((error) => console.log(error));
	}

	driver(id?: string): Promise<Driver> {
		return fetch(`http://ergast.com/api/f1/drivers/${id}.json`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				return response.MRData.DriverTable.Drivers[0];
			})
			.catch((error) => console.log(error));
	}

	drivers(): Promise<Driver[]> {
		return fetch(`http://ergast.com/api/f1/current/drivers.json`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				return response.MRData.DriverTable.Drivers;
			})
			.catch((error) => console.log(error));
	}

	teams(driverId: string): Promise<Constructor[]> {
		let url = driverId
			? `http://ergast.com/api/f1/drivers/${driverId}/constructors.json`
			: `http://ergast.com/api/f1/current/constructors.json`;
		return fetch(url, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				return response.MRData.ConstructorTable.Constructors;
			})
			.catch((error) => console.log(error));
	}

	lastRace(driverId: string): Promise<RaceData> {
		return fetch(`http://ergast.com/api/f1/current/last/drivers/${driverId}/results.json`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				return response.MRData.RaceTable.Races[0];
			})
			.catch((error) => console.log(error));
	}
}
