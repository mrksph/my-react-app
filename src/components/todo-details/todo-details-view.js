import React, {Component} from 'react';
import './todo-details.css';

class TodoDetails extends Component {
    render() {
        const details = this.props.todo || {};
        return <div className="todo-item">
            <p className="title">{details.title}</p>
            <p className="description">{details.description}</p>
        </div>

    }
}

export default TodoDetails;
