import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from "../components/app/App";
import Home from "../components/home/home-view";
import Register from "../components/register";
import Login from "../components/login";

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={App}/>
					<Route path="/home" component={Home}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
				</Switch>
			</Router>
		)
	};
}

export default AppRouter;