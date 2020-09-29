import React, { useEffect, useState } from "react";
import ErgastAPI from "../lib/ErgastAPI";
import Standing from "../models/Standing";

import "../styles/Standings.scss";

export const Standings = () => {
	const [standings, setStandings] = useState([]);
	const f1 = new ErgastAPI();

	useEffect(() => {
		f1.standings()
			.then((response) => {
				console.log(response);
				setStandings(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [true]);

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
					{standings.map((standing: Standing, index) => {
						return (
							<tr
								key={index}
								className={
									"table-row" +
									(index === 0 ? " first" : index === 1 ? " second" : "")
								}
							>
								<td className="position">{standing.positionText}</td>
								<td
									className={
										"driver-code " + standing.Constructors[0].constructorId
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
