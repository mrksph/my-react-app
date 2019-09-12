import React, {Component} from 'react';
import './login.css';

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
			<h2>Login Page</h2>
			<form className="login-form" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Email" onChange={this.handleChange} id="email" value={this.state.email}/>
				<input type="password" placeholder="Contraseña" onChange={this.handleChange} id="password"
							 value={this.state.password}/>

				<button type="submit" disabled={!this.validateForm()}>Entrar</button>

				<p className="link-to-register" onClick={this.handleLinkToRegister}>No tienes cuenta? Registrate</p>
			</form>
		</div>;
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleLinkToRegister = event => {
		alert("LETS GO TO REGISTER PAGE NOW");
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		//this.props.childProps.history.push("/home");
		alert("LOG IN OK");
	}
}

export default Login;