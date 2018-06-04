import React from 'react';
import ReactDOM from 'react-dom';
import Data from './data/data';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.querySelector('#root')
ReactDOM.render(<App myData={Data} />, rootElement)
registerServiceWorker();
