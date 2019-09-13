import React, {Component} from "react"
import {Link} from 'react-router-dom'
import Header from "../header";
import Footer from "../footer";
import './home.css';

class Home extends Component {

	render() {
		return <div className="home-container">
			<div className="content-container">
				<p>This is the home page after login</p>
			</div>
		</div>
	}

}

export default Home;