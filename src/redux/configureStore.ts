import {createStore, applyMiddleware, Store} from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import {composeWithDevTools} from 'redux-devtools-extension';

export default (initialState?: any) => {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant())))
}