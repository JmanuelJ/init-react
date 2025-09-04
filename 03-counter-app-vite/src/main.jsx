import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';
//import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20}/>
        {/*<FirstApp title={'El titulo'}/>*/}
    </React.StrictMode>
);