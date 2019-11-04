import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import { Provider } from 'react-redux';
import './public/styles.scss';
import configureStore from './redux/configureStore';
const store = configureStore();
render(
      <Provider store={store}> 
      <Router>
            <App/>
      </Router>
      </Provider>,
 document.getElementById('root')
 );
