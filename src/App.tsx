import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.scss";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { Calendar } from "./pages/Calendar";

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Route path="/" exact component={Landing} />
					<Route path="/calendar" exact component={Calendar} />
				</Layout>
			</Router>
		</div>
	);
}

export default App;
