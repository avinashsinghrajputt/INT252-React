// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { AuthProvider } from './authcontext';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);