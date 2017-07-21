import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ChannelSearch from './components/ChannelSearch';

const APP_ROOT = document.createElement('div');
document.body.appendChild(APP_ROOT);

ReactDOM.render(<ChannelSearch />, APP_ROOT);
