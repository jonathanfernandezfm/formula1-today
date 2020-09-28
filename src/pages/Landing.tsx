import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import BackgroundImage from "../assets/calendar.jpg";

import "../styles/Landing.scss";

export const Landing = () => {
	return (
		<div className="landing">
			<div className="welcome-text-wrapper">
				<div className="title">Welcome!</div>
				<div className="text">
					I see you <AiOutlineHeart /> like Formula 1
				</div>
				<div className="text">and you are looking for some information</div>
				<div className="text arrow-left">
					<AiOutlineArrowLeft />
					go ahead and use this menu to navigate
				</div>
			</div>
			<div className="right-image">
				<img src={BackgroundImage} alt="" />
			</div>
		</div>
	);
};
