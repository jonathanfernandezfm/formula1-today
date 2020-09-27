import React from "react";
import { Card } from "../components/Card";
import { AiTwotoneCalendar } from "react-icons/ai";
import { AiOutlineCrown } from "react-icons/ai";
import { AiOutlineSwap } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import CalendarBack from "../assets/calendar.jpg";
import StandingsBack from "../assets/standings.jpg";
import CircuitsBack from "../assets/circuits.jpg";

import "../styles/Landing.scss";
import { SmallCard } from "../components/SmallCard";

const mainCards = [
	{ icon: <AiTwotoneCalendar />, title: "Calendar", image: CalendarBack, link: "/calendar" },
	{ icon: <AiOutlineCrown />, title: "Standings", image: StandingsBack, link: "/standings" },
	{ icon: <AiOutlineSwap />, title: "Circuits", image: CircuitsBack, link: "/circuits" },
];

const secondaryCards = [
	{ icon: <AiOutlineUser />, title: "Drivers", image: CalendarBack, link: "/drivers" },
	{ icon: <AiOutlineContacts />, title: "Teams", image: StandingsBack, link: "/teams" },
	{ icon: <AiOutlineDoubleRight />, title: "Races", image: CircuitsBack, link: "/races" },
];

export const Landing = () => {
	return (
		<div className="landing">
			<div className="big-cards-container">
				{mainCards.map(({ icon, title, image, link }, index) => {
					return <Card key={index} icon={icon} title={title} image={image} link={link} />;
				})}
			</div>
			<div className="second-cards-container">
				{secondaryCards.map(({ icon, title, link }, index) => {
					return <SmallCard key={index} icon={icon} title={title} link={link} />;
				})}
			</div>
		</div>
	);
};
