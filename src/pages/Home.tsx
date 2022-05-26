import React, { FC } from "react";
import Button from "../components/Button";
import IconPoints, { Mark } from "../components/IconPoints";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

// icons
import { MdLightbulb } from "react-icons/md";
import { MdCloudQueue } from "react-icons/md";
import { MdMoving } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";

// navigation
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="text-white bg-slate-700">
			<NavigationBar />
			<div
				className="px-3 h-[calc(100vh-80px)] flex flex-col justify-center items-center pb-[200px] mt-8 text-center
			md:px-16 lg:px-60 space-y-8"
			>
				<div className="space-y-8">
					<h1 className="text-7xl">We find and calculate</h1>
					<h1 className="text-7xl">Surebets</h1>
				</div>
				<p className="text-lg">
					All you have to do is go to the bookmakers, place your stake and make
					a profit.
				</p>
				<div className="w-[420px] mx-auto">
					<Button modified onClick={() => navigate("/pricing")}>
						Pricing
					</Button>
				</div>
			</div>
			<div className="px-3 mb-20 md:px-16 lg:px-60 lg:space-y-8 pb-32">
				<h1 className="mb-5">Earn $$$ every week with arbitrage betting</h1>
				<div className="grid grid-cols-1 w-full gap-5 md:grid-cols-2">
					<IconPoints color="text-yellow-400" Icon={MdLightbulb}>
						Profitable <Mark color="text-yellow-400">Sure Bets</Mark> daily
					</IconPoints>
					<IconPoints color="text-green-400" Icon={MdCloudQueue}>
						Nothing to <Mark color="text-green-400">download</Mark>
					</IconPoints>
					<IconPoints color="text-pink-400" Icon={MdDeveloperBoard}>
						Proprietary algorithms{" "}
						<Mark color="text-pink-400">work for you</Mark>
					</IconPoints>
					<IconPoints color="text-blue-400" Icon={MdMoving}>
						Bet on all outcomes of an event & still{" "}
						<Mark color="text-blue-400">profit</Mark>
					</IconPoints>
				</div>
			</div>
			<div className="px-3 mb-20 md:px-16 lg:px-60 py-32">
				<h2 className="mb-5">How Betslayer-clone works</h2>
				<div>
					<div className="flex justify-between">
						<p className="text-xs">1. Find bets with betslayer-clone</p>
						<p className="text-xs">3. Enjoy your profits</p>
					</div>
					<img
						src="https://betslayer.com/wp-content/uploads/2021/01/how-betsplayer-home.png"
						alt="how betslayer-clone works"
						className="w-full"
					/>
					<p className="text-center">
						2. Click throught the bookmark link and place your bet
					</p>
					<div className="mt-8">
						<div className="w-[420px] mx-auto">
							<Button modified onClick={() => navigate("/pricing")}>
								Get full access for only ₦10k
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="space-y-5 px-5 md:px-16 lg:px-60 pb-32">
				<h2>
					Arbitrage Betting is
					<br /> not Gambling
				</h2>
				<p>
					Arbitrage betting or sure betting has nothing to do with gambling
					despite what the word “betting” would suggest. Betslayer teaches you
					how to place arbitrage bets that make you a profit, no matter the
					outcome. Arbitrage betting has also been called sure bets. Once you
					place a bet on both sites of a match, your results are sure to follow.
					BetSlayer's proprietary software does all the work identifying the
					bookmakers and matches where a sure bet exists. All you have to do is
					place the bet on both sides.
				</p>
				<div className="mr-auto w-fit">
					<Button secondary onClick={() => navigate("./sure-bets")}>
						Get sure bets now
					</Button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
