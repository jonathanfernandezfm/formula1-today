import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import ErgastAPI from "../lib/ErgastAPI";
import DriverModel, { driverMapImageId } from "../models/Driver";
import moment from "moment";

import "../styles/Driver.scss";
import Constructor from "../models/Constructor";
import RaceData from "../models/Race";
import Placeholder from "../assets/placeholder-driver.png";
import { SkeletonLoader } from "../components/SkeletonLoader";

export const Driver = () => {
	const [driverInfo, setDriverInfo] = useState<DriverModel>({});
	const [teamInfo, setTeamInfo] = useState([]);
	const [lastRace, setLastRace] = useState<RaceData>({});
	const [loadingDriver, setLoadingDriver] = useState(true);
	const [loadingTeam, setLoadingTeam] = useState(true);
	const [loadingLastRace, setLoadingLastRace] = useState(true);
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const f1 = new ErgastAPI();
		f1.driver(id)
			.then((response: DriverModel) => {
				console.log(response);
				setDriverInfo(response);
				setLoadingDriver(false);
			})
			.catch((err) => {
				console.log(err);
			});

		f1.teams(id)
			.then((response: Constructor[]) => {
				console.log(response);
				setTeamInfo(response);
				setLoadingTeam(false);
			})
			.catch((err) => {
				console.log(err);
			});

		f1.lastRace(id)
			.then((response: RaceData) => {
				console.log(response);
				setLastRace(response);
				setLoadingLastRace(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const onBackClick = () => {
		history.goBack();
	};

	const driverIdImage = driverMapImageId.find((item) => item.driver === id)?.id;
	return (
		<div className="driver">
			<div
				className="back"
				onClick={() => {
					onBackClick();
				}}
			>
				<AiOutlineArrowLeft />
				Back
			</div>
			<div className="driver-card">
				<div
					className="driver-image"
					style={{
						backgroundImage: driverIdImage
							? `url(https://www.diariomotor.com/competicion/imagenes/2020/03/f1-2020-pilotos-ficha-${driverIdImage}.jpg)`
							: `url(${Placeholder})`,
					}}
				></div>
				<div className="driver-info">
					{loadingDriver ? (
						<SkeletonLoader height={52} width={330} />
					) : (
						<div className="name">
							<span>{driverInfo.permanentNumber}</span>
							{`${driverInfo.givenName} ${driverInfo.familyName}`}
						</div>
					)}
					<div className="driver-data-section">
						<div className="column">
							<div className="row">
								<div className="label">Nationality</div>
								{loadingDriver ? (
									<SkeletonLoader height={25} width={140} />
								) : (
									<div className="value">{driverInfo.nationality}</div>
								)}
							</div>
							<div className="row">
								<div className="label">Born</div>
								{loadingDriver ? (
									<SkeletonLoader height={25} width={140} />
								) : (
									<div className="value">
										{moment(driverInfo.dateOfBirth).format("DD MMMM YYYY")}
									</div>
								)}
							</div>
						</div>
						<div className="column">
							<div className="row">
								<div className="label">Team</div>
								{loadingTeam ? (
									<SkeletonLoader height={25} width={140} />
								) : (
									<div className="value">
										{teamInfo[teamInfo.length - 1]?.name}
									</div>
								)}
							</div>
							<div className="row">
								<div className="label">Old Teams</div>
								{loadingTeam ? (
									<SkeletonLoader height={25} width={140} />
								) : (
									teamInfo.map((team: Constructor, index) => {
										if (index === teamInfo.length - 1) return "";
										return (
											<div key={index} className="value">
												{team.name}
											</div>
										);
									})
								)}
							</div>
						</div>
					</div>
					{lastRace && (
						<div className="last-race">
							<div className="label">Last race</div>
							<div className="label2">Circuit</div>
							{loadingLastRace ? (
								<SkeletonLoader height={30} width={330} />
							) : (
								<div className="value">{`${lastRace.Circuit?.circuitName} - ${lastRace.Circuit?.Location.country} (${lastRace.date})`}</div>
							)}

							{lastRace.Results && !loadingLastRace && (
								<>
									<div className="label">Position</div>
									<div className="value">{`${lastRace.Results[0].position} (+${lastRace.Results[0].points} points)`}</div>
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
