import { ReactNode, FC, ButtonHTMLAttributes, HTMLProps } from "react";

type buttonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
	children: ReactNode;
	modified?: boolean;
	secondary?: boolean;
	disabled?: boolean;
	classStyles?: string;
	onClick?: (key: any) => void;
	type?: buttonType;
	[key: string]: any;
}

const Button: FC<ButtonProps> = ({
	children,
	secondary,
	classStyles,
	onClick,
	modified,
	disabled,
	type,
	...others
}) => {
	const handleStyle = (): string => {
		const base = "block h-fit px-3 text-centercapitalize cursor-pointer "
		if (disabled) return base + "bg-slate-200 cursor-not-allowed py-2 rounded-lg text-black"
		if (secondary) return "border py-2 border-violet-500 bg-transparent rounded-lg text-violet-500 hover:bg-transparent hover:border-violet-400 hover:text-violet-400 active:border-violet-600 active:text-violet-600 active:bg-transparent " + base;
		if (modified) return "bg-violet-500 px-5 py-4 rounded-full w-full py-5 " + base;
		return "block text-white h-fit px-3 py-2 text-center bg-violet-500 capitalize rounded-lg hover:bg-violet-400 active:bg-violet-600 cursor-pointer w-full md:w-auto"
	}
	return (
		<button
			className={`${handleStyle()} ${classStyles}`}
			disabled={disabled}
			onClick={onClick}
			type={type}
			{...others}
		>
			<p className="whitespace-nowrap">{children}</p>
		</button>
	);
};

export default Button;
