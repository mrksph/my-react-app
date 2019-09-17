import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';

import Header from "../header";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../home";
import Login from "../login";
import Register from "../register";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,
			testimonials: [
				{
					quote: "Estamos empezando a usar React en nuestra empresa y por ahora nos esta gustando bastante. Es bastante fácil de aprender y nos aporta muchas ventajas.",
					logo: logo,
					author: "Perelli Peperoni"
				}, {
					quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida lorem sapien, vulputate vestibulum lorem suscipit eget.",
					logo: logo,
					author: "Ipsum Lorem"
				}, {
					quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio ligula, tempor sit amet lorem nec, lobortis scelerisque risus.",
					logo: logo,
					author: "Laurin Hills"
				}
			]
		};

		this.handleTest = this.handleTest.bind(this);
	}

	handleTest(data) {
		this.setState({isAuthenticated: true});
	}

	render() {
		document.app = this;

		const PrivateRoute = ({component: Component, ...rest}) => {
			return <Route {...rest} render={(props) => (
				this.state.isAuthenticated === true
					? <Component {...props} />
					: <Redirect to="/login"/>
			)}/>
		}

		return (
			<div className="App">
				<Header/>
				<Switch>
					<PrivateRoute path="/" exact component={Home}/>
					<Route path="/login"
								 render={
									 props => <Login action={this.handleTest}
																	 isAuthenticated={this.state.isAuthenticated}/>
								 }/>
					<Route path="/register" component={Register}/>
				</Switch>
			</div>
		);
	}
}

export default App;
