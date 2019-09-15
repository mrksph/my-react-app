import React, {Component} from 'react';
import './todo-item.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {
                ...this.props.todo
            }
        };

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        this.setState({
            todo: {
                ...this.state.todo,
                isSelected: !this.state.todo.isSelected
            }
        });
    }

    render() {
        return <div className="todo-item" onClick={this.handleOnClick}>
            <p className="title">{this.state.todo.title}</p>
            <div className={"selected-box" + (this.state.todo.isSelected ? ' is-selected' : '')}></div>
            <p className="description">{this.state.todo.description}</p>
        </div>

    }
}

export default TodoItem;
