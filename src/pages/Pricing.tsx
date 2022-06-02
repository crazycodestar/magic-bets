import { ChangeEvent, FC } from "react";
import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";

import { MdOutlineDone } from "react-icons/md";
import useScript from "../hooks/useScript";

declare global {
	interface Window {
		PaystackPop: any;
	}
}

const Pricing: FC = () => {
	useScript("https://js.paystack.co/v1/inline.js");

	const handleSuccess = (arg: any) => {
		alert(arg);
	};

	const handlePay = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const handler = window.PaystackPop.setup({
			key: "pk_live_1a82592beb69c8d6dfc20d6f91ff3ad59962d841",
			email: "testing@email.com",
			amount: 10000 * 100,
			metadata: {
				subscription: "subscription plan",
			},
			ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
			callback: function (response: any) {
				handleSuccess(response);
			},
		});
		handler.openIframe();
	};

	return (
		<div className="h-screen flex flex-col text-white">
			<NavigationBar />
			<div className="w-full h-full flex flex-col justify-center items-center bg-primary">
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
						<Button onClick={handlePay}>Buy Now</Button>
						<p className="text-center mt-2 text-slate-300">arbs premarch 30</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
