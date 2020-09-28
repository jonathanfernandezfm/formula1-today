import React, { ReactNode, useState } from "react";
import { Header } from "./Header";

import "../styles/Layout.scss";
import { NavBar } from "./NavBar";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	const [toggled, setToggled] = useState(false);
	return (
		<div className="layout">
			<NavBar toggled={toggled} />
			<div className="layout-content">{children}</div>
		</div>
	);
};
