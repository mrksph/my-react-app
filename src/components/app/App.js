import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';

import TodoList from "../todo-list";
import Login from "../login"
import Register from "../register";
import Header from "../header";
import Footer from "../footer";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nav: {
				history: props.history,
				location: props.location,
				match: props.match
			},
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
	}

	userHasAuthenticated = authenticated => {
		this.setState({
			isAuthenticated: authenticated
		})
	}

	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated
		}

		return (
			<div className="App">
				<Header/>
				<Login/>
			</div>
		);
	}
}

export default App;