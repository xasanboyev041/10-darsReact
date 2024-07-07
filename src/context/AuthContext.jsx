import React, { createContext, useReducer } from 'react';
import authReducer from '../reducers/authReducer';

const initialState = {
    user: null,
    token: null,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (email, password) => {
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: data });
                localStorage.setItem('user', JSON.stringify(data));
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Login failed', error);
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ ...state, login }}>
            {children}
        </AuthContext.Provider>
    );
};
