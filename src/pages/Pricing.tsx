import { FC } from "react";
import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";

import { MdOutlineDone } from "react-icons/md";

const Pricing: FC = () => {
	return (
		<div className="h-screen flex flex-col text-white">
			<NavigationBar />
			<div className="w-full h-full flex flex-col justify-center items-center bg-slate-700">
				<div className="mx-5 my-auto w-[400px] rounded-lg p-8 bg-slate-600">
					<div className="pb-3 border-b">
						<div className="flex items-baseline">
							<h2>₦10,000</h2>
							<p className="text-lg">/month</p>
						</div>
						<p className="text-lg mt-1 text-slate-300">Prematch</p>
					</div>
					<div className="pt-5 mb-20">
						<ul className="space-y-3">
							<li className="flex items-center space-x-2">
								<MdOutlineDone />
								<p>12 sports</p>
							</li>
							<div className=" bg-slate-500 rounded-md p-3">
								<p>
									Football, e-Sports, TableTennis, Darts, Hockey, Handball,
									Volleyball, Basketball, Tennis, Baseball, Boxing, MMA
								</p>
							</div>
							<li className="flex items-center space-x-2">
								<MdOutlineDone />
								<p>49 sites and 133 clones in Prematch</p>
							</li>
							<li className="flex items-center space-x-2">
								<MdOutlineDone />
								<p>30 days of freezing</p>
							</li>
							<li className="flex items-center space-x-2">
								<MdOutlineDone />
								<p>Betting history and statistics</p>
							</li>
						</ul>
					</div>
					<div>
						<Button>Buy Now</Button>
						<p className="text-center mt-2 text-slate-300">arbs premarch 30</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
