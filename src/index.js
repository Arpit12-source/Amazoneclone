import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore,compose, combineReducers } from 'redux';
import LoginReducer from './Reducer/LoginReducer';
import thunk from "redux-thunk";
import SignupReducer from './Reducer/SignupReducer';
import AddReducer from "./Reducer/AddReducer";
import AddressReducer from './Reducer/AddressReducer';



const rootReducer =combineReducers({Login:LoginReducer,product:AddReducer,signup :SignupReducer, address:AddressReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
