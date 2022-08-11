import {createStore, applyMiddleware} from 'redux';
import ThunkMiddleware  from 'redux-thunk';
import { createLogger } from 'redux-logger';
import dummyReducer from './redux';

const store = createStore(dummyReducer, applyMiddleware(ThunkMiddleware, createLogger()));

export default store;