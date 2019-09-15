import React, {Component} from "react"
import {Link} from 'react-router-dom'
import Header from "../header";
import Footer from "../footer";
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                title: '',
                description: ''
            },
            todos: [
                {
                    title: "HOOOLAA",
                    description: " HOOOAL"
                }
            ]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.createTodo = this.createTodo.bind(this);
    }

    createTodo(event) {
        event.preventDefault();
        const todosa = this.state.todos;
        const myObj = {
            title: this.state.form.title,
            description: this.state.form.description
        };
        this.setState({todos: [todosa, ...myObj]});
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const name = target.name;

        this.setState({
            form: {
                [name]: value
            }
        });
    }

    render() {
        return (
            <div className="content-container">
                <div className="item create-container">
                    <h2>Create</h2>
                    <form className="create-form" onSubmit={this.createTodo}>
                        <input type="text" placeholder="Titulo" name="title" value={this.state.form.title}
                               onChange={this.handleInputChange}/>
                        <textarea placeholder="Descripción"/>
                        <button> Crear</button>
                    </form>
                </div>
                <div className="item list-container">
                    <h2>List</h2>
                    <div className="">

                        {this.state.todos.map((item, index) => {
                            return (
                                <div className="todo-item" key={index}>
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })}

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
