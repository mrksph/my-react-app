import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TestimonialsList from "./TestimonialsList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Date(),
            testimonials: [
                {
                    quote: "Estamos empezando a usar React en nuestra empresa y por ahora nos esta gustando bastante. Es bastante fácil de aprender y nos aporta muchas ventajas.",
                    logo: logo,
                    author: "Perelli Peperoni"
                }, {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida lorem sapien, vulputate vestibulum lorem suscipit eget.",
                    logo: logo,
                    author: "Ipsum Lorem"
                }, {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio ligula, tempor sit amet lorem nec, lobortis scelerisque risus.",
                    logo: logo,
                    author: "Laurin Hills"
                }
            ]
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: Date()
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div className="firstPractice">
                    <div className="intro">
                        <h1 className="title">
                            Practicando con React
                        </h1>
                        <p className="subtitle">
                            Para reanudar lo que estaba hecho voy a empezar por lo básico, algo de HTML y CSS para luego
                            sacar a un elemento propio que será mucho mas facil de reutilizar.
                        </p>

                    </div>

                    <h2>Testimonios</h2>
                    <TestimonialsList testimonials={this.state.testimonials}/>
                </div>

                <div className="footer">
                    <div className="linksList">
                        <div>
                            <a>Inicio</a>
                            <a>Sobre Nosotros</a>
                            <a>Contacto</a>
                        </div>
                    </div>
                    <p>Todos los derechos reservados. 1640-2019</p>
                </div>
            </div>
        );
    }
}

export default App;