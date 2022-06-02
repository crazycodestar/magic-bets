import { ReactNode, FC, ButtonHTMLAttributes, HTMLProps } from "react";

type buttonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
	children: ReactNode;
	modified?: boolean;
	secondary?: boolean;
	onClick?: (key: any) => void;
	type?: buttonType;
	[key: string]: any;
}

const Button: FC<ButtonProps> = ({
	children,
	secondary,
	onClick,
	modified,
	type,
	...others
}) => {
	return (
		<button
			className={` block text-white h-fit px-3 py-2 text-center bg-violet-500 capitalize rounded-lg hover:bg-violet-400 active:bg-violet-600 cursor-pointer w-full md:w-auto ${
				secondary
					? "border border-violet-500 bg-transparent text-violet-500 hover:bg-transparent hover:border-violet-400 hover:text-violet-400 active:border-violet-600 active:text-violet-600 active:bg-transparent"
					: ""
			} ${modified ? "px-5 py-4 rounded-full w-full" : ""}`}
			onClick={onClick}
			type={type}
			{...others}
		>
			<p className="whitespace-nowrap ">{children}</p>
		</button>
	);
};

export default Button;
