import { FC } from "react";
import Button from "./Button";

// react touter
import { useNavigate } from "react-router-dom";

const NavigationBar: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="h-20 px-3 py-2 w-full flex items-center justify-between bg-slate-700">
			<h3 className="text-white cursor-pointer" onClick={() => navigate("/")}>
				Betslayer-clone
			</h3>
			<div className="flex gap-3">
				<Button onClick={() => navigate("/sign-in")}>sign in</Button>
				<Button secondary onClick={() => navigate("/sign-up")}>
					sign up
				</Button>
			</div>
		</div>
	);
};

export default NavigationBar;
