import React, {Component} from 'react';
import './footer.css'

class Footer extends Component {

	render() {
		return <div className="footer">
			<div className="links-list">
				<a>Inicio</a>
				<a>Sobre Nosotros</a>
				<a>Contacto</a>
			</div>
			<p>Todos los derechos reservados. 1640-2019</p>
		</div>;
	}

}

export default Footer;