import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserData from './data/data';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App myData={UserData}/>, document.getElementById('root'));
registerServiceWorker();
