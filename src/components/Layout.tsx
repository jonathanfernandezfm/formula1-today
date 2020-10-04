import React, { ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "../styles/Layout.scss";
import { NavBar } from "./NavBar";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const [toggled, setToggled] = useState(false);
	const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
	const isMobile = useMediaQuery({ query: "(max-width: 568px)" });

	const toggle = () => {
		setToggled(!toggled);
	};

	return (
		<div className="layout">
			<NavBar
				isTablet={isTablet}
				isMobile={isMobile}
				toggled={isMobile || isTablet ? true : toggled}
				onClick={async () => toggle()}
			/>
			<div className={"layout-content" + (isMobile || isTablet || toggled ? " toggled" : "")}>
				{children}
			</div>
		</div>
	);
};
