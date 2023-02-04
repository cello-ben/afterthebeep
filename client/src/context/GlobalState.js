import React, { useReducer, createContext } from 'react';
import GlobalReducer from './GlobalReducer';
import axios from 'axios';

export const Context = createContext()

export function GlobalProvider({ children }) {
    const initialState = {
        messages: []
    };

    const [state, dispatch] = useReducer(GlobalReducer);
    //     Actions to send to reducer.
    //     Get
    async function getEntries() {
        try {
            
        } catch (e) {
            
        }
    }
    
    async function addEntry(entry) {

    }

    return (
        <Context.Provider
        value = { [state, setState, getEntries, addEntry] }>
            { children }
        </Context.Provider>
    );
};