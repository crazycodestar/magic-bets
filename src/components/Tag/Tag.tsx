import React, { ReactNode, FC } from "react";
import "./style.css";

export interface TagProps {
	children: ReactNode;
}

const Tag: FC<TagProps> = ({ children }) => {
	return (
		<div className="tag">
			<p className="detail--2">{children}</p>
		</div>
	);
};

export default Tag;
