import "./App.css";

// pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

// react touter
import { Routes, Route } from "react-router-dom";
import Surebets from "./pages/Surebets";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sign-in" element={<SignIn />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/sure-bets" element={<Surebets />} />
			<Route path="/pricing" element={<Pricing />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
};

export default App;
