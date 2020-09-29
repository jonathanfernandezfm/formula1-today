import React, { useEffect, useState } from "react";
import Race from "../models/Race";
import ErgastAPI from "../lib/ErgastAPI";
import { AiOutlineCheck } from "react-icons/ai";

import "../styles/Calendar.scss";
import moment from "moment";

export const Calendar = () => {
	const [races, setRaces] = useState([]);

	useEffect(() => {
		const f1 = new ErgastAPI();

		f1.races().then((response) => {
			setRaces(response);
		});
	}, []);

	return (
		<div className="calendar">
			<table className="table">
				<thead>
					<tr>
						<th></th>
						<th>Race name</th>
						<th>Day</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					{races.map((race: Race, index) => {
						const date = moment(race.date + " " + race.time);

						return (
							<tr key={index} className="table-row">
								<td>
									<div className="icon">
										{date < moment() ? <AiOutlineCheck /> : ""}
									</div>
								</td>
								<td>
									{race.round}. {race.raceName}
								</td>
								<td>{date.format("DD MMMM")}</td>
								<td>{date.format("HH:mm")}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
