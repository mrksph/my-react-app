import React, {Component} from 'react';
import './todo-item.css';

class TestimonyItem extends Component {
	render() {
		const testimony = this.props.testimony;

		return <div className="testimony">
			<p className="quote">{testimony.quote}</p>
			<div className="author-container">
				<img src={testimony.logo} alt="meaningful text"/>
				<p className="author">{testimony.author}</p>
			</div>
		</div>;
	}
}

export default TestimonyItem;