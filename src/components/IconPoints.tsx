import { FC, ReactNode } from "react";
import { IconType } from "react-icons";

export interface IconPointsProps {
	Icon: IconType;
	children: ReactNode;
	color?: string;
}

const IconPoints: FC<IconPointsProps> = ({ children, Icon, color }) => {
	return (
		<div className="flex items-center">
			<div className="p-4 bg-slate-600 rounded-lg mr-3">
				{<Icon className={`${color} text-lg`} />}
			</div>
			<p className="inline">{children}</p>
		</div>
	);
};

export interface MarkProps {
	children: ReactNode;
	color: string;
}

export const Mark: FC<MarkProps> = ({ children, color }) => {
	return <p className={`${color} inline-block`}>{children}</p>;
};

export default IconPoints;
