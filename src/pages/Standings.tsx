import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SkeletonLoader } from "../components/SkeletonLoader";
import ErgastAPI from "../lib/ErgastAPI";
import Standing from "../models/Standing";

import "../styles/Standings.scss";

export const Standings = () => {
	const [standings, setStandings] = useState([]);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		const f1 = new ErgastAPI();
		f1.standings()
			.then((response) => {
				console.log(response);
				setStandings(response);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onRowClick = (driverId: string) => {
		history.push(`/drivers/${driverId}`);
	};

	return (
		<div className="standings">
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th>Driver</th>
						<th>Wins</th>
						<th>Points</th>
					</tr>
				</thead>
				<tbody>
					{loading
						? [...Array(20)].map((x, i) => (
								<tr key={i}>
									<td colSpan={5}>
										<SkeletonLoader height={50} />
									</td>
								</tr>
						  ))
						: standings.map((standing: Standing, index) => {
								return (
									<tr
										key={index}
										className={
											"table-row" +
											(index === 0 ? " first" : index === 1 ? " second" : "")
										}
										onClick={() => {
											onRowClick(standing.Driver.driverId);
										}}
									>
										<td className="position">{standing.positionText}</td>
										<td
											className={
												"driver-code " +
												standing.Constructors[0].constructorId
											}
										>
											{standing.Driver.code}
										</td>
										<td>{`${standing.Driver.givenName} ${standing.Driver.familyName}`}</td>
										<td>{standing.wins}</td>
										<td>{standing.points}</td>
									</tr>
								);
						  })}
				</tbody>
			</table>
		</div>
	);
};
