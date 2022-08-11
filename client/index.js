import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../client/store';
import '../public/styles.css'

ReactDOM.render(
    <Provider store={store}>
  <div>Hello, world!
    </div>
    </Provider>,
  document.getElementById('app')
 
);