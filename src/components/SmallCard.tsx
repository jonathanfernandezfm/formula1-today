import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "../styles/SmallCard.scss";

interface SmallCardProps {
	icon: ReactNode;
	title: string;
	link: string;
}

export const SmallCard = ({ icon, title, link }: SmallCardProps) => {
	return (
		<Link to={link}>
			<div className="small-card">
				<div className="small-card-icon">{icon}</div>
				<div className="small-card-title">{title}</div>
			</div>
		</Link>
	);
};
