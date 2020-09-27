import { url } from "inspector";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "../styles/Card.scss";

interface CardProps {
	icon: ReactNode;
	title: string;
	image: string;
	link: string;
}

export const Card = ({ icon, title, image, link }: CardProps) => {
	return (
		<Link to={link}>
			<div className="card">
				<div className="background" style={{ backgroundImage: "url(" + image + ")" }}></div>
				<div className="card-icon">{icon}</div>
				<div className="card-title">{title}</div>
			</div>
		</Link>
	);
};
