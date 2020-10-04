import React, { useEffect, useState } from "react";
import Race from "../models/Race";
import ErgastAPI from "../lib/ErgastAPI";
import { FaFlagCheckered } from "react-icons/fa";
import { AiOutlineDoubleRight } from "react-icons/ai";

import "../styles/Calendar.scss";
import moment from "moment";
import { SkeletonLoader } from "../components/SkeletonLoader";

export const Calendar = () => {
	const [races, setRaces] = useState([]);
	const [toggled, setToggled] = useState(true);
	const [indexTable, setIndexTable] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const f1 = new ErgastAPI();

		f1.races().then((response) => {
			setRaces(response);
			setLoading(false);
			setIndexTable(
				response.findIndex((race) => moment(race.date + " " + race.time) > moment()) - 1
			);

			if (indexTable < 0) setIndexTable(0);
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
					{toggled ? (
						<tr
							className="table-row"
							onClick={() => {
								setToggled(!toggled);
							}}
						>
							<td
								colSpan={5}
								style={{ textAlign: "center", backgroundColor: "#060606" }}
							>
								See all
							</td>
						</tr>
					) : (
						<tr
							className="table-row"
							onClick={() => {
								setToggled(!toggled);
							}}
						>
							<td
								colSpan={5}
								style={{ textAlign: "center", backgroundColor: "#060606" }}
							>
								Hide finished
							</td>
						</tr>
					)}
					{toggled
						? loading
							? [...Array(5)].map((x, i) => (
									<tr key={i}>
										<td colSpan={5}>
											<SkeletonLoader height={50} />
										</td>
									</tr>
							  ))
							: races.slice(indexTable).map((race: Race, index) => {
									const date = moment(race.date + " " + race.time);

									return (
										<tr
											key={index}
											className={
												"table-row " +
												((indexTable + 2).toString() === race.round
													? "next-race"
													: "")
											}
										>
											<td>
												<div className="icon">
													{date < moment() ? <FaFlagCheckered /> : ""}
													{(indexTable + 2).toString() === race.round ? (
														<AiOutlineDoubleRight />
													) : (
														""
													)}
												</div>
											</td>
											<td>
												{race.round}. {race.raceName}
											</td>
											<td>{date.format("DD MMMM")}</td>
											<td>{date.format("HH:mm")}</td>
										</tr>
									);
							  })
						: races.map((race: Race, index) => {
								const date = moment(race.date + " " + race.time);

								return (
									<tr key={index} className="table-row">
										<td>
											<div className="icon">
												{date < moment() ? <FaFlagCheckered /> : ""}
												{(indexTable + 2).toString() === race.round ? (
													<AiOutlineDoubleRight />
												) : (
													""
												)}
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
