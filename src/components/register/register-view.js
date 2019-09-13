import React, {Component} from "react";
import './register.css';

class Register extends Component {

	render() {
		return (
			<div className="register-container">
				<form className="register-form">
					<input type="text" placeholder="Usuario"/>
					<input type="password" placeholder="Contraseña"/>
					<input type="password" placeholder="Repetir Contraseña"/>

					<button className="register-button">Registrar</button>

					<p className="link-to-login">Ya tienes cuenta? Inicia sesión.</p>
				</form>
			</div>
		);
	}
}

export default Register;