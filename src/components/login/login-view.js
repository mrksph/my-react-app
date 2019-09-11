import React, {Component} from 'react';
import './login.css';


class Index extends Component {

	render() {
		return <div className="login-container">
			<form className="login-form">
				<input type="text" placeholder="User"/>
				<input type="text" placeholder="Contraseña"/>
				<button type="submit">Login</button>
			</form>
		</div>;
	}
}

export default Index;