import "./App.css";
import Arbitrage from "./pages/Arbitrage/Arbitrage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// react touter
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/sure-bets" element={<Arbitrage />} />
		</Routes>
	);
};

export default App;
