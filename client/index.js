import React from 'react';
import {Provider} from 'react-redux';
import store from '../client/store';
import '../public/styles.css';
import Routes from './components/Routes'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}><Routes/></Provider>);