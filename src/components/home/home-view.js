import React, {Component} from "react"
import './home.css';
import TodoDetails from "../todo-details/todo-details-view";
import TodoList from "../todo-list/todo-list-view";
import {connect} from "react-redux";
import {createTodo} from "../../actions";


const mapDispatchToProps = {
	createTodo
};

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
	}

	createTodo(event) {
		event.preventDefault();

		const myObj = {
			title: this.state.title,
			description: this.state.description
		};

		this.props.createTodo(myObj);

		this.setState({title: '', description: ''});
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		document.home = this;

		return (
			<div className="content-container">
				<div className="item create-container">
					<h2>Create</h2>
					<div className="form-container">
						<form className="create-form" onSubmit={this.createTodo} autoComplete="off">
							<input type="text" placeholder="Titulo" autoComplete="off" name="title" value={this.state.title}
										 onChange={this.handleInputChange}/>
							<textarea placeholder="Descripción" name="description" value={this.state.description}
												onChange={this.handleInputChange}/>

							<button>Crear</button>
						</form>
					</div>
				</div>
				<div className="item list-container">
					<h2>List</h2>
					<div className="todo-list">
						<TodoList />
					</div>
				</div>
				<div className="item details-container">
					<h2>Details</h2>
					<div className="details-todo">
						<TodoDetails />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Home);
