import React, {Component} from "react";
import logo from "../../logo.svg";
import './header.css';

class Header extends Component {

	render() {
		return <header className="App-header">
			<img src={logo} className="App-logo" alt="logo"/>
			<h1 className="App-title">Welcome to Simple Todo React !</h1>
		</header>
	}

}

export default Header;