import { ReactNode, FC } from "react";

export interface ButtonProps {
	children: ReactNode;
	modified?: boolean;
	secondary?: boolean;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	children,
	secondary,
	onClick,
	modified,
}) => {
	return (
		<div
			className={` text-white px-3 py-2 text-center bg-violet-500 capitalize rounded-lg hover:bg-violet-400 active:bg-violet-600 cursor-pointer ${
				secondary
					? "border border-violet-500 bg-transparent text-violet-500 hover:bg-transparent hover:border-violet-400 hover:text-violet-400 active:border-violet-600 active:text-violet-600 active:bg-transparent"
					: ""
			} ${modified ? "px-5 py-4 rounded-full" : ""}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Button;
