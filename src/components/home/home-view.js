import React, {Component} from "react"
import './home.css';
import TodoItem from "../todo-item";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            todos: [
                {
                    id: "",
                    title: "HOOOLAA",
                    description: " HOOOAL",
                    isSelected: false
                }
            ]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
    }

    createTodo(event) {
        event.preventDefault();

        const todos = this.state.todos;
        const myObj = {
            title: this.state.title,
            description: this.state.description,
            isSelected: false
        };

        this.setState({todos: [...todos, myObj]});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleTodoClick(event) {
    }

    render() {
        return (
            <div className="content-container">
                <div className="item create-container">
                    <h2>Create</h2>
                    <form className="create-form" onSubmit={this.createTodo}>
                        <input type="text" placeholder="Titulo" name="title" value={this.state.title}
                               onChange={this.handleInputChange}/>
                        <textarea placeholder="Descripción" name="description" value={this.state.description}
                                  onChange={this.handleInputChange}/>

                        <button>Crear</button>
                    </form>
                </div>
                <div className="item list-container">
                    <h2>List</h2>
                    {this.state.todos.map((item, index) => {
                        return (
                           <TodoItem key={index} todo={item}/>
                        )
                    })}
                </div>
                <div className="item details-container">
                    <h2>Details</h2>
                </div>
            </div>
        );
    }
}

export default Home;
