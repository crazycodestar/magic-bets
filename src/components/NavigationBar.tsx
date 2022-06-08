import { FC, useState } from "react";
import Button from "./Button";

// react touter
import { useNavigate } from "react-router-dom";

// icons
import { MdMenu } from "react-icons/md";
import { gql, useQuery } from "@apollo/client";

import logo from "../assets/images/logo.svg";

const GETUSER = gql`
query GetUser {
  getUser {
    username
		subscribed
  }
}
`

interface IUserData {
	username: string;
}

const NavigationBar: FC = () => {
	const { loading, data, error } = useQuery<{ getUser: IUserData }>(GETUSER);

	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token")
		navigate("/sign-in")
	}

	const configureAccount = () => {
		if (loading) return "loading...";
		const isLoggedIn = localStorage.getItem("token")

		// safety feature
		// if (!username) {
		// 	localStorage.removeItem("token");
		// 	navigate("/sign-in");
		// }

		if (isLoggedIn) return (
			<>
				<Button onClick={handleLogout} type="button"> logout </Button>
			</>
		);
		return (
			<>
				<Button onClick={() => navigate("/sign-in")}>sign in</Button>
				<Button secondary onClick={() => navigate("/sign-up")}>
					sign up
				</Button>
			</>
		)
	}

	return (
		<div className="lg:justify-between lg:items-center lg:space-y-0 lg:flex lg:h-20 lg:px-40 px-3 py-4 w-full space-y-5 justify-between bg-primary ">
			<div
				onClick={() => setShowDropdown((state) => !state)}
				className="rounded-lg bg-slate-500 p-3 absolute right-0 top-0 cursor-pointer active:opacity-70 lg:hidden"
			>
				<MdMenu className="text-white" />
			</div>
			<div className=" flex space-x-2 items-center cursor-pointer"
				onClick={() => navigate("/")}>
				<img src={logo} alt="logo" className="w-[30px] h-[30px] bg-transparent" />
				<h3
					className="text-white text-left"
				>
					Arbxbets
				</h3>
			</div>
			<div
				className={`lg:flex lg:flex-row space-y-5 lg:space-x-5 text-lg text-slate-300 items-baseline lg:relative ${showDropdown ? "" : "hidden"
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

				{configureAccount()}
			</div>
		</div>
	);
};

export default NavigationBar;
