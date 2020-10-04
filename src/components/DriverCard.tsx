import React from "react";
import DriverModel from "../models/Driver";

import Placeholder from "../assets/placeholder-driver.png";

import "../styles/DriverCard.scss";

interface DriverCardProps {
	driver: DriverModel;
	img: string;
	onClick: (id: string) => void;
}

export const DriverCard = ({ driver, img, onClick }: DriverCardProps) => {
	return (
		<div className="driver-small-card" onClick={() => onClick(driver.driverId)}>
			<img
				className="driver-img-card"
				src={!img.includes("undefined") ? img : Placeholder}
				alt=""
			/>
			<div className="info-wrapper">
				<div className="number">{driver.permanentNumber}</div>
				<div className="name">{driver.givenName + " " + driver.familyName}</div>
			</div>
		</div>
	);
};
