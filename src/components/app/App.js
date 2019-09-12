import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';

import TestimonialsList from "../todo-list";
import Login from "../login"
import Footer from "../footer";
import Header from "../header";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nav: {
				history: props.history,
				location: props.location,
				match: props.match
			},
			isAuthenticated: false,
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

	userHasAuthenticated = authenticated => {
		this.setState({
			isAuthenticated: authenticated
		})
	}

	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated
		}

		return (
			<div className="App">
				<Header/>

				<div className="practice">
					<div className="intro">
						<h2 className="title">
							Practicando con React
						</h2>

						<p className="subtitle">
							Para reanudar lo que estaba hecho voy a empezar por lo básico, algo de HTML y CSS dentro del mismo App.js
							para luego sacar a un componente propio que será mucho mas facil de reutilizar a lo largo de la
							aplicación.
						</p>

						<h3>Testimonios</h3>

						<TestimonialsList testimonials={this.state.testimonials}/>
					</div>
				</div>

				<div className="practice">
					<div className="intro">
						<h2 className="title">
							Seguimos practicando con React
						</h2>

						<p className="subtitle">
							Como segunda practica vamos a hacer un pagina de login para aprender a utilizar el Router de React.
							Deberia de ser algo sencillo primeramente, que simplemente alterne entre dos paginas al hacer click en un
							enlace. Más adelante añadiremos la funcionalidad de Login como tal.
						</p>

						<h3>Login</h3>

						<p>
							Este login es simbólico, realmente no se realiza peticion alguna a un servidor. Simplemente se valida que
							los campos no estén vacíos y que tengan mas de 3 carácteres.
						</p>

						<Login childProps={this.state.nav}/>
					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default App;