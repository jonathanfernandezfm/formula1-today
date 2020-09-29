import Race from "../models/Race";
import Standing from "../models/Standing";

export default class ErgastAPI {
	constructor() {}

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
}
