import { FC } from "react";
import Button from "../components/Button";

import Input from "../components/Input";

// navigation
import { useNavigate } from "react-router-dom";

const ConfirmEmail: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="h-screen text-white">
			<div className="bg-primary h-[60px] flex text-white px-3 items-center w-full">
				<h2 className="cursor-pointer" onClick={() => navigate("/")}>
					betslayer clone
				</h2>
			</div>
			<div className="h-full bg-primary pt-[200px] flex justify-center">
				<div className="px-3 max-w-[450px]">
					<h1>Email sent</h1>
					<p className="text-lg text-slate-300">
						please note that the mail would likely have been sent to your spam
						mail
					</p>
					<div className="space-y-3 mt-5 md:flex md:w-full md:space-y-0 md:space-x-3 md:items-center">
						<Input label="Email Address" />
						<Button>Resend email</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmEmail;
