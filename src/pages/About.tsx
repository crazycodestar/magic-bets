import { FC } from "react";
import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";

// navigation
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const About: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="text-white bg-primary">
			<NavigationBar />
			<div
				className="px-3 h-[calc(80vh-80px)]  flex flex-col justify-center items-center pb-[200px] mt-8 text-center
			md:px-16 lg:px-60 space-y-8"
			>
				<h1 className="text-5xl sm:text-7xl sm:leading-tight">
					Learn how arbitrage betting can help you{" "}
					<span className="text-violet-600">profit every month</span>
				</h1>
				<p className="text-lg text-slate-300 ">Even if you work 9-5</p>
			</div>
			<div className="px-3 mb-20 md:px-16 lg:px-60 space-y-8 pb-32 lg:mb-0">
				<p className="text-left text-slate-300">
					Betslayer was created by Max & Matt in 2015. At the start, it was
					designed for his own personal use for scanning for arbitrage bets.
					Eventually, due to popular demand from friends and family, Betslayer
					became a business and the website was launched.
				</p>
				<p className="text-left text-slate-300">
					Max teamed up with his developer friend and soon they had turned the
					software into a neat tool that could be used by anyone. There were
					many challenges initially with scaling the data to be used by many
					users because of the complexity of updating odds and information
					quickly, but Max & Matt invested money into infrastructure to solve
					this problem and before long Betslayer was the market leading
					arbitrage betting website. The mission was to help people earn a side
					income by beating the bookies through low-risk betting strategies like
					arbitrage betting.
				</p>
			</div>

			<div className="px-3 mb-20 space-y-8 md:px-16 lg:px-60 pb-32 lg:mb-0">
				<h2>
					An arbitrage opportunity is when the odds of bookmakers are so far
					apart that we can bet on all outcomes and still make a profit.
				</h2>
				<p className="text-slate-300">
					For example, if Liverpool were playing Arsenal and Ladbrokes were
					offering odds of 2.20 on Liverpool to win and Coral were offering odds
					of 2.10 on Arsenal to win or draw (double chance), then it would be an
					arbitrage opportunity.
				</p>
				<p className="text-slate-300">
					If you were to place £100 on each of these bets you would have bet a
					total of £200. However, if Liverpool win, you’d get back £220 from
					Ladbrokes and if they lose or draw you’d get back £210 from Coral.
					Making a profit whatever the outcome.
				</p>
				<p className="text-slate-300">
					One of the first thing about using Betslayer is that unlike other
					programs you don’t have to download or install anything. Simply go to
					the website and log in to your account to get access. Also Betslayer
					offers both mobile & desktop compatibility, 25 bookmakers, and ongoing
					support.
				</p>
				<p className="text-slate-300">
					Betslayer is a great tool for earning a side income through arbitrage
					betting. There is great content to help you learn and a risk-free 7
					day trial. The only downside is you will have to commit a few hours
					learning the ropes of the website, after which you should be good to
					go.
				</p>

				<div className="max-w-[420px] w-full mx-auto">
					<Button modified onClick={() => navigate("/pricing")}>
						Pricing
					</Button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
