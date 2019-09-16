import React, {Component} from 'react';
import './todo-details.css';

class TodoDetails extends Component {
	render() {
		const details = this.props.todo || {};

		if (Object.keys(details).length === 0) {
			return <div>
			</div>
		}
		return <div className="todo-item">
			<p className="title">{details.title}</p>
			<p className="description">{details.description}</p>
		</div>

	}
}

export default TodoDetails;
