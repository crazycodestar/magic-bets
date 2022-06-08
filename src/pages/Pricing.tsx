import { ChangeEvent, FC, useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";

import { MdOutlineDone } from "react-icons/md";
import useScript from "../hooks/useScript";
import { gql, useMutation, useQuery } from "@apollo/client";
import { returnData } from "../interface/common";
// navigattion
import { useNavigate } from "react-router-dom";

declare global {
	interface Window {
		PaystackPop: any;
	}
}

type statusOptions = "success";

interface transactionRef {
	status: statusOptions;
	trxref: string;
	reference: string;
	trans: string;
	message: string;
	transaction: string;
}

const SUBSCRIBE = gql`
mutation Mutation($trxref: String) {
  subscribe(trxref: $trxref) {
    status
    message
  }
}
`

interface ISubscribe {
	trxref: string;
}

// initail query

const GETUSER = gql`
query GetUser {
  getUser {
    id
		emailAddress
  }
}
`

interface IUserData {
	id: number;
	emailAddress: string;
}

const Pricing: FC = () => {
	const { loading, data: userInit, error } = useQuery<{ getUser: IUserData }>(GETUSER);

	const navigate = useNavigate();

	useScript("https://js.paystack.co/v1/inline.js");
	const [subscribe, { data }] = useMutation<{ subscribe: returnData }, ISubscribe>(SUBSCRIBE);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [transactionDetails, setTransactionDetails] = useState<transactionRef | null>(null);

	useEffect(() => {
		if (!data) return;
		console.log("data", data)
		if (data?.subscribe.status === "success") {
			navigate("/sure-bets");
		}
		// go to bettin page
	}, [data])

	const handleSuccess = () => {
		if (!transactionDetails) return;
		const { status, trxref } = transactionDetails;
		if (status === "success") {
			subscribe({
				variables: {
					trxref: trxref,
				}
			})
		}
	};

	const handleModalClose = () => {
		setIsOpen(false);
	}

	const handlePay = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		// check for if user is logged in
		if (!localStorage.getItem("token")) return navigate("/sign-in")

		if (!userInit?.getUser.id) return;

		const { emailAddress, id } = userInit.getUser;

		const handler = window.PaystackPop.setup({
			key: "pk_test_0d4628adca1acc7f0260de3bfb1799a314d5ae82",
			email: emailAddress,
			plan: "PLN_k30bxqo7kt324sg",
			metadata: {
				subscription: "subscription plan",
				userId: id,
			},
			ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
			callback: function (response: any) {
				setTransactionDetails(response);
				setIsOpen(true);
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
						<Button disabled={loading} classStyles="md:w-full" onClick={handlePay}>{loading ? "loading..." : "Buy Now"}</Button>
						{isOpen && <Processing onClose={handleModalClose} onSubscribe={handleSuccess} />}
						<p className="text-center mt-2 text-slate-300">arbs premarch 30</p>
					</div>
				</div>
			</div>
		</div>
	);
};

interface IProcessingProps {
	onSubscribe: () => void;
	onClose: () => void;
}

const Processing: FC<IProcessingProps> = ({ onSubscribe, onClose }) => {
	const contentBody = useRef<HTMLDivElement>(null)
	useEffect(() => {
		document.body.style.overflowY = "hidden"
		onSubscribe();
		return () => {
			document.body.style.overflowY = "auto"
		}
	}, [])
	const handleClose = () => {
		// onClose()
		return;
	}
	return createPortal(
		<div onClick={handleClose}
			className={`bg-black bg-opacity-70 w-full flex justify-center items-center absolute top-0 left-0 bottom-0`}
		>
			<div ref={contentBody} onClick={e => e.stopPropagation()} className="w-[300px] h-[150px] bg-white rounded-lg p-5 flex flex-col justify-center items-center" >
				<p className="text-lg font-medium">Processing requests</p>
				<p>do not close this tab</p>
			</div>
		</div>,
		document.body
	)
}

export default Pricing;
