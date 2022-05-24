import React, { FC } from "react";
import Tag from "../Tag/Tag";

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
		<table>
			<tr>
				<th>Event</th>
				<th>Market</th>
				<th>Time</th>
				<th>Profit</th>
			</tr>
			{DUMMYDATA.map((bet) => {
				return (
					<tr>
						<td>
							<p>{bet.event.name}</p>
							<Tag>{bet.event.sport}</Tag>
						</td>
						<td>
							<p>{bet.market.type}</p>
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

export default BetTable;
