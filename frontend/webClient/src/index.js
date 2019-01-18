import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/store/index';
import WebClient from './components/client';

ReactDOM.render(<WebClient/>, document.getElementById('app'));
