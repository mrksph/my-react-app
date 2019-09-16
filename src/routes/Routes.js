import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from "../components/home/home-view";
import Register from "../components/register";
import Login from "../components/login";

class AppRouter extends Component {

	render() {

		const fakeAuth = {
			isAuthenticated: false,
			authenticate(cb) {
				this.isAuthenticated = true
				setTimeout(cb, 100);
			},
			signout(cb) {
				this.isAuthenticated = false
				setTimeout(cb, 100)
			}
		}

		const PrivateRoute = ({component: Component, ...rest}) => {
			return <Route {...rest} render={(props) => (
				fakeAuth.isAuthenticated === true
					? <Component {...props} />
					: <Redirect to="/login"/>
			)}/>
		}

		return (
			<Router>
				<Switch>
					<PrivateRoute path="/" exact component={Home}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
				</Switch>
			</Router>
		)
	};
}

export default AppRouter;