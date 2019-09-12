import React, {Component} from 'react';
import './login.css';
import {BrowserRouter, Link, Redirect} from "react-router-dom";

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	render() {
		return <div className="login-container">
			<form className="login-form" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Email" onChange={this.handleChange} id="email" value={this.state.email}/>
				<input type="text" placeholder="Contraseña" onChange={this.handleChange} id="password"
							 value={this.state.password}/>

				<button type="submit" disabled={!this.validateForm()}>Entrar</button>
			</form>
		</div>;
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
		this.props.childProps.history.push("/home");
	}
}

export default Login;