import React, {Component} from "react"
import {Link} from 'react-router-dom'
import Header from "../header";
import Footer from "../footer";
import './home.css';

class Home extends Component {

	render() {
		return (
			<div className="content-container">
				<div className="item create-container">
					<h2>Create</h2>
					<form className="create-form">
						<input type="text" placeholder="Titulo"/>
						<textarea placeholder="Descripción"/>
						<button> Crear</button>
					</form>
				</div>
				<div className="item list-container">
					<h2>List</h2>
					<div className="">
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
						<div className="todo-item">
							<p>Titulo1</p>
							<p>Descripcion</p>
						</div>
					</div>
				</div>
				<div className="item details-container">
					<h2>Details</h2>

				</div>
			</div>
		);
	}
}

export default Home;