// SomeComponent.js
import React, { useContext } from 'react';
import { AuthContext } from './authcontext';

const SomeComponent = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return (
        <div>
            <p>User is {isAuthenticated ? 'authenticated' : 'not authenticated'}</p>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default SomeComponent;