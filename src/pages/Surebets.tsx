import { FC, useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

// icons
import { MdClose } from "react-icons/md";
import { gql, useQuery } from "@apollo/client";

import { ArbData, returnData } from "../interface/common"
import Arb from "../components/Arb";
import Button from "../components/Button";

const GETARBSANDUSER = gql`
query Query {
  getUser {
    subscribed
  }
  getArbs {
    status
    message
    arbs {
      initiator {
        bookmaker
        value
        name
        link
				league
				odds_type
      }
      regular {
        bookmaker
        value
        name
        link
				league
				odds_type
      }
      sport
      time
      redirects
			lifetime
			id
    }
  }
}
`


interface IGetArbs extends returnData {
	arbs: ArbData[]
}

interface IGetUser {
	subscribed: boolean;
}

const Surebets: FC = () => {
	const [showWarning, setShowWarning] = useState<boolean>(true);

	const { loading, data, error, refetch } = useQuery<{ getUser: IGetUser | null, getArbs: IGetArbs }>(GETARBSANDUSER)

	useEffect(() => { refetch() }, [])

	const handleAlert = () => {
		console.log(data?.getUser?.subscribed)
		if (!data?.getUser?.subscribed && showWarning) return (
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
		)
	}


	if (loading) return (
		<div>
			<NavigationBar />
			<div className="w-full h-full flex justify-center items-center">
				<p>loading...</p>
			</div>
		</div>
	)

	if (error) return (
		<div className="flex flex-col h-screen">
			<NavigationBar />
			<div className="flex-1 w-screen flex flex-col space-y-2 items-center justify-center">
				<h1>Error!</h1>
				<p className="text-lg">something went wrong.</p>
				<Button onClick={() => window.location.reload()}>Reload Page</Button>
			</div>
		</div>
	)

	if (data?.getArbs.status === "failed") return (
		<div className="flex flex-col h-screen">
			<NavigationBar />
			<div className="flex-1 w-screen flex flex-col space-y-2 items-center justify-center">
				<h1>Error!</h1>
				<p className="text-lg">something went wrong.</p>
				<Button onClick={() => window.location.reload()} >Reload Page</Button>
			</div>
		</div>
	)

	return (
		<div>
			<NavigationBar />
			<div className="pb-14 lg:px-60 md:px-32">
				{/* placer */}
				{handleAlert()}
				<div className="mx-3 mt-8">
					<div>
						<div className="flex">
							<h6 className="w-[100px] py-2 px-3">Profit</h6>
							<h6 className="w-[100px] py-2 px-3">Event</h6>
						</div>
						<div className="space-y-8">

							{data?.getArbs.arbs.map(arb => {
								console.log("arbs here")
								console.log(arb.lifetime);

								return (
									<Arb {...arb}
										subscribed={data.getUser?.subscribed || false}
									// subscribed={true}
									/>
								)
							})}
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Surebets;
