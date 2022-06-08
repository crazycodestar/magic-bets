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
		<div className="text-white bg-primary">
			<NavigationBar />
			<div
				className="px-3 h-[calc(80vh-80px)] flex flex-col justify-center items-center mb-[200px] mt-[100px] text-center
			md:px-16 lg:px-60 space-y-10"
			>
				<div className="space-y-1 sm:space-y-5">
					<h1 className="text-5xl sm:text-7xl">We find and calculate</h1>
					<h1 className="text-4xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500">
						surebets
					</h1>
				</div>
				<p className="text-lg text-slate-300">
					All you have to do is go to the bookmakers, place your stake and make
					a profit.
				</p>
				<div className="max-w-[420px] w-full mx-auto relative top-8">
					<Button modified onClick={() => navigate("/pricing")}>
						Pricing
					</Button>
				</div>
			</div>
			<div className="px-3 md:px-16 lg:px-60 lg:space-y-8">
				<h1 className="text-4xl sm:text-5xl mb-16">
					Earn <span className="text-slate-300">$$$ every week</span> with
					arbitrage betting
				</h1>
				<div className="grid grid-cols-1 w-full gap-5 sm:grid-cols-2 sm:gap-y-10 ">
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
				<h1 className="mb-5 text-4xl sm:text-5xl">
					How <span className="text-slate-300"> Magicbets</span> works
				</h1>
				<div>
					<div className="flex justify-between">
						<p className="text-xs">1. Find bets with magicbets</p>
						<p className="text-xs">3. Enjoy your profits</p>
					</div>
					<img
						src="https://betslayer.com/wp-content/uploads/2021/01/how-betsplayer-home.png"
						alt="how magicbets works"
						className="w-full"
					/>
					<p className="text-center">
						2. Click throught the bookmark link and place your bet
					</p>
					<div className="mt-32">
						<div className="max-w-[420px] mx-auto">
							<Button modified onClick={() => navigate("/pricing")}>
								Get full access for only ₦10,000
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="space-y-5 px-5 md:px-16 lg:px-60 pb-32">
				<h1 className="text-4xl sm:text-5xl">
					Arbitrage Betting is{" "}
					<span className="text-slate-300">not Gambling</span>
				</h1>
				<p className="text-slate-200">
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
