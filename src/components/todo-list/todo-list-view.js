import React, {Component} from 'react';
import TodoItem from "../todo-item";
import {connect} from "react-redux";
import {selectTodo} from "../../actions";

const getAllTodos = (todos) => {
	return todos;
}

const mapStateToProps = state => ({
	todos: getAllTodos(state.todos)
});


const mapDispatchToProps = {
	selectTodo
};


class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: -1
		};

		this.handleActionTodoItem = this.handleActionTodoItem.bind(this);
	}

	handleActionTodoItem(todo) {
		this.props.selectTodo({id: todo.id});
		/*
				if (this.state.selected !== data.props.id) {
					this.setState({
						selected: data.props.id
					});
				} else {
					this.setState({
						selected: -1
					});
				}
				*/
	}

	render() {
		document.todoList = this;

		if (this.props.todos.list.length !== 0) {
			const todoItems =
				this.props.todos.list.map((item, index) => {
					return (
						<TodoItem key={index}
											todo={item}
											action={this.handleActionTodoItem}
											isSelected={this.props.todos.selected === item.id}/>
					)
				})

			return <div className="todosList">
				{todoItems}
			</div>;
		} else {
			return <div className="todosList">
				Lista de Notas vacía! Crea una para verla aquí
			</div>;
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);