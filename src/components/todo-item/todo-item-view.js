import React, {Component} from 'react';
import './todo-item.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.props.action(this);
    }

    render() {
        const item = this.props.todo;

        return <div className="todo-item" onClick={this.handleOnClick}>
            <p className="title">{item.title}</p>
            <div className={"selected-box" + (this.props.isSelected ? ' is-selected' : '')}/>
            <p className="description">{item.description}</p>
        </div>

    }
}

export default TodoItem;
