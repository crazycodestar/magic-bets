import { FC } from "react";

type state = "default" | "danger" | "inactive";

export interface InputProps {
	label?: string;
	lowerTitle?: string;
	onChange?: () => void;
	state?: state;
}

const Input: FC<InputProps> = ({
	state = "default",
	label,
	lowerTitle,
	onChange,
	...others
}) => {
	return (
		<div className="relative w-full mt-5">
			<input
				{...others}
				placeholder="..."
				className="peer placeholder-transparent w-full px-3 py-2 border-2 border-violet-200 rounded-lg focus:ring focus:ring-violet-500"
				onChange={onChange}
			/>
			{lowerTitle && (
				<p className="ml-3 capitalize text-violet-500 mt-1">{lowerTitle}</p>
			)}
			<label
				className="absolute bg-white pointer-events-none text-violet-500 transition-all left-3 -top-4 capitalize
				peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-slate-400 peer-placeholder-shown:bg-transparent
				peer-focus:-top-4 peer-focus:bg-white peer-focus:text-violet-500
			"
			>
				{label}
			</label>
		</div>
	);
};

export default Input;
