import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PilotPlaceholder from "../assets/pilot.jpg";
import ErgastAPI from "../lib/ErgastAPI";
import DriverModel from "../models/Driver";
import moment from "moment";

import "../styles/Driver.scss";
import Constructor from "../models/Constructor";
import RaceData from "../models/Race";

export const Driver = () => {
	const [driverInfo, setDriverInfo] = useState<DriverModel>({});
	const [teamInfo, setTeamInfo] = useState([]);
	const [lastRace, setLastRace] = useState<RaceData>({});
	const { id } = useParams();

	useEffect(() => {
		const f1 = new ErgastAPI();
		f1.driver(id)
			.then((response: DriverModel) => {
				console.log(response);
				setDriverInfo(response);
			})
			.catch((err) => {
				console.log(err);
			});

		f1.teams(id)
			.then((response: Constructor[]) => {
				console.log(response);
				setTeamInfo(response);
			})
			.catch((err) => {
				console.log(err);
			});

		f1.lastRace(id)
			.then((response: RaceData) => {
				console.log(response);
				setLastRace(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="driver">
			<div className="driver-card">
				<div
					className="driver-image"
					style={{ backgroundImage: "url(" + PilotPlaceholder + ")" }}
				></div>
				<div className="driver-info">
					<div className="name">
						<span>{driverInfo.permanentNumber}</span>
						{`${driverInfo.givenName} ${driverInfo.familyName}`}
					</div>
					<div className="driver-data-section">
						<div className="column">
							<div className="row">
								<div className="label">Nationality</div>
								<div className="value">{driverInfo.nationality}</div>
							</div>
							<div className="row">
								<div className="label">Born</div>
								<div className="value">
									{moment(driverInfo.dateOfBirth).format("DD MMMM YYYY")}
								</div>
							</div>
						</div>
						<div className="column">
							<div className="row">
								<div className="label">Team</div>
								<div className="value">{teamInfo[teamInfo.length - 1]?.name}</div>
							</div>
							<div className="row">
								<div className="label">Old Teams</div>
								{teamInfo.map((team: Constructor, index) => {
									if (index === teamInfo.length - 1) return "";
									return (
										<div key={index} className="value">
											{team.name}
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="last-race">
						<div className="label">Last race</div>
						<div className="label2">Circuit</div>
						<div className="value">{`${lastRace.Circuit?.circuitName} - ${lastRace.Circuit?.Location.country} (${lastRace.date})`}</div>
						<div className="label">Position</div>
						{lastRace.Results && (
							<div className="value">{`${lastRace.Results[0].position} (+${lastRace.Results[0].points} points)`}</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
