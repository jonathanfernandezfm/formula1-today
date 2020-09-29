import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Calendar } from "./pages/Calendar";
import { Standings } from "./pages/Standings";
import { Circuits } from "./pages/Circuits";
import { Drivers } from "./pages/Drivers";
import { Teams } from "./pages/Teams";
import { Races } from "./pages/Races";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Route path="/" exact component={Landing} />
					<Route path="/calendar" exact component={Calendar} />
					<Route path="/standings" exact component={Standings} />
					<Route path="/circuits" exact component={Circuits} />
					<Route path="/drivers" exact component={Drivers} />
					<Route path="/teams" exact component={Teams} />
					<Route path="/races" exact component={Races} />
				</Layout>
			</Router>
		</div>
	);
}

export default App;
