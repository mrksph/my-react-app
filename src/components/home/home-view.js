import React, {Component} from "react"
import './home.css';
import TodoItem from "../todo-item";
import TodoDetails from "../todo-details/todo-details-view";
import {connect} from "react-redux";
import {createTodo} from "../../actions";

const getAllTodos = (todos) => {
	return todos;
}

const mapDispatchToProps = {
	createTodo
};

const mapStateToProps = state => ({
	todos: getAllTodos(state.todos)
});

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			selected: -1,
			todos: [
				{
					id: 0,
					title: "Ir al Supermercado",
					description: "Faltan huevos, hay que comprar manzanas y traer unos helados sabor mango.",
					isSelected: false
				},
				{
					id: 1,
					title: "Presentacion ",
					description: "Hacer cosas del tablero. Intentar mejorarlo a ver cuanto tiempo tarda.",
					isSelected: false
				}
			]
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.handleActionTodoItem = this.handleActionTodoItem.bind(this);
	}

	handleActionTodoItem(data) {
		this.setState({
			selected: data.props.id
		});
	}

	createTodo(event) {
		event.preventDefault();

	//	const todos = this.state.todos;

		const myObj = {
			title: this.state.title,
			description: this.state.description
		};
		this.props.createTodo(myObj);
		this.setState({title: '', description: ''});
		//this.setState({todos: [...todos, myObj]});
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

		const detailsItem = this.state.todos.find(item => item.id === this.state.selected);

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
						{
							this.props.todos.map((item, index) => {
								return (
									<TodoItem key={index} id={index} todo={item} action={this.handleActionTodoItem}
														isSelected={this.state.selected === item.id}/>
								)
							})
						}
					</div>
				</div>
				<div className="item details-container">
					<h2>Details</h2>
					<div className="details-todo">
						<TodoDetails todo={detailsItem}/>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
