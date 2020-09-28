import React, { useEffect, useState } from "react";
import Race from "../models/Race";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";

import "../styles/Calendar.scss";
import moment from "moment";
import { Console } from "console";

export const Calendar = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`http://ergast.com/api/f1/current.json`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
			}),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response.MRData.RaceTable.Races);
				setData(response.MRData.RaceTable.Races);
			})
			.catch((error) => console.log(error));
	}, [true]);

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
					{data.map((race: Race, index) => {
						const date = moment(race.date + " " + race.time);

						return (
							<tr key={index} className="table-row">
								<td>
									<div className="icon">
										{date < moment() ? <AiOutlineCheck /> : ""}
									</div>
								</td>
								<td className="race-name">
									{race.round}. {race.raceName}
								</td>
								<td className="race-day">{date.format("DD MMMM")}</td>
								<td className="race-hour">{date.format("HH:mm")}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
