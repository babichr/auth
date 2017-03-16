import React from "react";
import ReactDOM from "react-dom";
import { Provider } from  "react-redux";
import { store } from "./store/createStore";
import { Router, Route, browserHistory } from "react-router";


const App  = () => {
	return (
		<Provider store={ store } >
			<main>
			</main>
		</Provider>
	)
}

ReactDOM.render( <App />, document.getElementById("root") );