export default interface RaceData {
	Circuit: Circuit;
	date: Date;
	raceName: string;
	round: string;
	season: string;
	time: string;
	url: string;
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
