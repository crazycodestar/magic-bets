import { FC, useState, HTMLInputTypeAttribute, ReactNode } from "react";
import { MdOutlineRemoveRedEye, MdRemoveRedEye } from "react-icons/md";

type state = "default" | "danger" | "inactive";

export interface InputProps {
	label?: string;
	lowerTitle?: string;
	value?: string;
	type?: HTMLInputTypeAttribute;
	// onChange?: () => any;
	state?: state;
	[key: string]: any;
}

const Input: FC<InputProps> = ({
	state = "default",
	label,
	value,
	type = "text",
	lowerTitle,
	onChange,
	...others
}) => {
	const [showPassword, setShowPassword] = useState<Boolean>(false);
	const handleShowPassword = (): ReactNode => {
		if (type !== "password") return;
		if (showPassword) return <MdOutlineRemoveRedEye />;
		return <MdRemoveRedEye />;
	};

	const handleType = (inputType: HTMLInputTypeAttribute) => {
		if (inputType !== "password") return inputType;
		return showPassword ? "text" : "password";
	};

	return (
		<div className="relative w-full">
			<input
				{...others}
				value={value}
				placeholder="..."
				type={handleType(type)}
				className={`peer placeholder-transparent w-full px-3 py-2 border-2 border-violet-200 rounded-lg focus:ring focus:ring-violet-500 ${
					state === "danger" ? "focus:ring-red-500 border-red-200" : ""
				}`}
				onChange={onChange}
			/>
			<div
				className="absolute -right-3 -top-3.5 p-2 rounded-lg cursor-pointer"
				onClick={() => setShowPassword((init) => !init)}
			>
				{handleShowPassword()}
			</div>
			{lowerTitle && (
				<p
					className={`ml-3 capitalize text-violet-500 mt-1 ${
						state === "danger" ? "text-red-500" : ""
					}`}
				>
					{lowerTitle}
				</p>
			)}
			<label
				className={`absolute bg-white pointer-events-none text-violet-500 transition-all left-3 -top-4 capitalize
				peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:bg-transparent
				peer-focus:-top-4 peer-focus:bg-white peer-focus:text-violet-500
				${
					state === "danger"
						? "text-red-500 peer-placeholder-shown:text-red-200 peer-focus:text-red-500"
						: ""
				}
			`}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
