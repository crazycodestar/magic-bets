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
				className="px-3 mt-8 mb-20 text-center space-y-5
			md:px-16"
			>
				<div className="flex flex-col">
					<h1 className="capitalize">we find and calculate</h1>
					<h1 className="">Surebets</h1>
				</div>
				<p className="text-lg">
					All you have to do is go to the bookmakers, place your stake and make
					a profit.
				</p>
				<Button onClick={() => navigate("/sure-bets")}>Sure odds</Button>
			</div>
			<div className="px-3 mb-20 md:px-16">
				<h2 className="mb-5">Earn $$$ every week with arbitrage betting</h2>
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
			<div className="px-3 mb-20 md:px-16">
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
						<Button>start your free 7 day trial</Button>
						<p className="text-center text-slate-400 mt-2">
							no credit card required
						</p>
					</div>
				</div>
			</div>
			<div className="space-y-5 px-5 md:px-16">
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
				<div className="container--left">
					<Button secondary>Get sure bets now</Button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
