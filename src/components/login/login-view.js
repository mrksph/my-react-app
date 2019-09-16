import React, {Component} from 'react';
import './login.css';
import {Link, Redirect} from "react-router-dom";

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			isLogged: false
		};
	}

	render() {
		const isLogged = this.state.isLogged;

		if (isLogged) {
			return <Redirect to="/"/>;
		}

		return (

			<div className="login-container">
				<h2>Login Page</h2>
				<form className="login-form" onSubmit={this.handleSubmit}>
					<input type="text"
								 placeholder="Email"
								 onChange={this.handleChange}
								 id="email"
								 value={this.state.email}/>
					<input type="password"
								 placeholder="Contraseña"
								 onChange={this.handleChange}
								 id="password"
								 value={this.state.password}/>

					<button type="submit" disabled={!this.validateForm()}>Entrar</button>
				</form>
				<Link className="link-to-register" to="/register">No tienes cuenta? Registrate</Link>
			</div>
		);
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}


	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// Check if username and password are valid
	}
}

export default Login;