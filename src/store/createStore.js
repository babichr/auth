import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger();

const initialState = {};

const makeRootReduces = ( ) => {
    return combineReducers({

    })
};

export const store = createStore(
	makeRootReduces(),
	initialState,
	applyMiddleware(
		thunk,
		logger
	)
);
