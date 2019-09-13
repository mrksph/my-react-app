import React, {Component} from "react";
import './register.css';
import {Link} from "react-router-dom";

class Register extends Component {

	render() {
		return (
			<div className="register-container">
				<h2>Register Page</h2>
				<form className="register-form" onSubmit={this.handleSubmit}>
					<input type="text"
								 placeholder="Usuario"/>
					<input type="password"
								 placeholder="Contraseña"/>
					<input type="password"
								 placeholder="Repetir Contraseña"/>

					<button className="register-button">Registrar</button>
				</form>
				<Link className="link-to-login" to="/login">Ya tienes cuenta? Inicia sesión.</Link>
			</div>
		);
	}
}

export default Register;