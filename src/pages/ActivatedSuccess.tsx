import { FC } from "react";
import Button from "../components/Button";

// navigation
import { useNavigate } from "react-router-dom";

const ActivatedSuccess: FC = () => {
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
					<h1>Activated Successfully</h1>
					<p className="text-lg text-slate-300 mb-5">
						Your account has been activated successfully. You can now unlock the
						full features of our services
					</p>
					<Button onClick={() => navigate("/sign-in")}>login</Button>
					{/* <div className="space-y-3 mt-5 md:flex md:w-full md:space-y-0 md:space-x-3 md:items-center">
						<Input label="Email Address" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ActivatedSuccess;
