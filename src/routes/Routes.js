import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Index from "../components/login";
import App from "../components/app/App";

function AppRouter() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>

						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>

				<Route path="/" exact component={App}/>
				<Route path="/login" component={Index}/>
			</div>
		</Router>
	);
}

export default AppRouter;