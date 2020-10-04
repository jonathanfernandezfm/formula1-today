import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneCalendar } from "react-icons/ai";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineSwap } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

import Logo from "../assets/logo.png";

import "../styles/NavBar.scss";

interface MenuButton {
	icon: ReactNode;
	label: string;
	link: string;
}

interface NavBarProps {
	toggled: boolean;
	onClick: () => {};
	isTablet: any;
	isMobile: any;
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

export const NavBar = ({ isMobile, isTablet, toggled, onClick }: NavBarProps) => {
	return (
		<div className={"navbar" + (toggled ? " toggled" : "")}>
			{!isTablet && (
				<div
					className="toggle-button"
					onClick={() => {
						onClick();
					}}
				>
					<AiOutlineLeft />
				</div>
			)}
			<div className="logo">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="buttons-wrapper">
				{mainMenuButtons.map(({ icon, label, link }: MenuButton, index) => {
					return (
						<NavLink
							key={index}
							isActive={(match, location) => {
								if (location.pathname.includes(link) && link !== "/") return true;
								else if (location.pathname === link) return true;
								else return false;
							}}
							activeClassName="is-active"
							to={link}
						>
							<div key={index} className={"menu-button"}>
								<div className="button-icon">{icon}</div>
								<div className="button-label">{label}</div>

								<div className="selected-icon">
									<AiOutlineCaretRight />
								</div>
							</div>
						</NavLink>
					);
				})}
			</div>
			<div className="bottom-navbar">Jonathan Fernandez Mertanen</div>
		</div>
	);
};
