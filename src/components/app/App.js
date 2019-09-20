import React, {Component} from 'react';
import './App.css';

import Header from "../header";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../home";
import Register from "../register";
import Login from "../login"
import {connect} from "react-redux";


const mapStateToProps = state => ({
	session: isAuthenticated(state.session)
});

const isAuthenticated = (state) => {
	return state;
};


class App extends Component {

	render() {
		console.log("APP: " + this.props.session.isAuthenticated);

		document.app = this;

		const PrivateRoute = ({component: Component, isAuth, ...rest}) => {
			return <Route {...rest} render={(props) => (
				isAuth ? <Component {...props} /> : <Redirect to="/login"/>
			)}/>
		};

		return (
			<div className="App">
				<Header/>
				<Switch>
					<PrivateRoute exact path="/" component={Home} isAuth={this.props.session.isAuthenticated}/>
					<Route component={Login}/>
					<Route component={Register}/>
				</Switch>
			</div>
		);
	}
}

export default connect(mapStateToProps, null)(App);
