import React, {Component} from "react";
import logo from "../../logo.svg";
import './header.css';

class Header extends Component {

	render() {
		return <header className="app-header">
			<div className="logout-container">
				<img src={logo} alt="alt"/>
				<p>Usuario</p>
			</div>
		</header>
	}

}

export default Header;