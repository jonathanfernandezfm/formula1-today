import React, { ReactNode } from "react";
import { Header } from "./Header";

import "../styles/Layout.scss";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="layout">
			<Header />
			<div className="layout-content">{children}</div>
		</div>
	);
};
