import React from "react";

import "../styles/SkeletonLoader.scss";

interface SkeletonLoaderProps {
	width?: number;
	height?: number;
}

export const SkeletonLoader = ({ width, height }: SkeletonLoaderProps) => {
	return <div className="skeleton-loader" style={{ width: width, height: height }}></div>;
};
