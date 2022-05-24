import { FC } from "react";

import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";

const Footer: FC = () => {
	return (
		<div className="h-20 flex text-white justify-between items-center px-5 mt-10">
			<h4>BetSlayer-clone</h4>
			<div className="space-x-3">
				<Instagram />
				<Facebook />
				<Twitter />
			</div>
		</div>
	);
};

export default Footer;
