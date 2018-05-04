import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/pages/routes';
import registerServiceWorker from './register_service_worker';
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
