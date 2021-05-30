import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {compose, createStore} from "redux";
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root'));
