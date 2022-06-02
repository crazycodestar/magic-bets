import { FC, useState } from "react";
import Button from "./Button";

// react touter
import { useNavigate } from "react-router-dom";

// icons
import { MdMenu } from "react-icons/md";

const NavigationBar: FC = () => {
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const navigate = useNavigate();
	return (
		<div className="lg:justify-between lg:items-center lg:space-y-0 lg:flex lg:h-20 lg:px-40 px-3 py-4 w-full space-y-5 justify-between bg-primary ">
			<div
				onClick={() => setShowDropdown((state) => !state)}
				className="rounded-lg bg-slate-500 p-3 absolute right-0 top-0 cursor-pointer active:opacity-70 lg:hidden"
			>
				<MdMenu className="text-white" />
			</div>
			<h3
				className="text-white text-left cursor-pointer"
				onClick={() => navigate("/")}
			>
				Betslayer-clone
			</h3>
			<div
				className={`lg:flex lg:flex-row space-y-5 lg:space-x-5 text-lg text-slate-300 items-baseline lg:relative ${
					showDropdown ? "" : "hidden"
				}`}
			>
				<p
					className="hover:underline cursor-pointer w-full lg:w-fit  py-2"
					onClick={() => navigate("/pricing")}
				>
					pricing
				</p>
				<p
					className="hover:underline cursor-pointer w-full lg:w-fit py-2"
					onClick={() => navigate("/about")}
				>
					about
				</p>
				<p
					className="hover:underline cursor-pointer w-full lg:w-fit py-2"
					onClick={() => navigate("/sure-bets")}
				>
					sure bets
				</p>
			</div>
			<div className={`lg:flex gap-3 ${showDropdown ? "flex" : "hidden"}`}>
				<Button onClick={() => navigate("/sign-in")}>sign in</Button>
				<Button secondary onClick={() => navigate("/sign-up")}>
					sign up
				</Button>
			</div>
		</div>
	);
};

export default NavigationBar;
