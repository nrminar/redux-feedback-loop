import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {}, action) =>{
    if(action.type === 'ADD_FEELING'){
        state = {...state, feeling: action.payload}
    }
    if(action.type === 'ADD_UNDERSTAND'){
        state = {...state, understand: action.payload}
    }
    if(action.type === 'ADD_SUPPORT'){
        state = {...state, support: action.payload}
    }
    if(action.type === 'ADD_COMMENT'){
        state = {...state, comment: action.payload}
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }), 
    applyMiddleware(logger)   
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
