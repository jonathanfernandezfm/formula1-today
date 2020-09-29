import Constructor from "./Constructor";
import Driver from "./Driver";

export default interface Standing {
	Constructors: Constructor[];
	Driver: Driver;
	points: string;
	position: string;
	positionText: string;
	wins: 6;
}
