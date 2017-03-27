import React from "react";
import ReactDOM from "react-dom";
import { Provider } from  "react-redux";
import { store } from "./store/createStore";
import { Router, Route, browserHistory } from "react-router";
import Login from "./components/Login";
import Main from "./components/Main";
import Registration from "./components/Registration";
import User from "./components/User";


const App  = () => {
	return (
		<Provider store={ store } >
			<main>
				<Router history={ browserHistory } >
					<Route component={ Main } >
						<Route path="/" component={ Login } />
						<Route path="/registration" component={ Registration } />
                        <Route path="/user/:id" components={ User } />
					</Route>
				</Router>
			</main>
		</Provider>
	)
};

ReactDOM.render( <App />, document.getElementById("root") );