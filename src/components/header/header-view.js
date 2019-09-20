import React, {Component} from "react";
import logo from "../../logo.svg";
import './header.css';
import {connect} from "react-redux";

import {logOut} from "../../actions";

const mapDispatchToProps = {
	logOut
};

class Header extends Component {

	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut() {
		this.props.logOut();
	}

	render() {
		return <header className="app-header">
			<div className="logout-container">
				<img src={logo} alt="alt"/>
				<button onClick={this.handleLogOut}>Salir</button>
			</div>
		</header>
	}

}

export default connect(null, mapDispatchToProps)(Header);