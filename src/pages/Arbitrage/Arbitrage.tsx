import React, { FC } from "react";
import "./style.css";
import Tag from "../../components/Tag/Tag";
import Button from "../../components/Button";

export default function Arbitrage() {
	return (
		<div className="arbitrage container flex">
			<BetTable />
			<BetView />
		</div>
	);
}

const DUMMYDATA = [
	{
		event: {
			name: "Buzarnescu, Mihaela-Bandecchi, Susan",
			sport: "Tennis",
		},
		market: {
			type: "2 way",
			order: "ordinary time",
		},
		time: "12:30 18/05/2022",
		profit: "1.53",
	},
	{
		event: {
			name: "Event 2",
			sport: "sport",
		},
		market: {
			type: "over/under",
			order: "first half",
		},
		time: "15:45 21/05/2022",
		profit: "2.75",
	},
];

const BetTable: FC = () => {
	return (
		<table className="bet-table flex--1 p-1">
			<tr className="table__heading">
				<th>Event</th>
				<th>Market</th>
				<th>Time</th>
				<th>Profit</th>
			</tr>
			{DUMMYDATA.map((bet, index) => {
				return (
					<tr key={index}>
						<td>
							<p style={{ marginBottom: "5px" }}>{bet.event.name}</p>
							<Tag>{bet.event.sport}</Tag>
						</td>
						<td>
							<p style={{ marginBottom: "5px" }}>{bet.market.type}</p>
							<Tag>{bet.market.order}</Tag>
						</td>
						<td>{bet.time}</td>
						<td>{bet.profit}</td>
					</tr>
				);
			})}
		</table>
	);
};

const BetView = () => {
	return (
		<div className="bet-view flex--1 p-1">
			<div className="heading-container space-between">
				<div className="heading-container__section--1">
					<h4>Buzarnescu, Mihaela-Bandecchi, Susan</h4>
					<div className="hori-spacer">
						<Tag>2 way</Tag>
						<Tag>Ordinary time</Tag>
						<p>Tennis/TENNIS French Open women-22</p>
					</div>
				</div>
				<div className="heading-container__section--2">15:45 21/05/2022</div>
			</div>
			<BetDetails />
			<BetDetails />
		</div>
	);
};

const BetDetails = () => {
	return (
		<div className="bet-view__details flex w-100p m-2">
			<div className="w-100p vert-spacer--x2 p-1">
				<select name="sites" id="sites">
					<option id="1xbet @ 1.85">1xbet @ 1.85</option>
					<option id="sportsBet @ 2.3">sportsBet @ 2.3</option>
				</select>
				<div className="layer--1 flex">
					<span className="odd">Odd</span>
					<span className="odd__value">1.85</span>
					<span className="odd__evaluation">17/20</span>
				</div>
			</div>
			<div className="w-100p p-1">
				<Button>1xbet</Button>
				<div className="hori-spacer m-2 w-100p flex">
					<span className="layer--2 w-100p flex">
						<span>Bet</span>
						<span>54.88</span>
					</span>
					<span className="layer--2 w-100p flex">
						<span>Win</span>
						<span>101.53</span>
					</span>
				</div>
			</div>
		</div>
	);
};
