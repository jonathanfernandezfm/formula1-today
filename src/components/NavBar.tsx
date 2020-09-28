import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneCalendar } from "react-icons/ai";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineSwap } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import Logo from "../assets/logo.png";

import "../styles/NavBar.scss";

interface MenuButton {
	icon: ReactNode;
	label: string;
	link: string;
}

interface NavBarProps {
	toggled: boolean;
}

const mainMenuButtons = [
	{ icon: <AiOutlineHome />, label: "Home", link: "/" },
	{ icon: <AiTwotoneCalendar />, label: "Calendar", link: "/calendar" },
	{ icon: <AiOutlineCrown />, label: "Standings", link: "/standings" },
	{ icon: <AiOutlineSwap />, label: "Circuits", link: "/circuits" },
	{ icon: <AiOutlineUser />, label: "Drivers", link: "/drivers" },
	{ icon: <AiOutlineContacts />, label: "Teams", link: "/teams" },
	{ icon: <AiOutlineDoubleRight />, label: "Races", link: "/races" },
];

export const NavBar = ({ toggled }: NavBarProps) => {
	const [active, setActive] = useState(0);

	return (
		<div className={"navbar" + (toggled ? " toggled" : "")}>
			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="buttons-wrapper">
				{mainMenuButtons.map(({ icon, label, link }: MenuButton, index) => {
					return (
						<Link to={link}>
							<div
								key={index}
								className={"menu-button " + (active === index ? "active" : "")}
								onClick={() => setActive(index)}
							>
								<div className="button-icon">{icon}</div>
								<div className="button-label">{label}</div>
								{active === index && (
									<div className="selected-icon">
										<AiOutlineCaretRight />
									</div>
								)}
							</div>
						</Link>
					);
				})}
			</div>
			<div className="bottom-navbar">Jonathan Fernandez Mertanen</div>
		</div>
	);
};
