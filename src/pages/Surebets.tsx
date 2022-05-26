import { FC, useLayoutEffect, useRef, useState } from "react";
import NavigationBar from "../components/NavigationBar";

// icons
import { MdClose, MdOutlineLaunch, MdAutorenew } from "react-icons/md";
import { MdCalculate } from "react-icons/md";
import Input from "../components/Input";

const Surebets: FC = () => {
	const [showWarning, setShowWarning] = useState<boolean>(true);
	const [showCalculator, setShowCalculator] = useState<boolean>(false);

	const table = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!table) return;
		table.current?.scrollBy(table.current?.scrollWidth, 0);
		console.log("running");
	}, [showCalculator]);

	const handleShowCalculator = (): void => {
		setShowCalculator((state) => !state);
	};

	return (
		<div>
			<NavigationBar />
			<div className="lg:px-60 md:px-32">
				{/* placer */}
				{showWarning && (
					<div className="rounded-lg border px-3 py-2 mx-3 my-3 space-y-3 relative bg-yellow-100 border-yellow-300">
						<div
							onClick={() => setShowWarning(false)}
							className="absolute top-0 right-0 p-1 cursor-pointer bg-yellow-200"
						>
							<MdClose />
						</div>
						<h6>Warning</h6>
						<p>
							Restricted mode. To display the full functionality you need to get
							subscription.
						</p>
					</div>
				)}
				<div className="mx-3 mt-8overflow-x-hidden">
					<div>
						<div className="flex">
							<h6 className="w-[100px] py-2 px-3">Profit</h6>
							<h6 className="w-[100px] py-2 px-3">Event</h6>
						</div>
						<div ref={table} className="w-full overflow-x-auto">
							<table className="w-full">
								<tr className="bg-slate-200">
									<th className="py-2  min-w-[100px] capitalize text-left pl-2">
										<h6>26.64%</h6>{" "}
										<p className="font-normal text-sm">an hour</p>
									</th>
									<th className="py-2 min-w-[200px] capitalize text-left">
										<h6>football</h6>
										<p className="font-normal text-sm">May 28, 9:30</p>
									</th>
									<th className=" min-w-[100px]">
										{" "}
										<p className="font-normal hidden md:block">
											(Games/Points)
										</p>
									</th>
									{showCalculator && (
										<>
											<th className=" min-w-[100px]">
												<p className="font-normal">Odds</p>
											</th>
											<th className=" min-w-[125px]">
												<p className="font-normal">Bet</p>
											</th>
											<th className=" min-w-[100px]">
												<p className="font-normal">Currency</p>
											</th>
											<th className=" min-w-[50px]">
												<p className="font-normal">D</p>
											</th>
											<th className=" min-w-[50px]">
												<p className="font-normal">F</p>
											</th>
										</>
									)}

									<th>
										{" "}
										<div
											onClick={() => handleShowCalculator()}
											className="px-2 py-2 bg-slate-400 rounded-l-lg m-0 cursor-pointer hover:bg-slate-300 active:bg-slate-500"
										>
											{showCalculator ? <MdClose /> : <MdCalculate />}
										</div>
									</th>
								</tr>
								<tr className="border-b border-slate-200">
									<td className="py-2 pl-2">
										<p className="font-medium capitalize">zenit</p>{" "}
									</td>
									<td className="py-2">
										<p className="font-semibold">
											Hougang United - Balestier Khalsa
										</p>{" "}
										<p>football singapore premier league</p>{" "}
									</td>
									<td className="py-2">XXXX</td>
									{showCalculator && (
										<>
											<td className="py-2">
												<div className="w-full px-2">
													<Input />
												</div>
											</td>
											<td className="py-2">
												<div className="w-full flex items-center space-x-2 px-2">
													<MdAutorenew className="text-[32px] relative top-2.5" />
													<Input />
												</div>
											</td>
											<td className="py-2">
												<div className="w-full px-2">
													<Input />
												</div>
											</td>
											<td>
												<div className="w-full flex justify-center items-center">
													<input type="checkbox" />
												</div>
											</td>
											<td>
												<div className="w-full flex justify-center items-center">
													<input type="radio" />
												</div>
											</td>
										</>
									)}

									<td className="py-2">XX</td>
								</tr>
								<tr className="border-b border-slate-200">
									<td className="py-2 pl-2">
										<p className="font-medium capitalize">zenit</p>{" "}
									</td>
									<td className="py-2">
										<p className="font-semibold">
											Hougang United - Balestier Khalsa
										</p>{" "}
										<p>football singapore premier league</p>{" "}
									</td>
									<td className="py-2">XXXX</td>
									{showCalculator && (
										<>
											<td className="py-2">
												<div className="w-full px-2">
													<Input />
												</div>
											</td>
											<td className="py-2">
												<div className="w-full flex items-center space-x-2 px-2">
													<MdAutorenew className="text-[32px] relative top-2.5" />
													<Input />
												</div>
											</td>
											<td className="py-2">
												<div className="w-full px-2">
													<Input />
												</div>
											</td>
											<td>
												<div className="w-full flex justify-center items-center">
													<input type="checkbox" />
												</div>
											</td>
											<td>
												<div className="w-full flex justify-center items-center">
													<input type="radio" />
												</div>
											</td>
										</>
									)}

									<td className="py-2">XX</td>
								</tr>
								<tr>
									<td className="text-slate-500 cursor-pointer hover:text-slate-300 active:text-slate-500">
										all arbs(557)
									</td>
									{showCalculator && (
										<>
											<td></td>
											<td>
												<MdOutlineLaunch />
											</td>
											<td></td>
											<td className="py-2">
												<div className="w-full flex items-center space-x-2 px-2">
													<MdAutorenew className="text-[32px] relative top-2.5" />
													<Input />
												</div>
											</td>
											<td className="py-2">
												<div className="w-full px-2">
													<Input />
												</div>
											</td>
											<td></td>
											<td>
												<div className="w-full flex justify-center items-center">
													<input type="radio" />
												</div>
											</td>
											<td>
												<div className="px-3 py-2 text-white rounded-lg bg-slate-500 cursor-pointer hover:bg-slate-300 active:bg-slate-500">
													=
												</div>
											</td>
										</>
									)}
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Surebets;
