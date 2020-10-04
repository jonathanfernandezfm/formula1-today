import React, { useEffect, useState } from "react";
import { DriverCard } from "../components/DriverCard";
import ErgastAPI from "../lib/ErgastAPI";
import DriverModel, { driverMapImageId } from "../models/Driver";
import { useHistory } from "react-router-dom";

import "../styles/Drivers.scss";
import { SkeletonLoader } from "../components/SkeletonLoader";

export const Drivers = () => {
	const [drivers, setDrivers] = useState<DriverModel[]>([]);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		const f1 = new ErgastAPI();

		f1.drivers()
			.then((response: DriverModel[]) => {
				console.log(response);
				setDrivers(response);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onClick = (id) => {
		history.push(`/drivers/${id}`);
	};

	return (
		<div className="drivers">
			{loading
				? [...Array(20)].map((x, i) => <SkeletonLoader key={i} width={220} height={280} />)
				: drivers.map((driver) => {
						return (
							<DriverCard
								driver={driver}
								onClick={onClick}
								img={`https://www.diariomotor.com/competicion/imagenes/2020/03/f1-2020-pilotos-ficha-${
									driverMapImageId.find((item) => item.driver === driver.driverId)
										?.id
								}.jpg`}
							/>
						);
				  })}
		</div>
	);
};
