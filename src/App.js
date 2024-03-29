import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import MainFirebase from "./components/MainFirebase";
import Navbar from "./components/Navbar";
import Chartcomponent from "./components/chartcomponent/Chartcomponent";
import LoginModal from "./components/LoginModal";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
	return (
		<Router basename="/">
			<Fragment>
				<Route exact path="/">
					<Navbar />
					<LoginModal />
				</Route>
				<Route path="/dashboard">
				    <Navbar /> 
					<MainPage/>
				</Route>
				<Route path="/newcustomer">
					<Chartcomponent currentTile="newcustomer" />
				</Route>
				<Route path="/currentbalance">
					<Chartcomponent currentTile="currentbalance" />
				</Route>
				<Route path="/product">
					<Chartcomponent currentTile="product" />
				</Route>
				<Route path="/gdp">
					<Chartcomponent currentTile="gdp" />
				</Route>
			</Fragment>
		</Router>
	);
}

export default App;
