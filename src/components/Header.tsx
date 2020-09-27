import React, { ReactNode, useState } from "react";
import { FiAperture } from "react-icons/fi";

import "../styles/Header.scss";
import Logo from "../assets/logo.png";

interface MenuButton {
	icon: ReactNode;
	label: string;
}

const mainMenuButtons = [
	{ icon: <FiAperture />, label: "Home" },
	{ icon: <FiAperture />, label: "Calendar" },
	{ icon: <FiAperture />, label: "Standings" },
	{ icon: <FiAperture />, label: "Circuits" },
];

const moreMenuButton = { icon: "", label: "More" };

const secondaryMenuButtons = [
	{ icon: <FiAperture />, label: "Drivers" },
	{ icon: <FiAperture />, label: "Teams" },
	{ icon: <FiAperture />, label: "Races" },
];

export const Header = () => {
	const [dropdownActive, setDropdownActive] = useState(false);

	return (
		<div className="page-header">
			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="title">Formula 1 Today</div>
			<div className="menu">
				{mainMenuButtons.map(({ icon, label }: MenuButton, index) => {
					return (
						<div key={index} className="menu-button">
							<div className="button-icon">{icon}</div>
							<div className="button-label">{label}</div>
						</div>
					);
				})}
				<div
					className="menu-button"
					onClick={() => {
						setDropdownActive(!dropdownActive);
					}}
				>
					<div className="button-icon">{moreMenuButton.icon}</div>
					<div className="button-label">{moreMenuButton.label}</div>
				</div>
				<div className={"dropdown " + (dropdownActive ? "active" : "")}>
					{secondaryMenuButtons.map(({ icon, label }: MenuButton, index) => {
						return (
							<div key={index} className="dropdown-menu-button">
								<div className="dropdown-button-icon">{icon}</div>
								<div className="dropdown-button-label">{label}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
