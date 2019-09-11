import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';

import TestimonialsList from "../testimonials-list";
import Login from "../login"
import Footer from "../footer/footer-view";

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

				<div className="practice">
					<div className="intro">
						<h1 className="title">
							Practicando con React
						</h1>
						<p className="subtitle">
							Para reanudar lo que estaba hecho voy a empezar por lo básico, algo de HTML y CSS dentro del mismo App.js
							para luego sacar a un componente propio que será mucho mas facil de reutilizar a lo largo de la
							aplicación.
						</p>

					</div>

					<h2>Testimonios</h2>
					<TestimonialsList testimonials={this.state.testimonials}/>
				</div>

				<div className="practice">
					<div className="intro">
						<h1 className="title">
							Seguimos practicando con React
						</h1>
						<p className="subtitle">
							Como segunda practica vamos a hacer un pagina de login para aprender a utilizar el Router de React.
							Deberia de ser algo sencillo primeramente, que simplemente alterne entre dos paginas al hacer click en un
							enlace. Más adelante añadiremos la funcionalidad de log in como tal.
						</p>

					</div>

					<h3>Login</h3>
					<Login/>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default App;