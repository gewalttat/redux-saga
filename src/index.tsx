import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./redux/rootReducer";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
    thunk
)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root'));
