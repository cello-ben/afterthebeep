import React, { useReducer, createContext } from 'react';
import GlobalReducer from './GlobalReducer';
import axios from 'axios';

const initialState = {
    entries: [],
};

export const Context = createContext(initialState);

export function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);
    async function getEntries() {
        try {
            const res = await axios.get('api/v1/entries');
            dispatch({
                type: 'GET_ENTRIES',
                payload: res.data.entries
            });
        } catch (e) {
            console.error(e);
        }
    }
    
    async function addEntry(entry) {
        try {
            const res = await axios.post('api/v1/entries', {text: entry});
            dispatch({
                type: 'ADD_ENTRY',
                payload: res.data.entry
            });
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Context.Provider
        value = { {
            entries: state.entries,
            getEntries,
            addEntry
        } } >    
        { children }
        </Context.Provider>
    );
};