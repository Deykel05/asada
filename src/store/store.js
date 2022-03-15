import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from "../reducers/authReducer";
import { requestsReducer } from '../reducers/requestsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    request: requestsReducer
});
export const store= createStore(reducers,composeEnhancers(applyMiddleware(thunk)));