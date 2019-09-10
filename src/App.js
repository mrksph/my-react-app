import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {date: Date()};
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
                    <div className="testimoniosList">

                        <div className="testimony">
                            <p className="quote">React es un framework bastante bueno para hacer apps web</p>

                            <div className="author-container">
                                <img src={logo}/>
                                <p className="author">Pepito Perez</p>
                            </div>
                        </div>

                        <div className="testimony">
                            <p className="quote">Tambien sirve para hacer apps hibridas. De hecho tengo una!</p>
                            <div className="author-container">
                                <img src={logo}/>
                                <p className="author">El Grillo</p>
                            </div>
                        </div>

                        <div className="testimony">
                            <p className="quote">Es un poco complicado de entender al principio si no se practica lo
                                suficiente pero a la
                                larga se nota sus ventajas sobre otros frameworks.</p>
                            <div className="author-container">
                                <img src={logo}/>
                                <p className="author">Bello Cual Camello</p>
                            </div>
                        </div>

                    </div>


                    <div className="footer">
                        <div className="linksList">
                        <ul>
                            <li>
                                Inicio
                            </li>
                            <li>
                                Contacto
                            </li>
                        </ul>
                        </div>
                        <p>Todos los derechos reservados. 1297-2019</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;