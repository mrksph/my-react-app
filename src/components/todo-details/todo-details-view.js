import React, {Component} from 'react';
import './todo-details.css';
import {connect} from "react-redux";


const getAllTodos = (todos) => {
	return todos;
}

const mapStateToProps = state => ({
	todos: getAllTodos(state.todos)
});


class TodoDetails extends Component {
	render() {
		const details = this.props.todos.list.find(item => item.id === this.props.todos.selected) || {};

		if (Object.keys(details).length === 0) {
			return <div>
				<p>Selecciona una Nota para ver sus detalles!</p>
			</div>
		}
		return <div className="todo-item">
			<p className="title">{details.title}</p>
			<p className="description">{details.description}</p>
		</div>

	}
}

export default connect(mapStateToProps, null)(TodoDetails);
