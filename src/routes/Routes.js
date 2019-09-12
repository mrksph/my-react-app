import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "../components/app/App";
import Home from "../components/home/home-view";

function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={App}/>
				<Route path="/home" component={Home}/>
			</Switch>
		</Router>
	);
}

export default AppRouter;