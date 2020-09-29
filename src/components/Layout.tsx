import React, { ReactNode, useState } from "react";

import "../styles/Layout.scss";
import { NavBar } from "./NavBar";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const [toggled, setToggled] = useState(false);
	return (
		<div className="layout">
			<NavBar toggled={toggled} onClick={async () => setToggled(!toggled)} />
			<div className={"layout-content" + (toggled ? " toggled" : "")}>{children}</div>
		</div>
	);
};
